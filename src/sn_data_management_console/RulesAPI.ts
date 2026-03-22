import { Context } from "../imports/Context";

export class RulesAPI {
    constructor(cx: Context, args: any[], ctorObj: Function, inNewExpr: boolean) {  }
    getActiveRulesCount(): string {
        return "";
    }
    getBacklogTrend(tableName: string, ruleTypes: Array<string>, periodType: string, numOfPeriods: number): string {
        return "";
    }
    getRule(tableName: string, ruleType: string, ruleId: string): string {
        return "";
    }
    getRules(tableName: string, ruleTypes: Array<string>): string {
        return "";
    }
}
