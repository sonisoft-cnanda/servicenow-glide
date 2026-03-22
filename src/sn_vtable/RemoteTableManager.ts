import { SimpleResponse } from "./SimpleResponse";
import { RemoteTableDefinition } from "./RemoteTableDefinition";
import { ColumnDefinitionResponse } from "./ColumnDefinitionResponse";
import { ColumnDefinition } from "./ColumnDefinition";
import { Context } from "../imports/Context";

export class RemoteTableManager {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    static addColumn(tableName?: string, scriptableColumnDefinition?: ColumnDefinition): ColumnDefinitionResponse {
        return null as any;
    }
    static createTable(srtd?: RemoteTableDefinition): SimpleResponse {
        return null as any;
    }
    static deleteColumn(tableNameObject?: any, columnNameObject?: any): SimpleResponse {
        return null as any;
    }
    static deleteTable(remoteTableNameObject?: any): SimpleResponse {
        return null as any;
    }
    static getColumn(tableName?: string, columnName?: string): ColumnDefinitionResponse {
        return null as any;
    }
    static updateColumn(tableName?: string, scd?: ColumnDefinition): SimpleResponse {
        return null as any;
    }
}
