import { Context } from '../imports/Context'
import { Function } from '../imports/Function'

export class ScriptableOrchestratorContext {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    getContext(): Record<any, any> {
        return {} as any;
    }
}
