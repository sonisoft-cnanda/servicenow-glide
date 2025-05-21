import { Number } from './Number';
import { Context } from './Context';
import { Function } from './Function';
import { NativeObject } from './NativeObject';
import { TransformResult } from './TransformResult';

export class TransformPart {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {}
    add(summand?: Number): TransformPart {
        return new TransformPart();
    }
    autocorrelate(): TransformPart {
        return new TransformPart();
    }
    avg(): TransformPart {
        return new TransformPart();
    }
    bottom(count?: Number): TransformPart {
        return new TransformPart();
    }
    ceil(precision?: Number): TransformPart {
        return new TransformPart();
    }
    collect(): TransformPart {
        return new TransformPart();
    }
    copyData(obj1?: any, obj2?: any): TransformPart {
        return new TransformPart();
    }
    count(): TransformPart {
        return new TransformPart();
    }
    decompose(_tags?: any): TransformPart {
        return new TransformPart();
    }
    derivative(): TransformPart {
        return new TransformPart();
    }
    deviation(predictedValues?: any, method?: string): TransformPart {
        return new TransformPart();
    }
    div(divisor?: Number): TransformPart {
        return new TransformPart();
    }
    filter(_aggregator?: any, _window?: any): TransformPart {
        return new TransformPart();
    }
    fit(_params?: NativeObject): TransformPart {
        return new TransformPart();
    }
    floor(precision?: Number): TransformPart {
        return new TransformPart();
    }
    fractiles(_fractions?: any): TransformPart {
        return new TransformPart();
    }
    getResult(): TransformResult {
        return new TransformResult();
    }
    groupBy(field?: string): TransformPart {
        return new TransformPart();
    }
    interpolate(countOrDuration?: any): TransformPart {
        return new TransformPart();
    }
    iqr(): TransformPart {
        return new TransformPart();
    }
    label(label?: string): TransformPart {
        return new TransformPart();
    }
    limit(countOrDuration?: any): TransformPart {
        return new TransformPart();
    }
    log(base?: Number): TransformPart {
        return new TransformPart();
    }
    max(): TransformPart {
        return new TransformPart();
    }
    median(): TransformPart {
        return new TransformPart();
    }
    metric(metricName?: string): TransformPart {
        return new TransformPart();
    }
    min(): TransformPart {
        return new TransformPart();
    }
    mul(factor?: any): TransformPart {
        return new TransformPart();
    }
    partition(_aggregator?: string, _window?: any, _base?: any): TransformPart {
        return new TransformPart();
    }
    predict(obj1?: any, obj2?: any): TransformPart {
        return new TransformPart();
    }
    put(): void {
        
    }
    resample(a1?: any, a2?: any, a3?: any): TransformPart {
        return new TransformPart();
    }
    round(precision?: Number): TransformPart {
        return new TransformPart();
    }
    stddev(): TransformPart {
        return new TransformPart();
    }
    sub(substrahend?: any): TransformPart {
        return new TransformPart();
    }
    sum(): TransformPart {
        return new TransformPart();
    }
    top(count?: Number): TransformPart {
        return new TransformPart();
    }
    where(obj?: any): TransformPart {
        return new TransformPart();
    }
}
