#!/usr/bin/env node

/**
 * sync.js — Syncs concrete class stubs from the upstream @servicenow/glide
 * type declaration package.
 *
 * Usage:
 *   node scripts/sync.js                     # fetch latest from npm
 *   node scripts/sync.js --version 27.0.5    # fetch a specific version
 *   node scripts/sync.js --local ./path      # use an already-extracted package
 *   node scripts/sync.js --dry-run           # preview changes only
 *
 * What it does:
 *   1. Downloads (or reads) the upstream @servicenow/glide package
 *   2. Parses every .d.ts file with the TypeScript compiler API
 *   3. Generates concrete class/interface/type stubs with mock return values
 *   4. Generates barrel index.ts files for each namespace
 *   5. Reports what was added, updated, or removed
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const ts = require('typescript');

// ---------------------------------------------------------------------------
// CLI argument parsing
// ---------------------------------------------------------------------------
const args = process.argv.slice(2);
function getArg(name) {
  const idx = args.indexOf(name);
  if (idx === -1) return undefined;
  return args[idx + 1];
}
const flagDryRun = args.includes('--dry-run');
const flagVersion = getArg('--version');
const flagLocal = getArg('--local');

const ROOT = path.resolve(__dirname, '..');
const SRC_DIR = path.join(ROOT, 'src');
const UPSTREAM_DIR = path.join(ROOT, '.upstream');

// ---------------------------------------------------------------------------
// Step 1: Obtain upstream package
// ---------------------------------------------------------------------------
function fetchUpstream() {
  if (flagLocal) {
    const localPath = path.resolve(flagLocal);
    console.log(`Using local package at ${localPath}`);
    return localPath;
  }

  const version = flagVersion || 'latest';
  console.log(`Fetching @servicenow/glide@${version} from npm...`);

  // Clean previous upstream
  if (fs.existsSync(UPSTREAM_DIR)) {
    fs.rmSync(UPSTREAM_DIR, { recursive: true });
  }
  fs.mkdirSync(UPSTREAM_DIR, { recursive: true });

  // Get tarball URL via the public registry API (bypasses scoped registry overrides)
  const registryUrl = 'https://registry.npmjs.org/@servicenow/glide';
  const metaJson = execSync(`curl -s "${registryUrl}"`, { encoding: 'utf8' });
  const meta = JSON.parse(metaJson);

  let resolvedVersion = version;
  if (version === 'latest') {
    resolvedVersion = meta['dist-tags']['latest'];
  }

  const versionMeta = meta.versions[resolvedVersion];
  if (!versionMeta) {
    console.error(`Version ${resolvedVersion} not found. Available: ${Object.keys(meta.versions).join(', ')}`);
    process.exit(1);
  }

  const tarball = versionMeta.dist.tarball;
  console.log(`Downloading ${tarball}...`);
  execSync(`curl -sL "${tarball}" | tar xz -C "${UPSTREAM_DIR}"`, { stdio: 'inherit' });

  console.log(`Extracted @servicenow/glide@${resolvedVersion}`);
  return path.join(UPSTREAM_DIR, 'package');
}

// ---------------------------------------------------------------------------
// Step 2: Parse .d.ts files
// ---------------------------------------------------------------------------

/** Built-in types that don't need imports */
const BUILTIN_TYPES = new Set([
  'string', 'number', 'boolean', 'void', 'any', 'never', 'undefined', 'null',
  'object', 'unknown', 'bigint', 'symbol',
  'Date', 'Element', 'Error', 'RegExp', 'Promise', 'Map', 'Set', 'WeakMap', 'WeakSet',
  'Array', 'Record', 'Partial', 'Required', 'Readonly', 'Pick', 'Omit',
  'Function', 'Object', 'String', 'Number', 'Boolean',
  'Tables', // Global interface used in generics
]);

