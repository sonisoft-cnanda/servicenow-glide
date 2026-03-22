import { Context } from '../imports/Context'
import { Function } from '../imports/Function'

export class RAGRetrievalResponse {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    getCount(): number {
        return 0;
    }
    getRAGSearchEventSysId(): string {
        return "";
    }
    getResponseTimeInMs(): number {
        return 0;
    }
    getSearchResults(): Array<any> {
        return [];
    }
    getSpellCorrectedTerm(): string {
        return "";
    }
    getTerm(): string {
        return "";
    }
    getTotalHits(): number {
        return 0;
    }
    toJSON(): string {
        return "";
    }
}
