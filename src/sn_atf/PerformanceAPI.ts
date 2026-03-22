export class PerformanceAPI {
    static canCompare(performanceRunId1?: string, performanceRunId2?: string): boolean {
        return false;
    }
    static doesSuiteHavePerformanceComparableStep(suiteId?: string): boolean {
        return false;
    }
    static doesTestHavePerformanceComparableStep(testId?: string): boolean {
        return false;
    }
    static generateComparison(performanceID?: string): string {
        return "";
    }
    static getComparablePerformanceRunStatuses(): string {
        return "";
    }
    static isCloudRunnerActive(): boolean {
        return false;
    }
    static isCloudRunnerActiveAndSupportsPerformance(): boolean {
        return false;
    }
    static isComparable(sysId?: string): boolean {
        return false;
    }
    static pauseForAtfPerformance(): boolean {
        return false;
    }
    static resumeForAtfPerformance(): void {
        
    }
}
