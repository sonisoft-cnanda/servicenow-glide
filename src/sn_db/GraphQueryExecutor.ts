import { Context } from "../imports/Context";
import { Function } from "../imports/Function";
import { GlideAggregate } from "../types/GlideAggregate";

export class GraphQueryExecutor {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    cypher2Results(cypher?: string): GlideAggregate {
        return null as any;
    }
    getACLErrors(): Array<string> {
        return [];
    }
    getCategory(): string {
        return "";
    }
    graph2GTop(): string {
        return "";
    }
    setCategory(category?: string): void {
        
    }
    setFixupEdges(fixupEdges?: boolean): void {
        
    }
}
