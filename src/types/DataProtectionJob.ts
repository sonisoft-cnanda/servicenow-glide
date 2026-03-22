import { GlideRecord } from "./GlideRecord";

export class DataProtectionJob {
    constructor() {  }
    applyPostClonePolicies(): boolean {
        return false;
    }
    canRollback(current: GlideRecord): boolean {
        return false;
    }
    cancel(current: GlideRecord, cancelAll: boolean): boolean {
        return false;
    }
    deleteFutureScheduledJobs(current: GlideRecord): boolean {
        return false;
    }
    deleteJob(current: GlideRecord): void {
        
    }
    getPossibleFieldsAndWarnings(dataClassId: string, allInDataClass: boolean): Array<Array<string>> {
        return [];
    }
    getScheduledRecurringJob(): string {
        return "";
    }
    isClassifiedFieldInUse(fieldId: string): boolean {
        return false;
    }
    isDataClassInUse(dataClass: string): boolean {
        return false;
    }
    isPrivacyConfigInUse(privacyConfig: string): boolean {
        return false;
    }
    isSupportedFieldType(fieldType: string): boolean {
        return false;
    }
    isTechniqueInUse(dpTechnique: string): boolean {
        return false;
    }
    isTechniqueParamInUse(techniqueParam: string): boolean {
        return false;
    }
    isTechniqueParamValueInUse(techniqueParamValue: string): boolean {
        return false;
    }
    isTechniqueWithParamsInUse(parameterizedTechnique: string): boolean {
        return false;
    }
    otherConflictingJobsRunning(current: GlideRecord): boolean {
        return false;
    }
    pause(current: GlideRecord): boolean {
        return false;
    }
    restart(current: GlideRecord): boolean {
        return false;
    }
    resume(current: GlideRecord): boolean {
        return false;
    }
    rollback(current: GlideRecord): boolean {
        return false;
    }
    setRollbackExpiryDateTimeIfValid(jobRecord: GlideRecord): void {
        
    }
    start(current: GlideRecord): boolean {
        return false;
    }
    triggerExistsForRecurringJob(jobId: string): boolean {
        return false;
    }
    update(current: GlideRecord): void {
        
    }
}
