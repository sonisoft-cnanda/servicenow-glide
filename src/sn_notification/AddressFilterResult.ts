import { Context } from '../imports/Context'
import { Function } from '../imports/Function'

export class AddressFilterResult {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    getInvalidReason(): string {
        return "";
    }
    isValid(): boolean {
        return false;
    }
}
