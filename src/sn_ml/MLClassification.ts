import { MLSolution } from "./MLSolution";

export class MLClassification extends MLSolution {
    constructor(...args: any[]) { super(); }
    applyPrediction(grObj?: any): boolean {
        return false;
    }
    predict(gr?: any, options?: Record<any, any>): string {
        return "";
    }
}
