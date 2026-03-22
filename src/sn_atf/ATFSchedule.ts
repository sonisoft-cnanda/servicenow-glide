export class ATFSchedule {
    static doesSuiteHaveUIBatch(suiteSysId?: string): boolean {
        return false;
    }
    static doesTestHaveUIBatch(testSysId?: string): boolean {
        return false;
    }
    static getNewestFinishedTrackerSysIdForSchedule(scheduleSysId?: string): string {
        return "";
    }
    static getNewestRunningTrackerSysIdForSchedule(scheduleSysId?: string): string {
        return "";
    }
    static getNumActiveTestRunnersForSchedule(): number {
        return 0;
    }
    static isScheduleEnabled(): boolean {
        return false;
    }
}
