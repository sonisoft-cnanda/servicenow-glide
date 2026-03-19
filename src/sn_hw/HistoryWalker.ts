import { Context } from '../imports/Context';
import { Function } from '../imports/Function';
import { ScriptableObject } from '../imports/ScriptableObject';
import { Scriptable } from '../imports/Scriptable';

export class HistoryWalker {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {}
    getUpdateNumber(): number {
        return 0;
    }
    getWalkedRecord(): ScriptableObject {
        return new ScriptableObject();
    }
    getWalkedRecordCopy(): ScriptableObject {
        return new ScriptableObject();
    }
    isFieldLevelSecurity(): boolean {
        return false;
    }
    isRecordLevelSecurity(): boolean {
        return false;
    }
    isWithChanges(): boolean {
        return false;
    }
    isWithJournalFields(): boolean {
        return false;
    }
    isWithSysFields(): boolean {
        return false;
    }
    isWithVariables(): boolean {
        return false;
    }
    printTimings(): void {
        
    }
    setFieldLevelSecurity(cx?: Context, thisObj?: Scriptable, args?: any[], funObj?: Function): void {
        
    }
    setRecordLevelSecurity(cx?: Context, thisObj?: Scriptable, args?: any[], funObj?: Function): void {
        
    }
    setWithChanges(cx?: Context, thisObj?: Scriptable, args?: any[], funObj?: Function): void {
        
    }
    setWithJournalFields(cx?: Context, thisObj?: Scriptable, args?: any[], funObj?: Function): void {
        
    }
    setWithSysFields(cx?: Context, thisObj?: Scriptable, args?: any[], funObj?: Function): void {
        
    }
    setWithVariables(cx?: Context, thisObj?: Scriptable, args?: any[], funObj?: Function): void {
        
    }
    walkBackward(): boolean {
        return false;
    }
    walkForward(): boolean {
        return false;
    }
    walkTo(cx?: Context, thisObj?: Scriptable, args?: any[], funObj?: Function): boolean {
        return false;
    }
}
