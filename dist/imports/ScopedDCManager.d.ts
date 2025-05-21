import { Context } from './Context.js';
import { Scriptable } from './Scriptable.js';
import { Function } from './Function.js';
export declare class ScopedDCManager {
    constructor(cx?: Context, args?: any[], funObj?: Function, inNewExpr?: boolean);
    addClassification(cx?: Context, thisObj?: Scriptable, args?: any[], funObj?: Function): string;
    classify(cx?: Context, thisObj?: Scriptable, args?: any[], funObj?: Function): string;
    clearClassification(cx?: Context, thisObj?: Scriptable, args?: any[], funObj?: Function): string;
    getAllDataClasses(cx?: Context, thisObj?: Scriptable, args?: any[], funObj?: Function): string;
    getClassification(cx?: Context, thisObj?: Scriptable, args?: any[], funObj?: Function): string;
}
//# sourceMappingURL=ScopedDCManager.d.ts.map