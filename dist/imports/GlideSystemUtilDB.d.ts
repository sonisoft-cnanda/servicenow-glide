import { GlideRecord } from './GlideRecord.js';
export declare class GlideSystemUtilDB {
    _dropTable(tableName?: string): void;
    alterSqlFieldDefintion(table?: string, element?: string, oldLength?: any): void;
    dropColumn(tableName?: string, fieldName?: string): void;
    dropColumnQuick(tableName?: string, fieldName?: string): void;
    dropTable(tableName?: string): void;
    dropTableRecord(dbObject?: GlideRecord): void;
    ensureCompositeIndex(tableName?: string, sfields?: string, indexName?: string): void;
    ensureIndex(tableName?: string, elementName?: string): boolean;
    fieldExists(tableName?: string, fieldName?: string): boolean;
    flushStatus(): void;
    getDictionaryEntryPackage(tableName?: string, fieldName?: string): string;
    getDictionaryEntryScope(tableName?: string, fieldName?: string): string;
    getDisplayValueFor(table?: string, key?: string, field?: string): string;
    getInScopeDBViews(): Array<string>;
    getInScopeTables(): Array<string>;
    healthCheck(filePattern?: string, reportonly?: boolean): boolean;
    isScopedAdminApp(): boolean;
    isScopedApp(): boolean;
    isTableInScope(tableName?: string): boolean;
    rebuildAllIndexes(): void;
    rebuildIndexes(tableName?: string): void;
    renameTable(tableName?: string, newTableName?: string, cacheFlush?: boolean): void;
    reset(): boolean;
    resetDB(dbName?: string): void;
    sql(statement?: string): void;
    sqlItemsByField(table?: string, sfields?: any, fwfield?: string, value?: string, limit?: number): Array<any>;
    sqlItemsByID(table?: string, sfields?: any, sys_id?: string, limit?: number): Array<any>;
    tableCreate(name?: string, label?: any): string;
    tableDrop(name?: string): void;
    trace(onOff?: boolean): void;
    truncateTable(name?: string): void;
}
//# sourceMappingURL=GlideSystemUtilDB.d.ts.map