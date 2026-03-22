import { Context } from '../imports/Context'
import { Function } from '../imports/Function'

export class ResourceInfo {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    getDescription(): string {
        return "";
    }
    getHTTPMethod(): string {
        return "";
    }
    getRoute(): string {
        return "";
    }
}
