import { Context } from '../imports/Context'
import { Function } from '../imports/Function'

export class ScriptableAnalyticsCacheAPI {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    getData(): string {
        return "";
    }
    isDataSourceCacheable(dataSourceName?: string): boolean {
        return false;
    }
}
