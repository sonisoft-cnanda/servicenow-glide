"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlideSystemUtilDB = void 0;
class GlideSystemUtilDB {
    _dropTable(tableName) {
    }
    alterSqlFieldDefintion(table, element, oldLength) {
    }
    dropColumn(tableName, fieldName) {
    }
    dropColumnQuick(tableName, fieldName) {
    }
    dropTable(tableName) {
    }
    dropTableRecord(dbObject) {
    }
    ensureCompositeIndex(tableName, sfields, indexName) {
    }
    ensureIndex(tableName, elementName) {
        return false;
    }
    fieldExists(tableName, fieldName) {
        return false;
    }
    flushStatus() {
    }
    getDictionaryEntryPackage(tableName, fieldName) {
        return "";
    }
    getDictionaryEntryScope(tableName, fieldName) {
        return "";
    }
    getDisplayValueFor(table, key, field) {
        return "";
    }
    getInScopeDBViews() {
        return new Array();
    }
    getInScopeTables() {
        return new Array();
    }
    healthCheck(filePattern, reportonly) {
        return false;
    }
    isScopedAdminApp() {
        return false;
    }
    isScopedApp() {
        return false;
    }
    isTableInScope(tableName) {
        return false;
    }
    rebuildAllIndexes() {
    }
    rebuildIndexes(tableName) {
    }
    renameTable(tableName, newTableName, cacheFlush) {
    }
    reset() {
        return false;
    }
    resetDB(dbName) {
    }
    sql(statement) {
    }
    sqlItemsByField(table, sfields, fwfield, value, limit) {
        return new Array();
    }
    sqlItemsByID(table, sfields, sys_id, limit) {
        return new Array();
    }
    tableCreate(name, label) {
        return "";
    }
    tableDrop(name) {
    }
    trace(onOff) {
    }
    truncateTable(name) {
    }
}
exports.GlideSystemUtilDB = GlideSystemUtilDB;
//# sourceMappingURL=GlideSystemUtilDB.js.map