import { Context } from "../imports/Context";
import { Function } from "../imports/Function";
import { GlideRecord } from "../types/GlideRecord";
import { Solution } from "./Solution";

export class SolutionFinder {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    findActiveSolutionsForRecord(record?: GlideRecord): Array<any> {
        return [];
    }
    getSolution(solutionName?: string, version?: any): Solution {
        return null as any;
    }
    hasTrainedModels(solutionName?: string): boolean {
        return false;
    }
}
