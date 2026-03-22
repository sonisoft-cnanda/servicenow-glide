import { GlideRecord } from "../types/GlideRecord";

export class ScanUtil {
    constructor() {  }
    getLatestScorecardResult(): string {
        return "";
    }
    getOrCreateComboFromSuiteAndTargets(suiteId?: string, targetTable?: string, targetIds?: string[]): string {
        return "";
    }
    isScannable(current?: GlideRecord): boolean {
        return false;
    }
    isTableInExclusionList(tableName?: string): boolean {
        return false;
    }
    lastFiveHealthCenterResults(): string[] {
        return [];
    }
}
