import { Context } from "../imports/Context";
import { Function } from "../imports/Function";
import { PredictabilityEstimateVersion } from "./PredictabilityEstimateVersion";

export class PredictabilityEstimate {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    cancelTrainingJob(): void {
        
    }
    getActiveVersion(): PredictabilityEstimateVersion {
        return null as any;
    }
    getAllVersions(): Array<any> {
        return [];
    }
    getLatestVersion(): PredictabilityEstimateVersion {
        return null as any;
    }
    getName(): string {
        return "";
    }
    getProperties(): string {
        return "";
    }
    getVersion(version?: string): PredictabilityEstimateVersion {
        return null as any;
    }
    setActiveVersion(version?: string): void {
        
    }
    submitTrainingJob(options?: Record<any, any>): PredictabilityEstimateVersion {
        return null as any;
    }
}
