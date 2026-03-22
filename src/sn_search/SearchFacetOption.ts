import { Context } from '../imports/Context'
import { Function } from '../imports/Function'

export class SearchFacetOption {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    getCount(): number {
        return 0;
    }
    getLabel(): string {
        return "";
    }
    getOptions(): Array<any> {
        return [];
    }
    getValue(): string {
        return "";
    }
}
