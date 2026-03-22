export class LFZipOutputStream {
    constructor(fileName: string, applicationName: string) {  }
    addNextEntry(name: string, content: string): boolean {
        return false;
    }
    close(): void {
        
    }
    getBytes(): number[] {
        return [];
    }
}
