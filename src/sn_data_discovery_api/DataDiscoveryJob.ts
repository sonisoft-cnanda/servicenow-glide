import { GlideRecord } from "../types/GlideRecord";

export class DataDiscoveryJob {
    constructor() {  }
    cancel(current: GlideRecord, cancelAll: boolean): boolean {
        return false;
    }
    cancelNextRecurrenceForJob(jobId: string): boolean {
        return false;
    }
    deleteFutureScheduledJobs(): boolean {
        return false;
    }
    deleteFutureScheduledJobsForId(jobId: string): boolean {
        return false;
    }
    deleteJob(current: GlideRecord): void {
        
    }
    extractTextFromAttachment(attachmentId: string): string {
        return "";
    }
    getNextScheduledTime(): GlideRecord {
        return null as any;
    }
    isAttachmentScanServiceAvailable(): boolean {
        return false;
    }
    pause(current: GlideRecord): boolean {
        return false;
    }
    recurringJobExists(): boolean {
        return false;
    }
    recurringJobExistsForId(jobId: string): string {
        return "";
    }
    resume(current: GlideRecord): boolean {
        return false;
    }
    start(current: GlideRecord): boolean {
        return false;
    }
    updateSysTriggerContextAfterConsolidation(deltaRecordSysId: string, consolidatedRecordSysId: string): boolean {
        return false;
    }
}
