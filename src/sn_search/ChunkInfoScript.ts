import { Context } from '../imports/Context'
import { Function } from '../imports/Function'

export class ChunkInfoScript {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    getChunkFormat(): string {
        return "";
    }
    getChunkId(): string {
        return "";
    }
    getSemanticEmbedding(): string {
        return "";
    }
    getSemanticIndexName(): string {
        return "";
    }
    getSemanticSimilarityScore(): string {
        return "";
    }
    getText(): string {
        return "";
    }
}
