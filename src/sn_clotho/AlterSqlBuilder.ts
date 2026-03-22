import { SqlStatement } from "./SqlStatement";
import { TaggedResultSet } from "./TaggedResultSet";

export class AlterSqlBuilder {
    constructor() {  }
    delta(): AlterSqlBuilder {
        return null as any;
    }
    execute(zoneId?: string): TaggedResultSet {
        return null as any;
    }
    metricDataType(measurementType?: string): AlterSqlBuilder {
        return null as any;
    }
    offset(): AlterSqlBuilder {
        return null as any;
    }
    retentionDuration(duration?: string): AlterSqlBuilder {
        return null as any;
    }
    timestampPrecision(precision?: string): AlterSqlBuilder {
        return null as any;
    }
    toSql(): SqlStatement {
        return null as any;
    }
}
