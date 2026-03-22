import { Context } from '../imports/Context'
import { Function } from '../imports/Function'

export class GeniusResultAnswer {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    addDataMap(map?: any): boolean {
        return false;
    }
    addQueryRequestMetadata(key?: string, value?: string): void {
        
    }
    addRestfulParameter(parameter?: string, parameterValues?: Array<any>): void {
        
    }
    addSearchAttribute(key?: string, values?: string[]): boolean {
        return false;
    }
    addSearchPhrases(searchPhrases?: string[]): boolean {
        return false;
    }
    addTable(table?: string): boolean {
        return false;
    }
    allowSearchPhraseOverwrite(): void {
        
    }
    disableSearchPhraseOverwrite(): void {
        
    }
    dprSearch(numDocsToMatch?: number, threshold?: number, fields?: string[]): void {
        
    }
    getQueryRequestMetadata(key?: string): string {
        return "";
    }
    honorSearchSourceExclusion(): void {
        
    }
    ragSearch(numDocsToMatch?: number, threshold?: number, embeddingModelId?: string, fields?: string[]): void {
        
    }
    removeTable(table?: string): boolean {
        return false;
    }
    searchTitleOnly(titleOnly?: boolean): void {
        
    }
    setAwaitingResults(awaitingResults?: boolean): void {
        
    }
    setDisambiguationResponse(clarifyingQuestion?: string): void {
        
    }
    setEncodedQuery(query?: string): boolean {
        return false;
    }
    setIncludeFeatureVectors(includeFeatureVectors?: boolean): void {
        
    }
    setLocale(locale?: string): void {
        
    }
    setPassageFormat(mode?: string, maxPassagesPerDoc?: number, params?: Record<any, any>): void {
        
    }
    setQueryMode(queryMode?: string): void {
        
    }
    setSearchLimit(searchLimit?: number): boolean {
        return false;
    }
    setSearchName(searchName?: string): void {
        
    }
    setSearchPhrase(searchPhrase?: string): boolean {
        return false;
    }
    setSemanticDocumentMatchCount(numDocsToMatch?: number): void {
        
    }
    setSemanticDocumentMatchThreshold(threshold?: number): void {
        
    }
    setSemanticGroupBy(semanticGroupBy?: string): void {
        
    }
    setSemanticMode(semanticMode?: string): void {
        
    }
    setSemanticSearch(semanticSearch?: boolean): void {
        
    }
    setSensitivityFilter(filterId?: string, filterValue?: string): void {
        
    }
    setTable(table?: string): boolean {
        return false;
    }
    snippetSearch(snippetSearch?: boolean): void {
        
    }
    spellCheck(spellCheck?: boolean): void {
        
    }
}
