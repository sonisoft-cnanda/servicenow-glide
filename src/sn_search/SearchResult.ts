import { Context } from '../imports/Context'
import { Function } from '../imports/Function'

export class SearchResult {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    getAisDocId(): string {
        return "";
    }
    getColumns(): Array<any> {
        return [];
    }
    getDocumentIndex(): number {
        return 0;
    }
    getDocumentType(): string {
        return "";
    }
    getPassages(): Array<any> {
        return [];
    }
    getRecordClassName(): string {
        return "";
    }
    getScore(): number {
        return 0;
    }
    getSemanticEmbedding(): string {
        return "";
    }
    getSemanticSimilarity(): number {
        return 0;
    }
    getSourceId(): string {
        return "";
    }
    getSysId(): string {
        return "";
    }
    getTable(): string {
        return "";
    }
    getTableLabelPlural(): string {
        return "";
    }
    getTableLabelSingular(): string {
        return "";
    }
    getText(): string {
        return "";
    }
    getTitle(): string {
        return "";
    }
    getUrl(): string {
        return "";
    }
}
