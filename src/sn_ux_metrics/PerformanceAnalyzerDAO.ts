import { GlideRecordSecure } from "../types/GlideRecordSecure";

export class PerformanceAnalyzerDAO {
    constructor(cTable?: string) {  }
    getRecord(id?: string): GlideRecordSecure {
        return null as any;
    }
    getRecordsByEncodedQuery(encodedQuery?: string, limit?: number, offset?: number): GlideRecordSecure {
        return null as any;
    }
    static isTableAccessible(tableName?: string): boolean {
        return false;
    }
}
