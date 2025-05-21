export declare class PerformanceAPI {
    canCompare(performanceRunId1?: string, performanceRunId2?: string): boolean;
    doesSuiteHavePerformanceComparableStep(suiteId?: string): boolean;
    doesTestHavePerformanceComparableStep(testId?: string): boolean;
    generateComparison(performanceID?: string): string;
    getComparablePerformanceRunStatuses(): string;
    isCloudRunnerActive(): boolean;
    isCloudRunnerActiveAndSupportsPerformance(): boolean;
    isComparable(sysId?: string): boolean;
}
//# sourceMappingURL=PerformanceAPI.d.ts.map