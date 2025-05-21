import { Context } from '../imports/Context';
import { Function } from '../imports/Function';
import { GlideDateTime } from '../imports/GlideDateTime';

export class Data {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {}
    fromModelString(model?: string): Data {
        return new Data();
    }
    getEnd(): GlideDateTime {
        return new GlideDateTime();
    }
    getLabel(): string {
        return "";
    }
    getMetricName(): string {
        return "";
    }
    getPeriod(): number {
        return 0;
    }
    getStart(): GlideDateTime {
        return new GlideDateTime();
    }
    getSubject(): string {
        return "";
    }
    getTableName(): string {
        return "";
    }
    getValues(): number[] {
        return new Array();
    }
    size(): number {
        return 0;
    }
    toModelString(): string {
        return "";
    }
    validateModelParams(obj1?: any): Array<any> {
        return new Array();
    }
}
