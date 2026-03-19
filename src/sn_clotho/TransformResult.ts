import { NativeObject } from '../imports/NativeObject';
import { Context } from '../imports/Context';
import { Function } from '../imports/Function';
import { Data } from '../imports/Data';
import { NativeArray } from '../imports/NativeArray';

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
