import { Context } from './Context';
import { Function } from './Function';

export class Transformer {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {}
    getRow(): Record<any, any> {
        return {};
    }
    transform(): boolean {
        return false;
    }
}
