import { WorkflowSolutionVersion } from "./WorkflowSolutionVersion";

export class NLUSolutionVersion extends WorkflowSolutionVersion {
    constructor(...args: any[]) { super(); }
    copyArtifacts(toSolutionName?: string, options?: Record<any, any>): string {
        return "";
    }
    detectConflicts(input?: any, options?: Record<any, any>): string {
        return "";
    }
    getArtifactAsString(artifactName?: string, options?: Record<any, any>): string {
        return "";
    }
    getBatchTestingResult(options?: Record<any, any>): string {
        return "";
    }
    getBatchThresholdSummaryResult(options?: Record<any, any>): string {
        return "";
    }
    getProperties(): string {
        return "";
    }
    getStatus(includeDetails?: boolean): string {
        return "";
    }
    getVersionNumber(): string {
        return "";
    }
    predict(input?: any, options?: Record<any, any>): string {
        return "";
    }
}
