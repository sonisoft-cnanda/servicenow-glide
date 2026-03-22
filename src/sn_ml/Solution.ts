import { Context } from "../imports/Context";
import { Function } from "../imports/Function";
import { SolutionDefinition } from "./SolutionDefinition";
import { Outcome } from "./Outcome";
import { GlideRecord } from "../types/GlideRecord";

export class Solution {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    getCapability(): string {
        return "";
    }
    getDefinition(): SolutionDefinition {
        return null as any;
    }
    getName(): string {
        return "";
    }
    getPredictedField(): string {
        return "";
    }
    getThreshold(className?: string): number {
        return 0;
    }
    getVersion(): string {
        return "";
    }
    isActive(): boolean {
        return false;
    }
    predict(gr?: GlideRecord, threshold?: any): Outcome {
        return null as any;
    }
    predictBatch(Table?: string, EncodedQuery?: string, threshold?: number, maxRec?: number, topN?: number): Record<any, any> {
        return {} as any;
    }
    predictText(inputs?: Record<any, any>, threshold?: any): Outcome {
        return null as any;
    }
    predictTextTopN(inputs?: Record<any, any>, topN?: any): Array<any> {
        return [];
    }
    predictTextTopNConfInterval(inputs?: Record<any, any>, topN?: any, confidenceInterval?: number): Array<any> {
        return [];
    }
    predictTopN(gr?: GlideRecord, topN?: any): Array<any> {
        return [];
    }
    predictTopNConfInterval(gr?: GlideRecord, topN?: any, confidenceInterval?: number): Array<any> {
        return [];
    }
    updatePV(): void {
        
    }
}
