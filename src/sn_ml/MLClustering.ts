import { MLSolution } from "./MLSolution";

export class MLClustering extends MLSolution {
    constructor(...args: any[]) { super(); }
    getClusterAssignments(options?: Record<any, any>): string {
        return "";
    }
    getClusterForRecord(inputGrObj?: any): string {
        return "";
    }
    getClusterInfo(options?: Record<any, any>): string {
        return "";
    }
    getTopNPurityInfo(options?: Record<any, any>): string {
        return "";
    }
}
