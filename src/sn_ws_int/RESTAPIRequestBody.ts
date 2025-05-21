import { Context } from '../imports/Context';
import { Function } from '../imports/Function';

export class RESTAPIRequestBody {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {}
    hasNext(): boolean {
        return false;
    }
    nextEntry(): any {
        return null;
    }
}
