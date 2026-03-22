import { Context } from "../imports/Context";
import { Function } from "../imports/Function";

export class TaxonomyJS {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    getDescription(): string {
        return "";
    }
    getName(): string {
        return "";
    }
    getRootTopicIds(): Array<any> {
        return [];
    }
    getTopics(hideTopicsWithNoContent?: boolean, maxLevel?: number, isMobile?: boolean): Array<any> {
        return [];
    }
    isActive(): boolean {
        return false;
    }
}
