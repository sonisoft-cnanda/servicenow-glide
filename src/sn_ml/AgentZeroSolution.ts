import { Context } from "../imports/Context";
import { Function } from "../imports/Function";
import { AgentZeroSolutionVersion } from "./AgentZeroSolutionVersion";

export class AgentZeroSolution {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    cancelTrainingJob(): void {
        
    }
    getActiveVersion(): AgentZeroSolutionVersion {
        return null as any;
    }
    getAllVersions(): Array<any> {
        return [];
    }
    getLatestVersion(): AgentZeroSolutionVersion {
        return null as any;
    }
    getName(): string {
        return "";
    }
    getProperties(): string {
        return "";
    }
    getVersion(version?: string): AgentZeroSolutionVersion {
        return null as any;
    }
    setActiveVersion(version?: string): void {
        
    }
    submitTrainingJob(options?: Record<any, any>): AgentZeroSolutionVersion {
        return null as any;
    }
    tuneThresholds(version?: string, labeledData?: Array<any>, options?: Record<any, any>): string {
        return "";
    }
}
