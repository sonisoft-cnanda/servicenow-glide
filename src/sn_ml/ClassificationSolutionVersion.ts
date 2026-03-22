import { WorkflowSolutionVersion } from "./WorkflowSolutionVersion";

export class ClassificationSolutionVersion extends WorkflowSolutionVersion {
    constructor(...args: any[]) { super(); }
    applyPrediction(inputGr?: any): boolean {
        return false;
    }
    getPredictionPerformance(predictionPerformanceInput?: Record<any, any>): string {
        return "";
    }
    getPredictionSettings(): string {
        return "";
    }
    getProperties(): string {
        return "";
    }
    getStatus(includeDetails?: boolean): string {
        return "";
    }
    getTrainingStatistics(): string {
        return "";
    }
    getVersionNumber(): string {
        return "";
    }
    predict(input?: any, options?: Record<any, any>): string {
        return "";
    }
    setPredictionSettings(predictionSettingsMap?: Record<any, any>): void {
        
    }
}
