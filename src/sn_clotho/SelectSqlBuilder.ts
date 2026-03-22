import { SqlStatement } from "./SqlStatement";
import { TaggedResultSet } from "./TaggedResultSet";

export class SelectSqlBuilder {
    constructor() {  }
    enforceDomain(): SelectSqlBuilder {
        return null as any;
    }
    execute(zoneId?: string): TaggedResultSet {
        return null as any;
    }
    from(tableName?: string): SelectSqlBuilder {
        return null as any;
    }
    groupBy(groups?: any): SelectSqlBuilder {
        return null as any;
    }
    having(predicate?: any): SelectSqlBuilder {
        return null as any;
    }
    limit(limit?: number): SelectSqlBuilder {
        return null as any;
    }
    offset(offset?: number): SelectSqlBuilder {
        return null as any;
    }
    orderBy(field?: string): SelectSqlBuilder {
        return null as any;
    }
    orderByDesc(field?: string): SelectSqlBuilder {
        return null as any;
    }
    toSql(): SqlStatement {
        return null as any;
    }
    where(predicate?: any): SelectSqlBuilder {
        return null as any;
    }
}
