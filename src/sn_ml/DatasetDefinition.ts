import { Context } from '../imports/Context'
import { Function } from '../imports/Function'

export class DatasetDefinition {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    getEligibleFields(capability?: string): string {
        return "";
    }
    getProperties(): string {
        return "";
    }
}
