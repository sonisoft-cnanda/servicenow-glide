import { Context } from "../imports/Context";
import { Function } from "../imports/Function";
import { GlideRecord } from "../types/GlideRecord";

export class CatalogSearch {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    static search(catalogID?: string, categoryID?: string, term?: string, mobile?: boolean, depthSearch?: boolean, searchPortal?: boolean): GlideRecord {
        return null as any;
    }
}
