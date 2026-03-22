import { Context } from "../imports/Context";
import { GlideSpan } from "./GlideSpan";

export class GlideTracer {
    constructor(cx: Context, args: any[], ctorObj: Function, inNewExpr: boolean) {  }
    static startSpan(instrumentationScope: string, category: string, subCategory: string, spanName: string, level: string): GlideSpan {
        return null as any;
    }
}
