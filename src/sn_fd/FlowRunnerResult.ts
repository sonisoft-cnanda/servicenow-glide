import { Context } from "../imports/Context";
import { Function } from "../imports/Function";
import { ScriptableDataStream } from "./ScriptableDataStream";
import { GlideDateTime } from "../types/GlideDateTime";

type FlowObjectType = {};
export class FlowRunnerResult {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    debug(): string {
        return "";
    }
    getContextId(): string {
        return "";
    }
    getDataStream(): ScriptableDataStream {
        return null as any;
    }
    getDate(): GlideDateTime {
        return null as any;
    }
    getDomainId(): string {
        return "";
    }
    getFlowObjectName(): string {
        return "";
    }
    getFlowObjectType(): FlowObjectType {
        return null as any;
    }
    getOutputs(): Record<any, any> {
        return {} as any;
    }
}
