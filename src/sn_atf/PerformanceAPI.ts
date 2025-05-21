export class PerformanceAPI {
    canCompare(performanceRunId1?: string, performanceRunId2?: string): boolean {
        return false;
    }
    doesSuiteHavePerformanceComparableStep(suiteId?: string): boolean {
        return false;
    }
    doesTestHavePerformanceComparableStep(testId?: string): boolean {
        return false;
    }
    generateComparison(performanceID?: string): string {
        return "";
    }
    getComparablePerformanceRunStatuses(): string {
        return "";
    }
    isCloudRunnerActive(): boolean {
        return false;
    }
    isCloudRunnerActiveAndSupportsPerformance(): boolean {
        return false;
    }
    isComparable(sysId?: string): boolean {
        return false;
    }
}
