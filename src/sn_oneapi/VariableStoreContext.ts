import { Context } from '../imports/Context'
import { Function } from '../imports/Function'

export class VariableStoreContext {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    getAllValues(): any {
        return null as any;
    }
    getValue(name?: string): any {
        return null as any;
    }
}
