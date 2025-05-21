import { Context } from '../imports/Context';
import { Function } from '../imports/Function';
export declare class TransformerDefinition {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean);
    validate(): boolean;
    recordPath: string;
    basePath: string;
    name: string;
    id: string;
}