/** Get a mock return value for a given type string */
function getMockReturnValue(returnType) {
  const trimmed = returnType.trim();

  // void/never
  if (trimmed === 'void' || trimmed === 'never') return '';

  // Primitives
  if (trimmed === 'string') return 'return "";';
  if (trimmed === 'number') return 'return 0;';
  if (trimmed === 'boolean') return 'return false;';
  if (trimmed === 'any' || trimmed === 'unknown') return 'return null as any;';
  if (trimmed === 'undefined') return 'return undefined;';
  if (trimmed === 'null') return 'return null;';
  if (trimmed === 'bigint') return 'return BigInt(0);';

  // null union: string | null, etc.
  if (trimmed.includes(' | null') || trimmed.includes('null | ')) {
    return 'return null as any;';
  }

  // undefined union
  if (trimmed.includes(' | undefined') || trimmed.includes('undefined | ')) {
    return 'return undefined as any;';
  }

  // Array types: T[], Array<T>
  if (trimmed.endsWith('[]') || trimmed.startsWith('Array<')) {
    return 'return [];';
  }

  // Record types
  if (trimmed.startsWith('Record<')) {
    return 'return {} as any;';
  }

  // Generic union types that don't involve null/undefined
  if (trimmed.includes(' | ')) {
    return 'return null as any;';
  }

  // Generic/parameterized custom types
  if (trimmed.includes('<')) {
    return `return {} as any;`;
  }

  // Known special types
  if (trimmed === 'Date') return 'return new Date();';
  if (trimmed === 'Function') return 'return (() => {}) as any;';
  if (trimmed === 'Object' || trimmed === 'object') return 'return {};';

  // Default: return a cast null for custom types (safe for mocking)
  return `return null as any;`;
}

/**
 * Recursively list all .d.ts files under a directory.
 */
function listDtsFiles(dir) {
  const results = [];
  if (!fs.existsSync(dir)) return results;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...listDtsFiles(full));
    } else if (entry.name.endsWith('.d.ts')) {
      results.push(full);
    }
  }
  return results;
}

// ---------------------------------------------------------------------------
// Step 3: Convert a .d.ts file to a concrete .ts implementation
// ---------------------------------------------------------------------------

/**
 * Given a parsed TypeScript source file, produce concrete implementation text.
 * Returns { content: string, exports: string[] }
 */
function convertDeclarationFile(sourceFile, upstreamSrcDir, filePath) {
  const content = sourceFile.text;
  const importLines = [];
  const bodyParts = [];
  const exportedNames = [];

  ts.forEachChild(sourceFile, node => {
    // Preserve import statements
    if (ts.isImportDeclaration(node)) {
      const importText = content.substring(node.pos, node.end).trim();
      if (importText) importLines.push(importText);
      return;
    }

    // Handle export type aliases
    if (ts.isTypeAliasDeclaration(node)) {
      const text = content.substring(node.pos, node.end).trim();
      bodyParts.push(text.replace(/\bdeclare\s+/g, ''));
      if (hasExportModifier(node)) {
        exportedNames.push(node.name.text);
      }
      return;
    }

    // Handle class declarations
    if (ts.isClassDeclaration(node) && node.name) {
      const result = convertClass(node, content);
      bodyParts.push(result);
      if (hasExportModifier(node)) {
        exportedNames.push(node.name.text);
      }
      return;
    }

    // Handle interface declarations
    if (ts.isInterfaceDeclaration(node)) {
      const text = content.substring(node.pos, node.end).trim();
      bodyParts.push(text.replace(/\bdeclare\s+/g, ''));
      if (hasExportModifier(node)) {
        exportedNames.push(node.name.text);
      }
      return;
    }

    // Handle "export declare const X: Type"
    if (ts.isVariableStatement(node)) {
      const text = content.substring(node.pos, node.end).trim();
      let cleaned = text.replace(/\bdeclare\s+/g, '');
      if (!cleaned.includes('=')) {
        cleaned = cleaned.replace(/;$/, ' = {} as any;');
      }
      bodyParts.push(cleaned);
      for (const decl of node.declarationList.declarations) {
        if (ts.isIdentifier(decl.name) && hasExportModifier(node)) {
          exportedNames.push(decl.name.text);
        }
      }
      return;
    }

    // Handle standalone function declarations
    if (ts.isFunctionDeclaration(node) && node.name) {
      const isExport = hasExportModifier(node);
      const name = node.name.text;
      const typeParams = getTypeParametersText(node, content);
      const params = node.parameters.map(p => getParameterText(p, content)).join(', ');
      const returnType = getReturnTypeText(node, content);
      const returnStmt = getMockReturnValue(returnType);
      const prefix = isExport ? 'export ' : '';
      bodyParts.push(`${prefix}function ${name}${typeParams}(${params}): ${returnType} {\n    ${returnStmt}\n}`);
      if (isExport) exportedNames.push(name);
      return;
    }

    // Handle enum declarations
    if (ts.isEnumDeclaration(node)) {
      const text = content.substring(node.pos, node.end).trim();
      bodyParts.push(text.replace(/\bdeclare\s+/g, ''));
      if (hasExportModifier(node)) {
        exportedNames.push(node.name.text);
      }
      return;
    }

    // Handle "export * from" and "export {}" — pass through
    if (ts.isExportDeclaration(node)) {
      const text = content.substring(node.pos, node.end).trim();
      bodyParts.push(text);
      return;
    }
  });

  const result = [...importLines, '', ...bodyParts].join('\n').trim() + '\n';
  return { content: result, exportedNames };
}

