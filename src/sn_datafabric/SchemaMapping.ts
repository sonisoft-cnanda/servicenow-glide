import { Context } from '../imports/Context'
import { Function } from '../imports/Function'

export class SchemaMapping {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    countRemoteTable(connectionSysId?: string): number {
        return 0;
    }
    createRemoteTable(input?: string): void {
        
    }
    listAllMappedTables(filter?: any, start?: number, end?: number): string {
        return "";
    }
    listColumnsInTable(connectionSysId?: string, schemaName?: string, remoteTableName?: string): string {
        return "";
    }
    listCompatibleColumnTypes(internalType?: string): string {
        return "";
    }
    listReferenceColumns(tableName?: string): string {
        return "";
    }
    listReferenceableTables(filterByObj?: any, maxResultSizeObj?: any): string {
        return "";
    }
    listSchemasAndTablesInConnection(connectionSysId?: string): string {
        return "";
    }
    showRemoteTable(tableName?: string): string {
        return "";
    }
}
