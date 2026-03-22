import { Context } from "../imports/Context";
import { Function } from "../imports/Function";
import { PlanInfo } from "./PlanInfo";

export class GlideProcessAutomation {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    cancel(reason?: string): void {
        
    }
    cancelLite(reason?: string): void {
        
    }
    getPlan(): PlanInfo {
        return null as any;
    }
    isPresumedInterrupted(): boolean {
        return false;
    }
    isTerminated(): boolean {
        return false;
    }
    isWaiting(): boolean {
        return false;
    }
    static markInterruptedFlows(): void {
        
    }
    message(message?: string): void {
        
    }
    reportMidError(errorMessage?: string): void {
        
    }
    reschedulePlanForIncompatibleMidEngine(): void {
        
    }
}
