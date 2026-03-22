import { Context } from "../imports/Context";
import { Function } from "../imports/Function";
import { SimilaritySolutionVersion } from "./SimilaritySolutionVersion";

export class SimilaritySolution {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    cancelTrainingJob(): void {
        
    }
    getActiveVersion(): SimilaritySolutionVersion {
        return null as any;
    }
    getAllVersions(): Array<any> {
        return [];
    }
    getLatestVersion(): SimilaritySolutionVersion {
        return null as any;
    }
    getName(): string {
        return "";
    }
    getProperties(): string {
        return "";
    }
    getVersion(version?: string): SimilaritySolutionVersion {
        return null as any;
    }
    setActiveVersion(version?: string): void {
        
    }
    submitTrainingJob(options?: Record<any, any>): SimilaritySolutionVersion {
        return null as any;
    }
}
