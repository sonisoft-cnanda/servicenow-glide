import { NativeObject } from './NativeObject.js';
import { Context } from './Context.js';
import { Function } from './Function.js';
import { Data } from './Data.js';
import { NativeArray } from './NativeArray.js';
export declare class TransformResult {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean);
    byGroup(): NativeObject;
    getByLabel(label?: string): Data;
    getData(): Data;
    toArray(): NativeArray;
}
//# sourceMappingURL=TransformResult.d.ts.map