export class EncryptionJobs {
    constructor() {  }
    getRecordCount(jobType?: string, table?: string, column?: string, key?: string, version?: string, variable?: string): number {
        return 0;
    }
    isAuditedColumn(tableName?: string, columnName?: string): boolean {
        return false;
    }
}
