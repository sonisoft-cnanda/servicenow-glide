import { Context } from "../imports/Context";
import { Function } from "../imports/Function";
import { GlideDateTime } from "../types/GlideDateTime";

export class Data {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    static fromModelString(model?: string): Data {
        return null as any;
    }
    getEnd(): GlideDateTime {
        return null as any;
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
        return null as any;
    }
    getSubject(): string {
        return "";
    }
    getTableName(): string {
        return "";
    }
    getValues(): number[] {
        return [];
    }
    size(): number {
        return 0;
    }
    toModelString(): string {
        return "";
    }
    static validateModelParams(obj1?: any): Array<any> {
        return [];
    }
}
