import { Context } from "../imports/Context";
import { Function } from "../imports/Function";
import { ClusteringSolutionVersion } from "./ClusteringSolutionVersion";

export class ClusteringSolution {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    cancelTrainingJob(): void {
        
    }
    getActiveVersion(): ClusteringSolutionVersion {
        return null as any;
    }
    getAllVersions(): Array<any> {
        return [];
    }
    getLatestVersion(): ClusteringSolutionVersion {
        return null as any;
    }
    getName(): string {
        return "";
    }
    getProperties(): string {
        return "";
    }
    getVersion(version?: string): ClusteringSolutionVersion {
        return null as any;
    }
    setActiveVersion(version?: string): void {
        
    }
    submitTrainingJob(options?: Record<any, any>): ClusteringSolutionVersion {
        return null as any;
    }
}
