import { Context } from "../imports/Context";
import { Function } from "../imports/Function";
import { TransformResult } from "./TransformResult";
import { TransformPart } from "./TransformPart";

export class Transformer {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    execute(rangeStart?: any, rangeEnd?: any): TransformResult {
        return null as any;
    }
    groupBy(field?: string): TransformPart {
        return null as any;
    }
    metric(metricName?: string): TransformPart {
        return null as any;
    }
    toJson(): string {
        return "";
    }
}
