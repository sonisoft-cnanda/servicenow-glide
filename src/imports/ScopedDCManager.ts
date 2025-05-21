import { Context } from './Context';
import { Scriptable } from './Scriptable';
import { Function } from './Function';

export class ScopedDCManager {
    constructor(cx?: Context, args?: any[], funObj?: Function, inNewExpr?: boolean) {}
    addClassification(cx?: Context, thisObj?: Scriptable, args?: any[], funObj?: Function): string {
        return "";
    }
    classify(cx?: Context, thisObj?: Scriptable, args?: any[], funObj?: Function): string {
        return "";
    }
    clearClassification(cx?: Context, thisObj?: Scriptable, args?: any[], funObj?: Function): string {
        return "";
    }
    getAllDataClasses(cx?: Context, thisObj?: Scriptable, args?: any[], funObj?: Function): string {
        return "";
    }
    getClassification(cx?: Context, thisObj?: Scriptable, args?: any[], funObj?: Function): string {
        return "";
    }
}
