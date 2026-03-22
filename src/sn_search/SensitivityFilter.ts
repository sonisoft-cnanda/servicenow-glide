import { Context } from '../imports/Context'
import { Function } from '../imports/Function'

export class SensitivityFilter {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    getFilterId(): string {
        return "";
    }
    getFilterValue(): string {
        return "";
    }
    hasMatch(): boolean {
        return false;
    }
}
