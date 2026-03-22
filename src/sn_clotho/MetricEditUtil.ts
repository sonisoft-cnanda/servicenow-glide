import { ClothoValidationInfo } from "./ClothoValidationInfo";

export class MetricEditUtil {
    constructor() {  }
    checkPolicyHasMetrics(retentionPolicyId?: string): boolean {
        return false;
    }
    checkPolicyHasSchedule(retentionPolicyId?: string): boolean {
        return false;
    }
    conflictMetricExists(tableName?: string, metricName?: string, retentionPolicyId?: string, isCurrentAutoPromote?: boolean): boolean {
        return false;
    }
    getPolicyScheduleValidation(retentionPolicyId?: string, previousSchedule?: string, currentSchedule?: string, action?: string): ClothoValidationInfo {
        return null as any;
    }
    getScheduleValidation(duration?: string, period?: string, action?: string): ClothoValidationInfo {
        return null as any;
    }
    getValidMetricName(tableName?: string, candidate?: string): string {
        return "";
    }
}
