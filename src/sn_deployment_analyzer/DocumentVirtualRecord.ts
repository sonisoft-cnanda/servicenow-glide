export class DocumentVirtualRecord {
    constructor(node: Node, customerUpdateId: string) {  }
    static of(xml: string, customerUpdateId: string): DocumentVirtualRecord;
    static of(xml: string, xpath: string, customerUpdateId: string): DocumentVirtualRecord;
    static of(...args: any[]): any {
        return null as any;
    }
    getValue(name: string): string {
        return "";
    }
    getValueAsBoolean(name: string): boolean {
        return false;
    }
    getAction(): string {
        return "";
    }
    getTableName(): string {
        return "";
    }
    getPayload(): string {
        return "";
    }
    isValidField(name: string): boolean {
        return false;
    }
}
