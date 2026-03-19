import { GlideRecord } from './GlideRecord';

export class GlideSystemUtilDB {
    _dropTable(tableName?: string): void {
        
    }
    alterSqlFieldDefintion(table?: string, element?: string, oldLength?: any): void {
        
    }
    dropColumn(tableName?: string, fieldName?: string): void {
        
    }
    dropColumnQuick(tableName?: string, fieldName?: string): void {
        
    }
    dropTable(tableName?: string): void {
        
    }
    dropTableRecord(dbObject?: GlideRecord): void {
        
    }
    ensureCompositeIndex(tableName?: string, sfields?: string, indexName?: string): void {
        
    }
    ensureIndex(tableName?: string, elementName?: string): boolean {
        return false;
    }
    fieldExists(tableName?: string, fieldName?: string): boolean {
        return false;
    }
    flushStatus(): void {
        
    }
    getDictionaryEntryPackage(tableName?: string, fieldName?: string): string {
        return "";
    }
    getDictionaryEntryScope(tableName?: string, fieldName?: string): string {
        return "";
    }
    getDisplayValueFor(table?: string, key?: string, field?: string): string {
        return "";
    }
    getInScopeDBViews(): Array<string> {
        return new Array<string>();
    }
    getInScopeTables(): Array<string> {
        return new Array<string>();
    }
    healthCheck(filePattern?: string, reportonly?: boolean): boolean {
        return false;
    }
    isScopedAdminApp(): boolean {
        return false;
    }
    isScopedApp(): boolean {
        return false;
    }
    isTableInScope(tableName?: string): boolean {
        return false;
    }
    rebuildAllIndexes(): void {
        
    }
    rebuildIndexes(tableName?: string): void {
        
    }
    renameTable(tableName?: string, newTableName?: string, cacheFlush?: boolean): void {
        
    }
    reset(): boolean {
        return false;
    }
    resetDB(dbName?: string): void {
        
    }
    sql(statement?: string): void {
        
    }
    sqlItemsByField(table?: string, sfields?: any, fwfield?: string, value?: string, limit?: number): Array<any> {
        return new Array();
    }
    sqlItemsByID(table?: string, sfields?: any, sys_id?: string, limit?: number): Array<any> {
        return new Array();
    }
    tableCreate(name?: string, label?: any): string {
        return "";
    }
    tableDrop(name?: string): void {
        
    }
    trace(onOff?: boolean): void {
        
    }
    truncateTable(name?: string): void {
        
    }
}
