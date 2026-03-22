import { Context } from "../imports/Context";
import { Function } from "../imports/Function";
import { WorkflowSolutionVersion } from "./WorkflowSolutionVersion";

export class WorkflowSolution {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    cancelTrainingJob(): void {
        
    }
    createMLSolution(): string {
        return "";
    }
    getActiveVersion(): WorkflowSolutionVersion {
        return null as any;
    }
    getAllVersions(): Array<any> {
        return [];
    }
    getLatestVersion(): WorkflowSolutionVersion {
        return null as any;
    }
    getName(): string {
        return "";
    }
    getProperties(): string {
        return "";
    }
    getVersion(version?: string): WorkflowSolutionVersion {
        return null as any;
    }
    scheduleTrainingJob(options?: Record<any, any>): void {
        
    }
    setActiveVersion(version?: string): void {
        
    }
    submitTrainingJob(options?: Record<any, any>): WorkflowSolutionVersion {
        return null as any;
    }
}
