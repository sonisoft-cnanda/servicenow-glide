import { Context } from "../imports/Context";
import { NativeObject } from "../imports/NativeObject";

export class JsonRecordExtractor {
    constructor(cx: Context, args: any[], ctorObj: Function, inNewExpr: boolean) {  }
    hasNext(): boolean {
        return false;
    }
    next(): NativeObject {
        return null as any;
    }
}
