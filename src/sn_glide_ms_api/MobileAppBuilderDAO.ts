import { GlideRecordSecure } from "../types/GlideRecordSecure";

export class MobileAppBuilderDAO {
    constructor(cTable?: string) {  }
    deleteRecord(id?: string): boolean {
        return false;
    }
    getRecord(id?: string): GlideRecordSecure {
        return null as any;
    }
    getRecordsByEncodedQuery(encodedQuery?: string, limit?: number, offset?: number): GlideRecordSecure {
        return null as any;
    }
    static isTableAccessible(tableName?: string): boolean {
        return false;
    }
    saveRecord(record?: Record<any, any>): GlideRecordSecure {
        return null as any;
    }
}
