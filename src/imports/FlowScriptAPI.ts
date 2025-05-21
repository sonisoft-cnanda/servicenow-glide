import { Context } from './Context';
import { Function } from './Function';

export class FlowScriptAPI {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {}
    getContextID(): string {
        return "";
    }
}
