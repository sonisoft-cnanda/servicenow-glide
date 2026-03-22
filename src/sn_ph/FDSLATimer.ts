import { Context } from '../imports/Context'
import { Function } from '../imports/Function'

export class FDSLATimer {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    cancel(): boolean {
        return false;
    }
    pause(): boolean {
        return false;
    }
    resume(): boolean {
        return false;
    }
}
