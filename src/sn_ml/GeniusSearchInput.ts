import { Context } from "../imports/Context";
import { Function } from "../imports/Function";
import { GeniusSearchQuery } from "./GeniusSearchQuery";
import { GeniusSearchContext } from "./GeniusSearchContext";

export class GeniusSearchInput {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    getSearchContext(): GeniusSearchContext {
        return null as any;
    }
    getSearchQuery(): GeniusSearchQuery {
        return null as any;
    }
    setSearchContext(searchContext?: GeniusSearchContext): void {
        
    }
    setSearchQuery(searchQuery?: GeniusSearchQuery): void {
        
    }
}
