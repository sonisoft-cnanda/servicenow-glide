import { Context } from '../imports/Context'
import { Function } from '../imports/Function'

export class PassageInfo {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    getFieldName(): string {
        return "";
    }
    getFieldValues(): Array<any> {
        return [];
    }
}
