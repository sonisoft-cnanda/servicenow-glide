import { NativeObject } from './NativeObject';
import { Context } from './Context';
import { Function } from './Function';
import { Data } from './Data';
import { NativeArray } from './NativeArray';

export class TransformResult {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {}
    byGroup(): NativeObject {
        return new NativeObject();
    }
    getByLabel(label?: string): Data {
        return new Data();
    }
    getData(): Data {
        return new Data();
    }
    toArray(): NativeArray {
        return new NativeArray();
    }
}
