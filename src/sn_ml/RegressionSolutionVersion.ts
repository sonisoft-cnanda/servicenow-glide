import { WorkflowSolutionVersion } from "./WorkflowSolutionVersion";

export class RegressionSolutionVersion extends WorkflowSolutionVersion {
    constructor(...args: any[]) { super(); }
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
