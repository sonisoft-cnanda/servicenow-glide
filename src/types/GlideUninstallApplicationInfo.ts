import { Context } from "../imports/Context";
import { Function } from "../imports/Function";

export class GlideUninstallApplicationInfo {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    getActive(): boolean {
        return false;
    }
    getApplicationName(): string {
        return "";
    }
    getError(): string {
        return "";
    }
    getExtensionWarningCount(): number {
        return 0;
    }
    getFieldWarningCount(): number {
        return 0;
    }
    getNumFieldsOnOtherTables(): number {
        return 0;
    }
    getNumOtherTablesThatHaveFields(): number {
        return 0;
    }
    getNumRowsOfData(): number {
        return 0;
    }
    getNumTables(): number {
        return 0;
    }
    getNumTablesWithoutScopePrefix(): number {
        return 0;
    }
    getRcCount(): number {
        return 0;
    }
    getRcSize(): number {
        return 0;
    }
    getRcTableLabel(): string {
        return "";
    }
    getRcTableName(): string {
        return "";
    }
    getRcTableUrl(): string {
        return "";
    }
    getWAppClass(): string {
        return "";
    }
    getWAppId(): string {
        return "";
    }
    getWAppName(): string {
        return "";
    }
    getWAppScope(): string {
        return "";
    }
    getWAppUrl(): string {
        return "";
    }
    getWObjectClass(): string {
        return "";
    }
    getWObjectLabel(): string {
        return "";
    }
    getWObjectName(): string {
        return "";
    }
    getWObjectSysId(): string {
        return "";
    }
    getWObjectUrl(): string {
        return "";
    }
    getWReason(): string {
        return "";
    }
    getWTableId(): string {
        return "";
    }
    getWTableLabel(): string {
        return "";
    }
    getWTableName(): string {
        return "";
    }
    getWTableUrl(): string {
        return "";
    }
    static isAppBootstrapped(appName?: string): boolean {
        return false;
    }
    rcNext(): boolean {
        return false;
    }
    wNext(): boolean {
        return false;
    }
}
