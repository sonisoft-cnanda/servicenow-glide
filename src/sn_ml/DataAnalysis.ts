import { Context } from "../imports/Context";
import { Function } from "../imports/Function";
import { DataAnalysisVersion } from "./DataAnalysisVersion";

export class DataAnalysis {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    cancelAnalysisJob(): void {
        
    }
    getActiveVersion(): DataAnalysisVersion {
        return null as any;
    }
    getAllVersions(): Array<any> {
        return [];
    }
    getLatestVersion(): DataAnalysisVersion {
        return null as any;
    }
    getName(): string {
        return "";
    }
    getProperties(): string {
        return "";
    }
    getVersion(version?: string): DataAnalysisVersion {
        return null as any;
    }
    setActiveVersion(version?: string): void {
        
    }
    submitAnalysisJob(options?: Record<any, any>): DataAnalysisVersion {
        return null as any;
    }
}
