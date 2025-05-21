import { Context } from '../imports/Context.js';
import { Function } from '../imports/Function.js';
export declare class GeniusResultContext {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean);
    addAsyncGRTransactionId(transactionId?: string): void;
    addQueryMetadata(key?: string, value?: string): void;
    addTransactionId(transactionId?: string): void;
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
//# sourceMappingURL=GeniusResultContext.d.ts.map