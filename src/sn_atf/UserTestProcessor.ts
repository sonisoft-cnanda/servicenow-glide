import { GlideRecord } from "../types/GlideRecord";

export class UserTestProcessor {
    constructor() {  }
    copyTest(testId?: string): string {
        return "";
    }
    copyTestSuite(suiteId?: string): string {
        return "";
    }
    generateStepJSON(stepId?: string, testResultId?: string, parameterSetOrder?: number, callableStepResultId?: string): string {
        return "";
    }
    getDescription(testStepGR?: GlideRecord): string {
        return "";
    }
    getFieldName(tableName?: string, fieldName?: string): string {
        return "";
    }
    getFieldValue(tableName?: string, fieldName?: string, fieldValue?: string): string {
        return "";
    }
    getFirstScheduledOrRunningTestResultSysIdForTest(testSysId?: string): string {
        return "";
    }
}
