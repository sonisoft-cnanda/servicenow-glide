import { Context } from '../imports/Context'
import { Function } from '../imports/Function'

export class FlowActionProvider {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    copyActionType(parentActionId?: string, duplicateActionName?: string, duplicateActionScopeId?: string): string {
        return "";
    }
    copyFlow(parentFlowId?: string, duplicateFlowName?: string, duplicateFlowScopeId?: string): string {
        return "";
    }
    getMinimalActionTypeDetails(actionSysId?: string): string {
        return "";
    }
    getMinimalMainActionTypeSnapshot(actionSysId?: string): string {
        return "";
    }
}
