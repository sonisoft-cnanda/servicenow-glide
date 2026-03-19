import { Project } from 'ts-morph';
import path from 'path';
import fs from 'fs';

// Initialize the project
const project = new Project({
    tsConfigFilePath: path.resolve(__dirname, 'tsconfig.json'),
});

// Get the source files
const sourceFiles = project.getSourceFiles('src/**/*.ts');

// Create the exports content for the main index file
let mainExportsContent = '';

// Create a map to store the exports content for each directory
const exportsMap: { [key: string]: string } = {};

// Helper function to add export statements to the appropriate content
function addExportStatement(filePath: string, importPath: string) {
    const dir = path.dirname(filePath);
    if (!exportsMap[dir]) {
        exportsMap[dir] = '';
    }
    exportsMap[dir] += `export * from '${importPath}';\n`;
}

// Process each source file
sourceFiles.forEach(sourceFile => {
    const filePath = sourceFile.getFilePath();
    const relativePath = path.relative(path.resolve(__dirname, 'src'), filePath);
    const importPath = `./${relativePath.replace(/\\/g, '/').replace(/\.ts$/, '')}`;
    mainExportsContent += `export * from '${importPath}';\n`;
    addExportStatement(filePath, importPath);
});

// Write the main exports content to the main index file
const distDir = path.resolve(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
}
fs.writeFileSync(path.join(distDir, 'index.ts'), mainExportsContent);

// Write the exports content for each directory
Object.keys(exportsMap).forEach(dir => {
    const relativeDir = path.relative(path.resolve(__dirname, 'src'), dir);
    const distSubDir = path.join(distDir, relativeDir);
    if (!fs.existsSync(distSubDir)) {
        fs.mkdirSync(distSubDir, { recursive: true });
    }
    fs.writeFileSync(path.join(distSubDir, 'index.ts'), exportsMap[dir]);
});

console.log('Exports files created successfully.');