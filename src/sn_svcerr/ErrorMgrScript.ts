import { NativeArray } from "../imports/NativeArray";
import { ErrorCode } from "./ErrorCode";

export class ErrorMgrScript {
    constructor(sourceApplId?: string) {  }
    addRejectMessage(ciSysId?: string, errCode?: string, message?: string): void {
        
    }
    assign(encodedQuery?: string, statsSysId?: string, comment?: string): void {
        
    }
    countErrors(encodedQuery?: string, onlyResolved?: boolean): number {
        return 0;
    }
    countUnclassifiedErrors(): number {
        return 0;
    }
    createTask(encodedQuery?: string, statsSysId?: string): void {
        
    }
    doneWithError(encodedQuery?: string): void {
        
    }
    getCategories(filterMappingRelevancy?: boolean): NativeArray {
        return null as any;
    }
    getErrorCode(errorCodeId?: string): ErrorCode {
        return null as any;
    }
    getErrorCodes(categoryId?: string, filterMappingRelevancy?: boolean): NativeArray {
        return null as any;
    }
    getInstanceCategories(instanceId?: string): NativeArray {
        return null as any;
    }
    getInstanceErrorCodes(instanceId?: string, categoryId?: string): NativeArray {
        return null as any;
    }
    getLastUpdatedTime(): number {
        return 0;
    }
    static getMappingRelevancyOSFilter(): string[] {
        return [];
    }
    getOverallNumberOfErrors(): number {
        return 0;
    }
    static getSuggestionForMap(errorCode?: string, isLeafEndpoint?: boolean, canSkipAndResume?: boolean): NativeArray {
        return null as any;
    }
    getSuggestionsForBulk(errorCode?: string, isGlobal?: boolean): NativeArray {
        return null as any;
    }
    hasActiveErrors(errorId?: string): boolean {
        return false;
    }
    ignoreError(errorId?: string): void {
        
    }
    resolveMessage(msgSysId?: string): void {
        
    }
    retryMultipleErrors(encodedQuery?: string, statsSysId?: string): void {
        
    }
    retrySingleError(errorId?: string): void {
        
    }
    retrySingleErrorForMultiple(errorId?: string): void {
        
    }
    retryUnclassifiedErrors(): void {
        
    }
    stopDiscovery(encodedQuery?: string, statsSysId?: string): void {
        
    }
    unIgnoreError(errorId?: string): void {
        
    }
    updateAllCounts(): void {
        
    }
}
