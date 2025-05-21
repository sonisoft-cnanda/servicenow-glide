import { Context } from './Context.js';
import { Function } from './Function.js';
export declare class Transformer {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean);
    getRow(): Record<any, any>;
    transform(): boolean;
}
//# sourceMappingURL=Transformer.d.ts.map