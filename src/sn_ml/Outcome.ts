import { Context } from '../imports/Context'
import { Function } from '../imports/Function'

export class Outcome {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    confidence(): string {
        return "";
    }
    detailedOutcome(): Array<any> {
        return [];
    }
    getMessagesMap(): Record<any, any> {
        return {} as any;
    }
    hasDetailedOutcome(): boolean {
        return false;
    }
    hasPrediction(): boolean {
        return false;
    }
    lowerBound(): string {
        return "";
    }
    predictedValue(): string {
        return "";
    }
    predictedValueSysId(): string {
        return "";
    }
    toJSONString(): string {
        return "";
    }
    upperBound(): string {
        return "";
    }
}
