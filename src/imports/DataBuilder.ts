import { GlideDateTime } from './GlideDateTime';
import { Context } from './Context';
import { Function } from './Function';

export class DataBuilder {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {}
    add(start?: GlideDateTime, value?: any): DataBuilder {
        return new DataBuilder();
    }
}
