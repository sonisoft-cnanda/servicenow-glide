import { Context } from '../imports/Context'
import { Function } from '../imports/Function'

export class PendingResultDetails {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    isGeniusResultsPending(): boolean {
        return false;
    }
    isQueryRewritePending(): boolean {
        return false;
    }
    isRegularSearchPending(): boolean {
        return false;
    }
}
