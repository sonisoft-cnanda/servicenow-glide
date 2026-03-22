import { Context } from '../imports/Context'
import { Function } from '../imports/Function'

export class TaggedResultSet {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    getMetadataJson(): string {
        return "";
    }
    getRowsJson(): string {
        return "";
    }
    getSchemaJson(): string {
        return "";
    }
    getStatisticsJson(): string {
        return "";
    }
}
