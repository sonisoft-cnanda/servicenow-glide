import { Context } from "../imports/Context";
import { Function } from "../imports/Function";
import { FlowRunnerResult } from "./FlowRunnerResult";
import { Scriptable } from "../imports/Scriptable";

export class FlowRunner {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    action(actionScopeDotName?: string): FlowRunner {
        return null as any;
    }
    addInput(name?: string, object?: any): FlowRunner {
        return null as any;
    }
    asUser(): FlowRunner {
        return null as any;
    }
    compile(force?: boolean): boolean {
        return false;
    }
    datastream(datastreamScopeDotName?: string): FlowRunner {
        return null as any;
    }
    flow(flowScopeDotName?: string): FlowRunner {
        return null as any;
    }
    inBackground(): FlowRunner {
        return null as any;
    }
    inDomain(domainIdOrName?: string): FlowRunner {
        return null as any;
    }
    inForeground(): FlowRunner {
        return null as any;
    }
    quick(): FlowRunner {
        return null as any;
    }
    restartFlowFromContext(contextId?: string, providedInputs?: Record<any, any>): FlowRunnerResult {
        return null as any;
    }
    run(): FlowRunnerResult {
        return null as any;
    }
    sourceRecordId(sourceRecordId?: string): FlowRunner {
        return null as any;
    }
    sourceTable(sourceTable?: string): FlowRunner {
        return null as any;
    }
    subflow(subflowScopeDotName?: string): FlowRunner {
        return null as any;
    }
    timeout(timeoutInMillis?: number): FlowRunner {
        return null as any;
    }
    validateInputs(validateInputs?: boolean): FlowRunner {
        return null as any;
    }
    withConnectionAliasOverride(alias?: string, override?: string): FlowRunner {
        return null as any;
    }
    withInputs(collection?: Scriptable): FlowRunner {
        return null as any;
    }
    withRoles(): FlowRunner {
        return null as any;
    }
}
