import { Context } from '../imports/Context'
import { Function } from '../imports/Function'

export class SmallTalk {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    getCategory(): string {
        return "";
    }
    getCompleteResponse(): string {
        return "";
    }
    getDisplayValue(): string {
        return "";
    }
}
