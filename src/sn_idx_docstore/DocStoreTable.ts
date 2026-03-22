export class DocStoreTable {
    static getFields(tableName?: string): Array<any> {
        return [];
    }
    static getIndexName(tableName?: string): string {
        return "";
    }
    static isDocumentTable(tableName?: string): boolean {
        return false;
    }
    static isValidDocumentFieldType(type?: string): boolean {
        return false;
    }
}
