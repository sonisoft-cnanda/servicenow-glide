import { Context } from "../imports/Context";
import { Function } from "../imports/Function";
import { PlanResponse } from "./PlanResponse";
import { Scriptable } from "../imports/Scriptable";

export class Subflow {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    static startAsync(scopedSubflowName?: string, scriptInputs?: Scriptable): PlanResponse {
        return null as any;
    }
}
