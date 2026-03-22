import { Context } from '../imports/Context'
import { Function } from '../imports/Function'

export class ColumnInfo {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    getDisplayValue(): string {
        return "";
    }
    getFieldName(): string {
        return "";
    }
    getLabel(): string {
        return "";
    }
    getValue(): string {
        return "";
    }
}
