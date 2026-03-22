import { Context } from '../imports/Context'
import { Function } from '../imports/Function'

export class Agentic {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    getCategory(): string {
        return "";
    }
    getCitationSources(): Array<any> {
        return [];
    }
    getMatchingIds(): Array<any> {
        return [];
    }
}
