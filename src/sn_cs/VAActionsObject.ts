import { Context } from '../imports/Context'
import { Function } from '../imports/Function'

export class VAActionsObject {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    executeAction(actionName?: string, arg1?: any, arg2?: any, arg3?: any, arg4?: any, arg5?: any, arg6?: any, arg7?: any): any {
        return null as any;
    }
    executeActionWithArgsMap(actionName?: string, args?: Record<any, any>): any {
        return null as any;
    }
    isMethodAuthorized(actionName?: string): boolean {
        return false;
    }
}
