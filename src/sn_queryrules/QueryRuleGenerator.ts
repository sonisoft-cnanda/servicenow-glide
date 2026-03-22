import { Context } from '../imports/Context'
import { Function } from '../imports/Function'

export class QueryRuleGenerator {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    appendEncodedQuery(table?: string, existingQuery?: string): string {
        return "";
    }
    getEncodedQuery(table?: string): string {
        return "";
    }
    getEncodedQueryForRoles(table?: string, roles?: string): string {
        return "";
    }
}
