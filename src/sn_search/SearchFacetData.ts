import { Context } from '../imports/Context'
import { Function } from '../imports/Function'

export class SearchFacetData {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    getCount(): number {
        return 0;
    }
    getOptions(): Array<any> {
        return [];
    }
}
