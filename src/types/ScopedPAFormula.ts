import { Context } from '../imports/Context'
import { Function } from '../imports/Function'
import { Scriptable } from '../imports/Scriptable'

export class ScopedPAFormula {
    constructor(cx?: Context, args?: any[], funObj?: Function, inNewExpr?: boolean) {  }
    static contains(cx?: Context, thisObj?: Scriptable, args?: any[], funObj?: Function): boolean {
        return false;
    }
    static evaluateFormula(cx?: Context, thisObj?: Scriptable, args?: any[], funObj?: Function): any {
        return null as any;
    }
    static getDisplay(cx?: Context, thisObj?: Scriptable, args?: any[], funObj?: Function): string {
        return "";
    }
    static getError(cx?: Context, thisObj?: Scriptable, args?: any[], funObj?: Function): string {
        return "";
    }
    static getFormula(cx?: Context, thisObj?: Scriptable, args?: any[], funObj?: Function): string {
        return "";
    }
    static getIndicators(formula?: string): string {
        return "";
    }
    static isValid(cx?: Context, thisObj?: Scriptable, args?: any[], funObj?: Function): boolean {
        return false;
    }
}
