import { Context } from '../imports/Context';
import { Function } from '../imports/Function';

export class GeniusResultContext {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {}
    addAsyncGRTransactionId(transactionId?: string): void {
        
    }
    addQueryMetadata(key?: string, value?: string): void {
        
    }
    addTransactionId(transactionId?: string): void {
        
    }
    getAdditionalContext(): string {
        return "";
    }
    getGeniusResultMode(): string {
        return "";
    }
    getMatchingDocuments(): Array<any> {
        return new Array();
    }
    getOriginalSearchPhrase(): string {
        return "";
    }
    getPredictionResult(): Array<any> {
        return new Array();
    }
    getQueryMetadata(key?: string): string {
        return "";
    }
    getSearchContext(): Record<any, any> {
        return {};
    }
    getSearchQueryRequestDetails(): Record<any, any> {
        return {};
    }
    getSearchResults(): Array<any> {
        return new Array();
    }
    setSearchPhraseForAllRequests(searchPhrase?: string): boolean {
        return false;
    }
}
