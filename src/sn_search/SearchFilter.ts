import { Context } from '../imports/Context'
import { Function } from '../imports/Function'

export class SearchFilter {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    getLabel(): string {
        return "";
    }
    getResultCount(): number {
        return 0;
    }
    getSysId(): string {
        return "";
    }
}
