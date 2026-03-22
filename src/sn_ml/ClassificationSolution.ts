import { Context } from "../imports/Context";
import { Function } from "../imports/Function";
import { ClassificationSolutionVersion } from "./ClassificationSolutionVersion";

export class ClassificationSolution {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    cancelTrainingJob(): void {
        
    }
    getActiveVersion(): ClassificationSolutionVersion {
        return null as any;
    }
    getAllVersions(): Array<any> {
        return [];
    }
    getLatestVersion(): ClassificationSolutionVersion {
        return null as any;
    }
    getName(): string {
        return "";
    }
    getProperties(): string {
        return "";
    }
    getVersion(version?: string): ClassificationSolutionVersion {
        return null as any;
    }
    setActiveVersion(version?: string): void {
        
    }
    submitTrainingJob(options?: Record<any, any>): ClassificationSolutionVersion {
        return null as any;
    }
}
