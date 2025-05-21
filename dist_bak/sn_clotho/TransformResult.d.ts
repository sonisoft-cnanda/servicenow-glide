import { Context } from '../imports/Context';
import { NativeArray } from '../imports/NativeArray';
import { NativeObject } from '../imports/NativeObject';
import { Function } from '../imports/Function';
import { Data } from '../imports/Data';
export declare class TransformResult {
    byGroup(): NativeObject;
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean);
    getByLabel(label?: string): Data;
    getData(): Data;
    toArray(): NativeArray;
}
