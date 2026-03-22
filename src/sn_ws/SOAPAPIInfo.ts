import { Context } from '../imports/Context'
import { Function } from '../imports/Function'

export class SOAPAPIInfo {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    getAPIName(): string {
        return "";
    }
    getAPIScopedName(): string {
        return "";
    }
    getScopeSysId(): string {
        return "";
    }
    getSysId(): string {
        return "";
    }
}
