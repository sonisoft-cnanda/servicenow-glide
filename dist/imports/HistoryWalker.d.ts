import { Context } from './Context.js';
import { Function } from './Function.js';
import { ScriptableObject } from './ScriptableObject.js';
import { Scriptable } from './Scriptable.js';
export declare class HistoryWalker {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean);
    getUpdateNumber(): number;
    getWalkedRecord(): ScriptableObject;
    getWalkedRecordCopy(): ScriptableObject;
    isFieldLevelSecurity(): boolean;
    isRecordLevelSecurity(): boolean;
    isWithChanges(): boolean;
    isWithJournalFields(): boolean;
    isWithSysFields(): boolean;
    isWithVariables(): boolean;
    printTimings(): void;
    setFieldLevelSecurity(cx?: Context, thisObj?: Scriptable, args?: any[], funObj?: Function): void;
    setRecordLevelSecurity(cx?: Context, thisObj?: Scriptable, args?: any[], funObj?: Function): void;
    setWithChanges(cx?: Context, thisObj?: Scriptable, args?: any[], funObj?: Function): void;
    setWithJournalFields(cx?: Context, thisObj?: Scriptable, args?: any[], funObj?: Function): void;
    setWithSysFields(cx?: Context, thisObj?: Scriptable, args?: any[], funObj?: Function): void;
    setWithVariables(cx?: Context, thisObj?: Scriptable, args?: any[], funObj?: Function): void;
    walkBackward(): boolean;
    walkForward(): boolean;
    walkTo(cx?: Context, thisObj?: Scriptable, args?: any[], funObj?: Function): boolean;
}
//# sourceMappingURL=HistoryWalker.d.ts.map