import { Context } from '../imports/Context'
import { Function } from '../imports/Function'

export class InteractionContext {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    getVirtualColumnName(scriptVarName?: string): string {
        return "";
    }
    syncVirtualColumns(): Record<any, any> {
        return {} as any;
    }
}
