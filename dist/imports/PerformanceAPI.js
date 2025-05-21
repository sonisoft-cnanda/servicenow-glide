"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PerformanceAPI = void 0;
class PerformanceAPI {
    canCompare(performanceRunId1, performanceRunId2) {
        return false;
    }
    doesSuiteHavePerformanceComparableStep(suiteId) {
        return false;
    }
    doesTestHavePerformanceComparableStep(testId) {
        return false;
    }
    generateComparison(performanceID) {
        return "";
    }
    getComparablePerformanceRunStatuses() {
        return "";
    }
    isCloudRunnerActive() {
        return false;
    }
    isCloudRunnerActiveAndSupportsPerformance() {
        return false;
    }
    isComparable(sysId) {
        return false;
    }
}
exports.PerformanceAPI = PerformanceAPI;
//# sourceMappingURL=PerformanceAPI.js.map