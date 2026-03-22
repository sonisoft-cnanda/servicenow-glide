import { Context } from "../imports/Context";
import { Scriptable } from "../imports/Scriptable";

export class ScopedDCManager {
    constructor(cx?: Context, args?: any[], funObj?: Function, inNewExpr?: boolean) {  }
    static addClassification(cx?: Context, thisObj?: Scriptable, args?: any[], funObj?: Function): string {
        return "";
    }
    static classify(cx?: Context, thisObj?: Scriptable, args?: any[], funObj?: Function): string {
        return "";
    }
    static clearClassification(cx?: Context, thisObj?: Scriptable, args?: any[], funObj?: Function): string {
        return "";
    }
    static getAllDataClasses(cx?: Context, thisObj?: Scriptable, args?: any[], funObj?: Function): string {
        return "";
    }
    static getClassification(cx?: Context, thisObj?: Scriptable, args?: any[], funObj?: Function): string {
        return "";
    }
}
