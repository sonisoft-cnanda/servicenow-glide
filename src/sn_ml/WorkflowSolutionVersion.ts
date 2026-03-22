import { GlideRecord } from "../types/GlideRecord";

export class WorkflowSolutionVersion {
    constructor() {  }
    getProperties(): string {
        return "";
    }
    getStatus(includeDetails?: boolean): string {
        return "";
    }
    getTrainingResults(): string {
        return "";
    }
    getVersionNumber(): string {
        return "";
    }
    predict(input?: any, options?: Record<any, any>): string {
        return "";
    }
    predictOnFile(input?: any, options?: Record<any, any>): GlideRecord {
        return null as any;
    }
}
