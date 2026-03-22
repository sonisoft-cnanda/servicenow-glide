import { NativeArray } from "../imports/NativeArray";
import { GlideRecord } from "../types/GlideRecord";

export class CachedDecisionTableAPI {
    constructor() {  }
    cacheDecisionTable(decisionId?: string): void {
        
    }
    evaluateDecisionQuestions(decisionId?: string, inputs?: Record<any, any>, firstMatch?: boolean): Array<any> {
        return [];
    }
    executeCondition(decisionId?: string, inputs?: Record<any, any>, condition?: string): boolean {
        return false;
    }
    executeDecisions(decisionId?: string, inputs?: Record<any, any>): Record<any, any> {
        return {} as any;
    }
    flushDecisionTableFromCache(decisionId?: string): void {
        
    }
    getDecision(decisionId?: string, inputs?: Record<any, any>): GlideRecord {
        return null as any;
    }
    getDecisions(decisionId?: string, inputs?: Record<any, any>): NativeArray {
        return null as any;
    }
    isEmptyDecisionTable(decisionId?: string): boolean {
        return false;
    }
    pairTableWithCache(tableName?: string): void {
        
    }
}
