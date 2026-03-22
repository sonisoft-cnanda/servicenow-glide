import { Context } from "../imports/Context";
import { NativeObject } from "../imports/NativeObject";
import { Function } from "../imports/Function";
import { TransformResult } from "./TransformResult";

export class TransformPart {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    add(summand?: number): TransformPart {
        return null as any;
    }
    autocorrelate(): TransformPart {
        return null as any;
    }
    avg(): TransformPart {
        return null as any;
    }
    bottom(count?: number): TransformPart {
        return null as any;
    }
    ceil(precision?: number): TransformPart {
        return null as any;
    }
    collect(): TransformPart {
        return null as any;
    }
    copyData(obj1?: any, obj2?: any): TransformPart {
        return null as any;
    }
    count(): TransformPart {
        return null as any;
    }
    decompose(_tags?: any): TransformPart {
        return null as any;
    }
    derivative(): TransformPart {
        return null as any;
    }
    deviation(predictedValues?: any, method?: string): TransformPart {
        return null as any;
    }
    div(divisor?: number): TransformPart {
        return null as any;
    }
    filter(_aggregator?: any, _window?: any): TransformPart {
        return null as any;
    }
    fit(_params?: NativeObject): TransformPart {
        return null as any;
    }
    floor(precision?: number): TransformPart {
        return null as any;
    }
    fractiles(_fractions?: any): TransformPart {
        return null as any;
    }
    getResult(): TransformResult {
        return null as any;
    }
    groupBy(field?: string): TransformPart {
        return null as any;
    }
    interpolate(countOrDuration?: any): TransformPart {
        return null as any;
    }
    iqr(): TransformPart {
        return null as any;
    }
    label(label?: string): TransformPart {
        return null as any;
    }
    limit(countOrDuration?: any): TransformPart {
        return null as any;
    }
    log(base?: number): TransformPart {
        return null as any;
    }
    max(): TransformPart {
        return null as any;
    }
    median(): TransformPart {
        return null as any;
    }
    metric(metricName?: string): TransformPart {
        return null as any;
    }
    min(): TransformPart {
        return null as any;
    }
    mul(factor?: any): TransformPart {
        return null as any;
    }
    partition(_aggregator?: string, _window?: any, _base?: any): TransformPart {
        return null as any;
    }
    predict(obj1?: any, obj2?: any): TransformPart {
        return null as any;
    }
    put(): void {
        
    }
    resample(a1?: any, a2?: any, a3?: any): TransformPart {
        return null as any;
    }
    round(precision?: number): TransformPart {
        return null as any;
    }
    stddev(): TransformPart {
        return null as any;
    }
    sub(substrahend?: any): TransformPart {
        return null as any;
    }
    sum(): TransformPart {
        return null as any;
    }
    top(count?: number): TransformPart {
        return null as any;
    }
    where(obj?: any): TransformPart {
        return null as any;
    }
}