function hasExportModifier(node) {
  if (!node.modifiers) return false;
  return node.modifiers.some(m => m.kind === ts.SyntaxKind.ExportKeyword);
}

function hasStaticModifier(node) {
  if (!node.modifiers) return false;
  return node.modifiers.some(m => m.kind === ts.SyntaxKind.StaticKeyword);
}

function hasAbstractModifier(node) {
  if (!node.modifiers) return false;
  return node.modifiers.some(m => m.kind === ts.SyntaxKind.AbstractKeyword);
}

function hasReadonlyModifier(node) {
  if (!node.modifiers) return false;
  return node.modifiers.some(m => m.kind === ts.SyntaxKind.ReadonlyKeyword);
}

/**
 * Get the full text of a node's type parameters (generics)
 */
function getTypeParametersText(node, content) {
  if (!node.typeParameters || node.typeParameters.length === 0) return '';
  const start = node.typeParameters.pos - 1; // include the <
  const end = node.typeParameters.end + 1; // include the >
  return content.substring(start, end);
}

/**
 * Get the heritage clause text (extends, implements)
 */
function getHeritageText(node, content) {
  if (!node.heritageClauses || node.heritageClauses.length === 0) return '';
  return ' ' + node.heritageClauses.map(hc => content.substring(hc.pos, hc.end).trim()).join(' ');
}

/**
 * Check if a class has an extends clause
 */
function hasExtendsClause(node) {
  if (!node.heritageClauses) return false;
  return node.heritageClauses.some(hc => hc.token === ts.SyntaxKind.ExtendsKeyword);
}

/** Reserved words that can't be used as parameter names in strict mode */
const RESERVED_PARAM_NAMES = new Set(['arguments', 'eval']);

function getParameterText(param, content) {
  let text = content.substring(param.pos, param.end).trim();
  // Rename reserved words used as parameter names
  if (param.name && ts.isIdentifier(param.name)) {
    const paramName = param.name.text;
    if (RESERVED_PARAM_NAMES.has(paramName)) {
      text = text.replace(new RegExp('\\b' + paramName + '\\b'), '_' + paramName);
    }
  }
  return text;
}

function getReturnTypeText(node, content) {
  if (!node.type) return 'any';
  return content.substring(node.type.pos, node.type.end).trim();
}

// ---------------------------------------------------------------------------
// Class converter — the core logic
// ---------------------------------------------------------------------------

