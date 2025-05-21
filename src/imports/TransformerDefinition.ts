import { Context } from './Context';
import { Function } from './Function';

export class TransformerDefinition {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {}
    validate(): boolean {
        return false;
    }
}
