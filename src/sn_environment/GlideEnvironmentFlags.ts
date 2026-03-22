import { Context } from '../imports/Context'
import { Function } from '../imports/Function'

export class GlideEnvironmentFlags {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    isFipsEnforced(): boolean {
        return false;
    }
    refresh(): void {
        
    }
}
