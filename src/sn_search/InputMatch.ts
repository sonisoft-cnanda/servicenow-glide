import { Context } from '../imports/Context'
import { Function } from '../imports/Function'

export class InputMatch {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    getCategory(): string {
        return "";
    }
    getCitationSources(): Array<any> {
        return [];
    }
    getCompleteResponse(): string {
        return "";
    }
    getDisplayValue(): string {
        return "";
    }
}
