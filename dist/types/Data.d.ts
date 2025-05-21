import { Context } from '../imports/Context.js';
import { Function } from '../imports/Function.js';
import { GlideDateTime } from '../imports/GlideDateTime.js';
export declare class Data {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean);
    fromModelString(model?: string): Data;
    getEnd(): GlideDateTime;
    getLabel(): string;
    getMetricName(): string;
    getPeriod(): number;
    getStart(): GlideDateTime;
    getSubject(): string;
    getTableName(): string;
    getValues(): number[];
    size(): number;
    toModelString(): string;
    validateModelParams(obj1?: any): Array<any>;
}
//# sourceMappingURL=Data.d.ts.map