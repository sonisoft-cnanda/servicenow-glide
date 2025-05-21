import { Context } from './Context';
import { Function } from './Function';

export class RESTAPIRequestBody {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {}
    hasNext(): boolean {
        return false;
    }
    nextEntry(): any {
        return null;
    }
}
