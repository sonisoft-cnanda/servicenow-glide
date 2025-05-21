import { Context } from '../imports/Context';
import { Function } from '../imports/Function';
import { GlideDateTime } from '../imports/GlideDateTime';
export declare class Data {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean);
    static fromModelString(model?: string): Data;
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
    static validateModelParams(obj1?: any): Array<any>;
}
