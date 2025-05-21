import { Context } from '../imports/Context';
import { Function } from '../imports/Function';

export class GeniusResultAnswer {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {}
    addDataMap(map?: any): boolean {
        return false;
    }
    addSearchAttribute(key?: string, values?: string[]): boolean {
        return false;
    }
    addSearchPhrases(searchPhrases?: string[]): boolean {
        return false;
    }
    allowSearchPhraseOverwrite(): void {
        
    }
    disableSearchPhraseOverwrite(): void {
        
    }
    dprSearch(numDocsToMatch?: number, threshold?: number, field?: string[]): void {
        
    }
    searchTitleOnly(titleOnly?: boolean): void {
        
    }
    setEncodedQuery(query?: string): boolean {
        return false;
    }
    setSearchLimit(searchLimit?: number): boolean {
        return false;
    }
    setSearchPhrase(searchPhrase?: string): boolean {
        return false;
    }
    setSemanticDocumentMatchCount(numDocsToMatch?: number): void {
        
    }
    setSemanticDocumentMatchThreshold(threshold?: number): void {
        
    }
    setSemanticSearch(semanticSearch?: boolean): void {
        
    }
    setTable(table?: string): boolean {
        return false;
    }
    snippetSearch(snippetSearch?: boolean): void {
        
    }
    spellCheck(spellCheck?: boolean): void {
        
    }
}
