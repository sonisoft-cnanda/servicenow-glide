import { Context } from '../imports/Context';
import { Function } from '../imports/Function';

export class TransformerDefinition {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {}
    validate(): boolean {
        return false;
    }
}
