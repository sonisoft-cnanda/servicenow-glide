import { Context } from "../imports/Context";
import { Function } from "../imports/Function";
import { DmRuleFilter } from "./DmRuleFilter";

export class DmRuleBacklogApi {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    getDmRulesBacklogTrend(tableNames?: Array<any>, dmRuleFilter?: DmRuleFilter, ruleTypes?: Array<any>, periodTypes?: Array<any>, startDate?: string): string {
        return "";
    }
    getDmRulesLatestBacklog(tableNames?: Array<any>, dmRuleFilter?: DmRuleFilter, ruleTypes?: Array<any>, startDate?: string, offset?: number, limit?: number): string {
        return "";
    }
}
