import { Context } from "../imports/Context";
import { NativeArray } from "../imports/NativeArray";
import { NativeObject } from "../imports/NativeObject";
import { Function } from "../imports/Function";
import { Data } from "./Data";

export class TransformResult {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    byGroup(): NativeObject {
        return null as any;
    }
    getByLabel(label?: string): Data {
        return null as any;
    }
    getData(): Data {
        return null as any;
    }
    toArray(): NativeArray {
        return null as any;
    }
}
