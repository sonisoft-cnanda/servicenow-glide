import { AlterSqlBuilder } from "./AlterSqlBuilder";
import { CreateSqlBuilder } from "./CreateSqlBuilder";
import { DropSqlBuilder } from "./DropSqlBuilder";
import { RenameSqlBuilder } from "./RenameSqlBuilder";
import { SelectSqlBuilder } from "./SelectSqlBuilder";

export class SqlBuilder {
    constructor() {  }
    alterTable(tableName?: string): AlterSqlBuilder {
        return null as any;
    }
    createTable(tableName?: string, ifNotExists?: boolean): CreateSqlBuilder {
        return null as any;
    }
    dropTable(tableName?: string, ifExists?: boolean): DropSqlBuilder {
        return null as any;
    }
    renameTable(tableName?: string, newTableName?: string): RenameSqlBuilder {
        return null as any;
    }
    select(fields?: any): SelectSqlBuilder {
        return null as any;
    }
    selectDistinct(fields?: any): SelectSqlBuilder {
        return null as any;
    }
}