function convertClass(node, content) {
  const isExport = hasExportModifier(node);
  const isAbstract = hasAbstractModifier(node);
  const className = node.name.text;
  const typeParams = getTypeParametersText(node, content);
  const heritage = getHeritageText(node, content);
  const isDerived = hasExtendsClause(node);

  const prefix = isExport ? 'export ' : '';
  const abstractKw = isAbstract ? 'abstract ' : '';

  const lines = [];
  lines.push(`${prefix}${abstractKw}class ${className}${typeParams}${heritage} {`);

  // First pass: collect all members in order, grouping consecutive same-named methods
  const memberGroups = []; // { kind: 'property'|'constructor'|'method'|'index', data: ... }
  const constructorParams = [];

  if (node.members) {
    for (const member of node.members) {
      if (ts.isConstructorDeclaration(member)) {
        const params = member.parameters.map(p => getParameterText(p, content)).join(', ');
        constructorParams.push(params);
      } else if (ts.isPropertyDeclaration(member) || ts.isPropertySignature(member)) {
        memberGroups.push({ kind: 'property', member });
      } else if (ts.isMethodDeclaration(member) || ts.isMethodSignature(member)) {
        if (!member.name) continue;
        // Use .text (the identifier) not .pos/.end (which includes leading JSDoc)
        const name = ts.isComputedPropertyName(member.name)
          ? content.substring(member.name.pos, member.name.end).trim()
          : member.name.text || member.name.escapedText;
        if (!name) continue;
        const isStatic = hasStaticModifier(member);
        const key = name + (isStatic ? ':static' : '');

        // Check if the previous group is the same method name (overload)
        const lastGroup = memberGroups[memberGroups.length - 1];
        if (lastGroup && lastGroup.kind === 'method' && lastGroup.key === key) {
          lastGroup.overloads.push(member);
        } else {
          memberGroups.push({ kind: 'method', key, name, isStatic, overloads: [member] });
        }
      } else if (ts.isIndexSignatureDeclaration(member)) {
        memberGroups.push({ kind: 'index', member });
      }
    }
  }

  // Emit properties
  for (const g of memberGroups) {
    if (g.kind === 'property') {
      lines.push(`    ${convertPropertyMember(g.member, content)}`);
    }
  }

  // Emit constructor
  if (constructorParams.length > 0) {
    const superCall = isDerived ? 'super();' : '';
    if (constructorParams.length > 1) {
      for (const params of constructorParams) {
        lines.push(`    constructor(${params});`);
      }
      lines.push(`    constructor(...args: any[]) { ${superCall} }`);
    } else {
      lines.push(`    constructor(${constructorParams[0]}) { ${superCall} }`);
    }
  } else if (isDerived) {
    // No explicit constructor but extends a class — need super()
    lines.push(`    constructor(...args: any[]) { super(); }`);
  }

  // Emit methods and index signatures in order
  const emittedMethods = new Set(); // track already-emitted method keys
  for (const g of memberGroups) {
    if (g.kind === 'index') {
      const text = content.substring(g.member.pos, g.member.end).trim();
      lines.push(`    ${text}`);
    } else if (g.kind === 'method') {
      // Skip if we already emitted this method name (duplicate groups in upstream)
      if (emittedMethods.has(g.key)) continue;
      emittedMethods.add(g.key);

      const staticKw = g.isStatic ? 'static ' : '';
      const overloads = g.overloads;

      if (overloads.length > 1) {
        // Emit overload signatures
        for (const m of overloads) {
          const mtp = getTypeParametersText(m, content);
          const params = m.parameters.map(p => getParameterText(p, content)).join(', ');
          const ret = getReturnTypeText(m, content);
          lines.push(`    ${staticKw}${g.name}${mtp}(${params}): ${ret};`);
        }
        // Implementation
        const firstRet = getReturnTypeText(overloads[0], content);
        const returnStmt = getMockReturnValue(firstRet);
        lines.push(`    ${staticKw}${g.name}(...args: any[]): any {`);
        lines.push(`        ${returnStmt}`);
        lines.push(`    }`);
      } else {
        const m = overloads[0];
        const mtp = getTypeParametersText(m, content);
        const params = m.parameters.map(p => getParameterText(p, content)).join(', ');
        const ret = getReturnTypeText(m, content);
        const returnStmt = getMockReturnValue(ret);
        lines.push(`    ${staticKw}${g.name}${mtp}(${params}): ${ret} {`);
        lines.push(`        ${returnStmt}`);
        lines.push(`    }`);
      }
    }
  }

  lines.push('}');
  return lines.join('\n');
}

