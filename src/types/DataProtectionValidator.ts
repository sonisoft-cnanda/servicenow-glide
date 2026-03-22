import { Context } from "../imports/Context";
import { Scriptable } from "../imports/Scriptable";

export class DataProtectionValidator {
    constructor() {  }
    getEncryptedColumnsInPolicy(policyId: string): string {
        return "";
    }
    static isDictionarySupportedByAnonymization(table: string, columnName: string): boolean {
        return false;
    }
    isPatternAnonymizationSupported(): boolean {
        return false;
    }
    isRTAnonymizationSupported(): boolean {
        return false;
    }
    preValidatePostClonePolicy(policyId: string, order: number): any[] {
        return [];
    }
    setupForJournalAnonymization(policyId: string): void {
        
    }
    validateJob(jobId: string): string {
        return "";
    }
    validateParameterValues(techniqueParams: string, value: string): string {
        return "";
    }
    static validatePolicy(cx: Context, thisObj: Scriptable, args: any[], funObj: Function): any {
        return null as any;
    }
}
