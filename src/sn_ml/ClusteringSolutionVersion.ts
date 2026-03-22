import { WorkflowSolutionVersion } from "./WorkflowSolutionVersion";

export class ClusteringSolutionVersion extends WorkflowSolutionVersion {
    constructor(...args: any[]) { super(); }
    cancelUpdateJob(): void {
        
    }
    deleteClusterAssignments(options?: Record<any, any>): number {
        return 0;
    }
    deleteUnavailableClusterModels(options?: Record<any, any>): number {
        return 0;
    }
    getClusterAssignments(options?: Record<any, any>): string {
        return "";
    }
    getClusterInfo(options?: Record<any, any>): string {
        return "";
    }
    getProperties(): string {
        return "";
    }
    getStatus(includeDetails?: boolean): string {
        return "";
    }
    getTopNPurityInfo(options?: Record<any, any>): string {
        return "";
    }
    getUpdateStatus(): string {
        return "";
    }
    getVersionNumber(): string {
        return "";
    }
    predict(input?: any, options?: Record<any, any>): string {
        return "";
    }
    static publishStatsJob(solutionId?: string, sysAttachmentId?: string): void {
        
    }
    submitDeleteJob(input?: any): void {
        
    }
    submitUpdateClusteringJobToPredictionServer(options?: Record<any, any>): string {
        return "";
    }
    submitUpdateJob(options?: Record<any, any>): void {
        
    }
}
