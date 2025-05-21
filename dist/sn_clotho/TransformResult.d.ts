import { NativeObject } from '../imports/NativeObject.js';
import { Context } from '../imports/Context.js';
import { Function } from '../imports/Function.js';
import { Data } from '../imports/Data.js';
import { NativeArray } from '../imports/NativeArray.js';
export declare class TransformResult {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean);
    byGroup(): NativeObject;
    getByLabel(label?: string): Data;
    getData(): Data;
    toArray(): NativeArray;
}
//# sourceMappingURL=TransformResult.d.ts.map