function convertPropertyMember(member, content) {
  const name = content.substring(member.name.pos, member.name.end).trim();
  const isStatic = hasStaticModifier(member);
  const isReadonly = hasReadonlyModifier(member);
  const isOptional = member.questionToken ? '?' : '';
  const typeText = member.type ? getReturnTypeText(member, content) : 'any';

  const staticKw = isStatic ? 'static ' : '';
  const readonlyKw = isReadonly ? 'readonly ' : '';

  let defaultVal;
  switch (typeText.trim()) {
    case 'string': defaultVal = '""'; break;
    case 'number': defaultVal = '0'; break;
    case 'boolean': defaultVal = 'false'; break;
    default: defaultVal = 'null as any'; break;
  }

  return `${staticKw}${readonlyKw}${name}${isOptional}: ${typeText} = ${defaultVal};`;
}

// ---------------------------------------------------------------------------
// Step 4: Process all files and generate output
// ---------------------------------------------------------------------------

function processUpstream(upstreamPkgDir) {
  const upstreamSrcDir = path.join(upstreamPkgDir, 'src');
  const allDts = listDtsFiles(upstreamSrcDir);

  // Filter out index.d.ts files (we'll generate our own barrel files)
  // Also filter out _GlideRecordHelpers — handled separately
  const declarationFiles = allDts.filter(f => {
    const base = path.basename(f);
    if (base === 'index.d.ts') return false;
    // _GlideRecordHelpers files will be copied verbatim
    if (f.includes('_GlideRecordHelpers')) return false;
    return true;
  });

  const stats = { added: 0, updated: 0, unchanged: 0, skipped: 0 };
  const namespaces = new Map(); // dir relative path -> [exported file basenames]
  // Track all exported names per namespace for conflict detection
  const nsExportNames = new Map(); // nsDir -> Set of exported names

  console.log(`\nProcessing ${declarationFiles.length} declaration files...\n`);

  for (const dtsFile of declarationFiles) {
    const relativePath = path.relative(upstreamSrcDir, dtsFile);
    const targetPath = path.join(SRC_DIR, relativePath.replace(/\.d\.ts$/, '.ts'));
    const targetDir = path.dirname(targetPath);

    // Track namespace
    const nsRelDir = path.relative(SRC_DIR, targetDir);
    if (!namespaces.has(nsRelDir)) {
      namespaces.set(nsRelDir, []);
    }
    const baseName = path.basename(relativePath, '.d.ts');
    namespaces.get(nsRelDir).push(baseName);

    // Parse the declaration file
    const fileContent = fs.readFileSync(dtsFile, 'utf8');
    const sourceFile = ts.createSourceFile(
      dtsFile, fileContent, ts.ScriptTarget.Latest, true
    );

    // Convert
    const { content: newContent, exportedNames } = convertDeclarationFile(
      sourceFile, upstreamSrcDir, dtsFile
    );

    // Track exports for conflict detection
    if (!nsExportNames.has(nsRelDir)) {
      nsExportNames.set(nsRelDir, new Set());
    }
    for (const n of exportedNames) {
      nsExportNames.get(nsRelDir).add(n);
    }

    // Check if target exists and compare
    if (fs.existsSync(targetPath)) {
      const existing = fs.readFileSync(targetPath, 'utf8');
      if (existing === newContent) {
        stats.unchanged++;
        continue;
      }
      if (!flagDryRun) {
        fs.mkdirSync(targetDir, { recursive: true });
        fs.writeFileSync(targetPath, newContent, 'utf8');
      }
      console.log(`  UPDATED: ${relativePath.replace(/\.d\.ts$/, '.ts')}`);
      stats.updated++;
    } else {
      if (!flagDryRun) {
        fs.mkdirSync(targetDir, { recursive: true });
        fs.writeFileSync(targetPath, newContent, 'utf8');
      }
      console.log(`  ADDED:   ${relativePath.replace(/\.d\.ts$/, '.ts')}`);
      stats.added++;
    }
  }

  // Handle _GlideRecordHelpers directory — copy type-only files as-is
  const helpersDir = path.join(upstreamSrcDir, 'types', '_GlideRecordHelpers');
  if (fs.existsSync(helpersDir)) {
    const helperFiles = listDtsFiles(helpersDir);
    for (const hf of helperFiles) {
      const rel = path.relative(upstreamSrcDir, hf);
      const target = path.join(SRC_DIR, rel.replace(/\.d\.ts$/, '.ts'));
      const fileContent = fs.readFileSync(hf, 'utf8');
      // Keep as-is (these are pure type declarations needed for Tables global)
      const targetDir = path.dirname(target);
      if (!fs.existsSync(target) || fs.readFileSync(target, 'utf8') !== fileContent) {
        if (!flagDryRun) {
          fs.mkdirSync(targetDir, { recursive: true });
          fs.writeFileSync(target, fileContent, 'utf8');
        }
      }
    }
  }

  // Generate barrel index.ts files for each namespace
  console.log('\nGenerating barrel index.ts files...');

  // Detect export name conflicts across namespaces for the top-level index
  const allExportsByName = new Map(); // name -> [nsDir, ...]
  for (const [nsDir, names] of nsExportNames) {
    for (const name of names) {
      if (!allExportsByName.has(name)) {
        allExportsByName.set(name, []);
      }
      allExportsByName.get(name).push(nsDir);
    }
  }
  const conflictingNames = new Map(); // name -> [nsDir, ...]
  for (const [name, nsDirs] of allExportsByName) {
    if (nsDirs.length > 1) {
      conflictingNames.set(name, nsDirs);
    }
  }
  if (conflictingNames.size > 0) {
    console.log(`\n  Note: ${conflictingNames.size} export name conflicts detected across namespaces.`);
    console.log(`  These will be available via namespace imports (e.g., import { X } from './sn_foo').\n`);
  }

  for (const [nsDir, files] of namespaces) {
    const indexPath = path.join(SRC_DIR, nsDir, 'index.ts');
    const sorted = [...files].sort((a, b) => a.localeCompare(b));
    const exports = sorted.map(f => `export * from './${f}';`).join('\n') + '\n';

    if (!flagDryRun) {
      fs.mkdirSync(path.dirname(indexPath), { recursive: true });
      fs.writeFileSync(indexPath, exports, 'utf8');
    }
  }

  // Generate top-level src/index.ts
  // For the top-level barrel, we need to handle re-export conflicts.
  // TypeScript errors when two re-exports provide the same name.
  // Strategy: only use `export * from` for the first namespace that exports a name;
  // for conflicting namespaces, don't re-export at the top level (they remain
  // accessible via direct namespace imports).
  const topLevelDirs = [...namespaces.keys()]
    .filter(d => !d.includes(path.sep) && d !== '')
    .sort();

  // Build the top-level index with conflict awareness
  const mainIndexLines = [];
  const topLevelClaimed = new Set(); // names already claimed by a namespace
  const suppressedNamespaces = new Set(); // namespaces that need selective re-export

  // First pass: identify which namespaces have conflicts
  for (const nsDir of topLevelDirs) {
    const nsNames = nsExportNames.get(nsDir) || new Set();
    let hasConflict = false;
    for (const name of nsNames) {
      if (topLevelClaimed.has(name)) {
        hasConflict = true;
        break;
      }
    }
    if (hasConflict) {
      suppressedNamespaces.add(nsDir);
    } else {
      for (const name of nsNames) {
        topLevelClaimed.add(name);
      }
    }
  }

  // Second pass: generate the index.ts
  // Add reference to Tables.d.ts for global Tables interface
  mainIndexLines.push(`/// <reference path="./types/_GlideRecordHelpers/Tables.ts" />`);

  for (const nsDir of topLevelDirs) {
    if (suppressedNamespaces.has(nsDir)) {
      mainIndexLines.push(`// export * from './${nsDir}'; // suppressed: has naming conflicts with earlier exports`);
    } else {
      mainIndexLines.push(`export * from './${nsDir}';`);
    }
  }
  const mainIndex = mainIndexLines.join('\n') + '\n';
  const mainIndexPath = path.join(SRC_DIR, 'index.ts');
  if (!flagDryRun) {
    fs.writeFileSync(mainIndexPath, mainIndex, 'utf8');
  }

  // Check for stale files
  const existingFiles = listTsFiles(SRC_DIR);
  const upstreamRelPaths = new Set(
    declarationFiles.map(f => path.relative(upstreamSrcDir, f).replace(/\.d\.ts$/, '.ts'))
  );
  for (const nsDir of namespaces.keys()) {
    upstreamRelPaths.add(path.join(nsDir, 'index.ts'));
  }
  upstreamRelPaths.add('index.ts');

  const removed = [];
  for (const existing of existingFiles) {
    const rel = path.relative(SRC_DIR, existing);
    if (rel.endsWith('.ts.bak')) continue;
    if (rel.includes('_GlideRecordHelpers')) continue;
    if (!upstreamRelPaths.has(rel)) {
      removed.push(rel);
    }
  }

  if (removed.length > 0) {
    console.log(`\nRemoving ${removed.length} stale files not found in upstream...`);
    for (const r of removed) {
      if (!flagDryRun) {
        const fullPath = path.join(SRC_DIR, r);
        fs.unlinkSync(fullPath);
      }
      console.log(`  REMOVED: ${r}`);
    }
    // Clean up empty directories
    if (!flagDryRun) {
      cleanEmptyDirs(SRC_DIR);
    }
  }

  // Clean up .bak files
  if (!flagDryRun) {
    const bakFiles = findFiles(SRC_DIR, f => f.endsWith('.bak'));
    for (const bak of bakFiles) {
      fs.unlinkSync(bak);
      console.log(`  CLEANUP: removed ${path.relative(ROOT, bak)}`);
    }
  }

  // Get upstream version
  const upstreamPkg = JSON.parse(fs.readFileSync(path.join(upstreamPkgDir, 'package.json'), 'utf8'));

  // Summary
  console.log('\n' + '='.repeat(60));
  console.log(`Sync complete — @servicenow/glide@${upstreamPkg.version}`);
  console.log(`  Added:     ${stats.added}`);
  console.log(`  Updated:   ${stats.updated}`);
  console.log(`  Unchanged: ${stats.unchanged}`);
  console.log(`  Stale:     ${removed.length}`);
  if (suppressedNamespaces.size > 0) {
    console.log(`  Suppressed top-level re-exports: ${[...suppressedNamespaces].join(', ')}`);
  }
  if (flagDryRun) {
    console.log('\n  (DRY RUN — no files were written)');
  }
  console.log('='.repeat(60));

  // Update package.json version to match upstream
  if (!flagDryRun) {
    const pkgPath = path.join(ROOT, 'package.json');
    const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
    const oldVersion = pkg.version;
    pkg.version = upstreamPkg.version;
    fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n', 'utf8');
    if (oldVersion !== pkg.version) {
      console.log(`\nUpdated package.json version: ${oldVersion} -> ${pkg.version}`);
    }
  }

  return { stats, removed };
}

function cleanEmptyDirs(dir) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      cleanEmptyDirs(path.join(dir, entry.name));
    }
  }
  // If directory is now empty, remove it
  if (fs.readdirSync(dir).length === 0) {
    fs.rmdirSync(dir);
  }
}

function listTsFiles(dir) {
  const results = [];
  if (!fs.existsSync(dir)) return results;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...listTsFiles(full));
    } else if (entry.name.endsWith('.ts') && !entry.name.endsWith('.d.ts')) {
      results.push(full);
    }
  }
  return results;
}

function findFiles(dir, predicate) {
  const results = [];
  if (!fs.existsSync(dir)) return results;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...findFiles(full, predicate));
    } else if (predicate(entry.name)) {
      results.push(full);
    }
  }
  return results;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
function main() {
  console.log('ServiceNow Glide Type Stub Sync');
  console.log('================================\n');

  const upstreamPkgDir = fetchUpstream();
  processUpstream(upstreamPkgDir);
}

main();
