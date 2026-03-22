import { Context } from "../imports/Context";
import { Function } from "../imports/Function";
import { IMLSolutionVersion } from "./IMLSolutionVersion";
import { CompositeSolutionVersion } from "./CompositeSolutionVersion";

export class CompositeSolution {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    getActiveVersion(): CompositeSolutionVersion {
        return null as any;
    }
    getAllVersions(): Array<any> {
        return [];
    }
    getChildSolutions(): Array<any> {
        return [];
    }
    getLatestVersion(): CompositeSolutionVersion {
        return null as any;
    }
    getName(): string {
        return "";
    }
    getProperties(): string {
        return "";
    }
    getVersion(version?: string): CompositeSolutionVersion {
        return null as any;
    }
    setActiveVersion(version?: string): void {
        
    }
    submitTrainingJob(parameters?: Record<any, any>): IMLSolutionVersion {
        return null as any;
    }
}
