import { GlideRecord } from "../types/GlideRecord";

export class ScanInstance {
    constructor() {  }
    cancelScan(progressId?: string, isClusterMessage?: boolean): string {
        return "";
    }
    dequeueAndStartScan(): void {
        
    }
    triggerAppScan(scopeId?: string): string {
        return "";
    }
    triggerFullScan(): string {
        return "";
    }
    triggerPointScan(targetTable?: string, targetId?: string): string {
        return "";
    }
    triggerReactiveScan(event?: GlideRecord): void {
        
    }
    triggerScanFromCombo(comboId?: string): string {
        return "";
    }
    triggerScorecardScan(): string {
        return "";
    }
    triggerSuiteScan(suiteId?: string): string {
        return "";
    }
    triggerTestScan(checkId?: string, checkTable?: string): string {
        return "";
    }
    triggerUpdateSetBatchScan(updateSetId?: string): string {
        return "";
    }
    triggerUpdateSetScan(updateSetId?: string): string {
        return "";
    }
}
