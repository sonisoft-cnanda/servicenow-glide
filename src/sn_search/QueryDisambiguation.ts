import { Context } from '../imports/Context'
import { Function } from '../imports/Function'

export class QueryDisambiguation {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    getClarifyingQuestion(): string {
        return "";
    }
    isQueryAmbiguous(): boolean {
        return false;
    }
}
