export class GlideXMLParameters {
    constructor();
    constructor(xml: string);
    constructor(...args: any[]) {  }
    containsKey(name: string): boolean {
        return false;
    }
    get(name: string): string {
        return "";
    }
    put(name: string, value: string): void {
        
    }
    getDocumentElement(): Element {
        return null as any;
    }
}
