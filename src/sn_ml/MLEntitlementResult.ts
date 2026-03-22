import { Context } from '../imports/Context'
import { Function } from '../imports/Function'

export class MLEntitlementResult {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    getMessage(): string {
        return "";
    }
    hasEntitlement(): boolean {
        return false;
    }
}
