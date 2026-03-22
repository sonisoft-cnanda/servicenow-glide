import { Context } from '../imports/Context'
import { Function } from '../imports/Function'

export class RAGRetrievalSearchResult {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    getAisDocId(): string {
        return "";
    }
    getChunks(): Array<any> {
        return [];
    }
    getColumns(): Record<any, any> {
        return {} as any;
    }
    getDatasourceType(): string {
        return "";
    }
    getDocumentIndex(): number {
        return 0;
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
    getSysId(): string {
        return "";
    }
    getTable(): string {
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
