import { Context } from '../imports/Context'
import { Function } from '../imports/Function'

export class AssociatedFlows {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    static getFlows(tableName?: string): Array<any> {
        return [];
    }
    static getFlowsWithTriggerDetails(tableName?: string): string {
        return "";
    }
    static getTableForFlow(flowSysId?: string): string {
        return "";
    }
    static isFlowHasTableTrigger(flowSysId?: string): boolean {
        return false;
    }
}
