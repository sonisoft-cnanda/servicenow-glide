import { MLSolution } from "./MLSolution";

export class MLSimilarity extends MLSolution {
    constructor(...args: any[]) { super(); }
    getConfidenceScore(params?: Record<any, any>): string {
        return "";
    }
    getLookupSetInfo(options?: Record<any, any>): string {
        return "";
    }
}
