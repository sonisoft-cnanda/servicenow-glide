import { Context } from '../imports/Context'
import { Function } from '../imports/Function'

export class OneExtendDataRemodel {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    static addDefinitionConfig(): boolean {
        return false;
    }
    static addDefinitionFilterProperties(): boolean {
        return false;
    }
    static markDefaultDefinitionConfig(): boolean {
        return false;
    }
    static repairAttributeMapping(): boolean {
        return false;
    }
}
