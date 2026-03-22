import { Outcome } from "./Outcome";
import { GlideRecord } from "../types/GlideRecord";
import { Solution } from "./Solution";

export class SolutionStats {
    static recordPredictValues(outcome?: Outcome, solution?: Solution): boolean {
        return false;
    }
    static recordPredictValuesTopN(outcomes?: Array<any>, solution?: Solution): boolean {
        return false;
    }
    static updateFinalValues(recordFinalValue?: GlideRecord, reason?: any): boolean {
        return false;
    }
}
