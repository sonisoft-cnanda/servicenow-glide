const fs = require('fs');
const path = require('path');
const ts = require('typescript');

const distDir = path.join(__dirname, 'dist_bak');
const srcDir = path.join(__dirname, 'src');

// Ensure src directory exists
if (!fs.existsSync(srcDir)) {
    fs.mkdirSync(srcDir, { recursive: true });
}

// Function to list files in a directory recursively
function listFilesRecursively(dir, fileList = []) {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            listFilesRecursively(filePath, fileList);
        } else {
            fileList.push(filePath);
        }
    });

    return fileList;
}

// Function to create mock class from type definition
function createMockClass(node, imports, relativeImportPath) {
    const className = node.name.text;
    let classContent = `export class ${className} {\n`;
    const methodSignatures = {};
    let constructorSignature = '';

    node.members.forEach(member => {
        if (ts.isPropertySignature(member) && member.name) {
            const memberName = member.name.getText();
            const memberType = member.type ? member.type.getText() : 'any';
            classContent += `    ${memberName}: ${memberType};\n`;
        } else if (ts.isConstructorDeclaration(member)) {
            constructorSignature = createConstructorSignature(member, imports, relativeImportPath, className);
        } else if ((ts.isMethodSignature(member) 
            || ts.isMethodDeclaration(member) 
            || ts.isFunctionDeclaration(member)) && member.name) {
            const methodName = member.name.getText();
            const methodSignature = createMethodSignature(member, imports, relativeImportPath, className);
            if (!methodSignatures[methodName] || methodSignatures[methodName] == undefined || methodSignatures[methodName] == null || typeof(methodSignatures[methodName]) != Array) {
                methodSignatures[methodName] = [];
            }
            methodSignatures[methodName].push(methodSignature);
        }
    });

    if (constructorSignature) {
        classContent += `    ${constructorSignature}\n`;
    }

    for (const [methodName, signatures] of Object.entries(methodSignatures)) {
        if (signatures.length > 1) {
            signatures.forEach(signature => {
                classContent += `    ${methodName}${signature.signature};\n`;
            });
            classContent += `    ${methodName}(${signatures[0].parameters}): ${signatures[0].returnType} {\n        ${signatures[0].returnStatement}\n    }\n`;
        } else {
            classContent += `    ${methodName}(${signatures[0].parameters}): ${signatures[0].returnType} {\n        ${signatures[0].returnStatement}\n    }\n`;
        }
    }

    classContent += `}\n`;
    return classContent;
}

// Function to create a TypeScript method signature
function createMethodSignature(member, imports, relativeImportPath, className) {
    const parameters = member.parameters.map(param => {
        const paramName = param.name.getText();
        const paramType = param.type ? param.type.getText() : 'any';
        const isOptional = param.questionToken ? '?' : '';
        if (!isBuiltInType(paramType) && paramType !== className) {
            imports.add(paramType);
        }
        return `${paramName}${isOptional}: ${paramType}`;
    }).join(', ');
    const returnType = member.type ? member.type.getText() : 'void';
    if (!isBuiltInType(returnType) && returnType !== className) {
        imports.add(returnType);
    }
    const returnStatement = getMockReturnValue(returnType);
    return {
        parameters,
        returnType,
        returnStatement,
        signature: `(${parameters}): ${returnType}`
    };
}

// Function to create a TypeScript constructor signature
function createConstructorSignature(member, imports, relativeImportPath, className) {
    const parameters = member.parameters.map(param => {
        const paramName = param.name.getText();
        const paramType = param.type ? param.type.getText() : 'any';
        const isOptional = param.questionToken ? '?' : '';
        if (!isBuiltInType(paramType) && paramType !== className) {
            imports.add(paramType);
        }
        return `${paramName}${isOptional}: ${paramType}`;
    }).join(', ');
    return `constructor(${parameters}) {}`;
}

// Function to get mock return value based on return type
function getMockReturnValue(returnType) {
    if (/\[\]/.test(returnType)) {
        returnType = "Array";
    }
    switch (returnType) {
        case 'string':
            return 'return "";';
        case 'number':
            return 'return 0;';
        case 'boolean':
            return 'return false;';
        case 'void':
            return '';
        case 'Array':
        case 'Array<any>':
            return 'return new Array();';
        case 'Record':
        case 'Record<any, any>':
            return 'return {};';
        case 'any':
            return 'return null;';
        default:
            return `return new ${returnType}();`;
    }
}

// Function to check if a type is a built-in type
function isBuiltInType(type) {
    if (type.indexOf('[]') !== -1) {
        console.log(type);
        type = type.replace("[]", "");
    }
    return ['string', 'Date', 'Element', 'number', 'boolean', 'void', 'any', 'Array', 'Array<any>', 'Array<string>', 'Record', 'Record<any, any>'].includes(type);
}

// List all definition files in dist directory
const files = listFilesRecursively(distDir);

files.forEach(file => {
    const ext = path.extname(file);
    const relativePath = path.relative(distDir, file);
    const srcFilePath = path.join(srcDir, relativePath);

    if (ext === '.ts' && file.indexOf('.d.ts') !== -1) {
        const tsFilePath = srcFilePath.replace('.d.ts', '.ts');

        // Ensure the directory exists
        fs.mkdirSync(path.dirname(tsFilePath), { recursive: true });

        // Read definition file content
        fs.readFile(file, 'utf8', (err, data) => {
            if (err) throw err;

            // Parse the TypeScript definition file
            const sourceFile = ts.createSourceFile(file, data, ts.ScriptTarget.Latest, true);
            let tsContent = '';
            const imports = new Set();
            let relativeImportPath = path.relative(path.dirname(tsFilePath), path.join(srcDir, 'imports'));
            relativeImportPath = relativeImportPath.replace(/\\/g, '/'); // Replace backslashes with forward slashes

            // Walk the AST and create mock classes
            ts.forEachChild(sourceFile, node => {
                if (ts.isInterfaceDeclaration(node) || ts.isClassDeclaration(node)) {
                    tsContent += createMockClass(node, imports, relativeImportPath);
                }
            });

            // Add imports for custom types
            if (imports.size > 0) {
                const importStatements = Array.from(imports).map(type => `import { ${type.replace("[]", "")} } from '${relativeImportPath.startsWith(".") ? relativeImportPath : "." + relativeImportPath}/${type.replace("[]", "")}';`).join('\n');
                tsContent = `${importStatements}\n\n${tsContent}`;
            }

            // Write content to TypeScript file
            fs.writeFile(tsFilePath, tsContent, 'utf8', (err) => {
                if (err) throw err;
                console.log(`Converted ${file} to mock TypeScript classes.`);
            });
        });
    }
});