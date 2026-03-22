import { SqlStatement } from "./SqlStatement";
import { TaggedResultSet } from "./TaggedResultSet";

export class CreateSqlBuilder {
    constructor() {  }
    delta(): CreateSqlBuilder {
        return null as any;
    }
    event(): CreateSqlBuilder {
        return null as any;
    }
    execute(zoneId?: string): TaggedResultSet {
        return null as any;
    }
    metric(measurementType?: string, defaultValue?: string): CreateSqlBuilder {
        return null as any;
    }
    offset(): CreateSqlBuilder {
        return null as any;
    }
    retentionDuration(duration?: string): CreateSqlBuilder {
        return null as any;
    }
    shard(shardID?: string): CreateSqlBuilder {
        return null as any;
    }
    timestampPrecision(precision?: string): CreateSqlBuilder {
        return null as any;
    }
    timestampWindow(window?: string): CreateSqlBuilder {
        return null as any;
    }
    toSql(): SqlStatement {
        return null as any;
    }
}
