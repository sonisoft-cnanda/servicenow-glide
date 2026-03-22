import { GlideRecord } from "../types/GlideRecord";

export class DictionaryFilter {
    constructor() {  }
    getTableColumnsToExclude(): string {
        return "";
    }
    getTablesToExclude(): string {
        return "";
    }
    getTargetColumns(): GlideRecord {
        return null as any;
    }
    isTableAllowedForScan(tableName: string): boolean {
        return false;
    }
}
