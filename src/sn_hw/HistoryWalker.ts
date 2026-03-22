import { Context } from "../imports/Context";
import { Scriptable } from "../imports/Scriptable";
import { ScriptableObject } from "../imports/ScriptableObject";

export class HistoryWalker {
    constructor(cx: Context, args: any[], ctorObj: Function, inNewExpr: boolean) {  }
    getCheckpoint(): string {
        return "";
    }
    getUpdateNumber(): number {
        return 0;
    }
    getWalkedRecord(): ScriptableObject {
        return null as any;
    }
    getWalkedRecordCopy(): ScriptableObject {
        return null as any;
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
    static setFieldLevelSecurity(cx: Context, thisObj: Scriptable, args: any[], funObj: Function): void {
        
    }
    static setRecordLevelSecurity(cx: Context, thisObj: Scriptable, args: any[], funObj: Function): void {
        
    }
    static setWithChanges(cx: Context, thisObj: Scriptable, args: any[], funObj: Function): void {
        
    }
    static setWithJournalFields(cx: Context, thisObj: Scriptable, args: any[], funObj: Function): void {
        
    }
    static setWithSysFields(cx: Context, thisObj: Scriptable, args: any[], funObj: Function): void {
        
    }
    static setWithVariables(cx: Context, thisObj: Scriptable, args: any[], funObj: Function): void {
        
    }
    walkBackward(): boolean {
        return false;
    }
    walkForward(): boolean {
        return false;
    }
    static walkTo(cx: Context, thisObj: Scriptable, args: any[], funObj: Function): boolean {
        return false;
    }
}
