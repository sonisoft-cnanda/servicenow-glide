import { Context } from '../imports/Context'
import { Function } from '../imports/Function'

export class CatalogTemplate {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    canUse(): boolean {
        return false;
    }
    duplicate(): string {
        return "";
    }
    getProducer(): string {
        return "";
    }
}
