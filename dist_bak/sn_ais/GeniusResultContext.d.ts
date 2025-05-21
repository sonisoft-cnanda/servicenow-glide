import { Context } from '../imports/Context';
import { Function } from '../imports/Function';
export declare class GeniusResultContext {
    addAsyncGRTransactionId(transactionId?: string): void;
    addQueryMetadata(key?: string, value?: string): void;
    addTransactionId(transactionId?: string): void;
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean);
    getAdditionalContext(): string;
    getGeniusResultMode(): string;
    getMatchingDocuments(): Array<any>;
    getOriginalSearchPhrase(): string;
    getPredictionResult(): Array<any>;
    getQueryMetadata(key?: string): string;
    getSearchContext(): Record<any, any>;
    getSearchQueryRequestDetails(): Record<any, any>;
    getSearchResults(): Array<any>;
    setSearchPhraseForAllRequests(searchPhrase?: string): boolean;
}
