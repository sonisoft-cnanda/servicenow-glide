import { Context } from "../imports/Context";
import { SearchFacetData } from "./SearchFacetData";

export class SearchFacet {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    getData(): SearchFacetData {
        return null as any;
    }
    getFacetConfigId(): string {
        return "";
    }
    getName(): string {
        return "";
    }
    getOptionLimit(): number {
        return 0;
    }
    getOrder(): number {
        return 0;
    }
    getType(): string {
        return "";
    }
}
