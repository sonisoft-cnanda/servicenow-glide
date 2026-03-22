import { Context } from "../imports/Context";
import { Function } from "../imports/Function";
import { GlideAisLogger } from "./GlideAisLogger";

export class GeniusResultContext {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    addQueryMetadata(key?: string, value?: string): void {
        
    }
    addTransactionId(transactionId?: string): void {
        
    }
    getAdditionalContext(): string {
        return "";
    }
    getAsyncMode(): string {
        return "";
    }
    getExternalGeniusResultSearchSources(): Array<any> {
        return [];
    }
    getGeniusResultConfigurationId(): string {
        return "";
    }
    getGeniusResultParameters(): string {
        return "";
    }
    getGeniusResultParametersFromConfigId(geniusResultConfigurationId?: string): string {
        return "";
    }
    getGeniusResultReturnFieldsFromConfigId(geniusResultConfigurationId?: string): Array<any> {
        return [];
    }
    getGeniusResultSearchSources(): Array<any> {
        return [];
    }
    getInternalContext(): Record<any, any> {
        return {} as any;
    }
    getLogger(): GlideAisLogger {
        return null as any;
    }
    getMatchingDocuments(): Array<any> {
        return [];
    }
    getMultipleSearchResults(): Array<any> {
        return [];
    }
    getOriginalSearchPhrase(): string {
        return "";
    }
    getPredictionResult(): Array<any> {
        return [];
    }
    getPrimarySearchRequestId(): string {
        return "";
    }
    getQueryBoostFeedBack(): Record<any, any> {
        return {} as any;
    }
    getQueryMetadata(key?: string): string {
        return "";
    }
    getSearchContext(): Record<any, any> {
        return {} as any;
    }
    getSearchPhrase(): string {
        return "";
    }
    getSearchQueryRequestDetails(): Record<any, any> {
        return {} as any;
    }
    getSearchResults(): Array<any> {
        return [];
    }
    getSearchResultsBySearchName(searchName?: string): Array<any> {
        return [];
    }
    isStreamingEnabled(): boolean {
        return false;
    }
    setSearchPhraseForAllRequests(searchPhrase?: string): boolean {
        return false;
    }
}
