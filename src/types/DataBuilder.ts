import { GlideDateTime } from '../imports/GlideDateTime';
import { Context } from '../imports/Context';
import { Function } from '../imports/Function';

export class DataBuilder {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {}
    add(start?: GlideDateTime, value?: any): DataBuilder {
        return new DataBuilder();
    }
}
