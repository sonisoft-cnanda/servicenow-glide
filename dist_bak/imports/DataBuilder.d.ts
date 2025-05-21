import { Context } from '../imports/Context';
import { Function } from '../imports/Function';
import { GlideDateTime } from '../imports/GlideDateTime';
export declare class DataBuilder {
    add(start?: GlideDateTime, value?: any): DataBuilder;
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean);
}
