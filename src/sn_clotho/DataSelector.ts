import { Context } from "../imports/Context";
import { Function } from "../imports/Function";
import { ClothoTransform } from "./ClothoTransform";

export class DataSelector {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    addMetric(metric?: string): ClothoTransform {
        return null as any;
    }
}
