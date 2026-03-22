import { GlideRecord } from "./GlideRecord";

export class CertificationProcessing {
    constructor() {  }
    createFollowOnTask(auditId?: string, ciId?: string, assignedTo?: string, assignmentGroup?: string, shortDescr?: string): string {
        return "";
    }
    getFilterRecords(filterId?: string): GlideRecord {
        return null as any;
    }
    logAuditResultFail(auditId?: string, auditedRecordId?: string, followOnTask?: string, columnDisplayName?: string, operatorLabel?: string, desiredValue?: string, discrepancyValue?: string, isCI?: boolean, domainToUse?: string): void {
        
    }
    logAuditResultPass(auditId?: string, auditedRecordId?: string, isCI?: boolean, domainToUse?: string): void {
        
    }
    previewAudit(auditId?: string, filterId?: string, templateId?: string): string {
        return "";
    }
    runAudit(auditId?: string, filterId?: string, templateId?: string): boolean {
        return false;
    }
    runControlTest(taskId?: string, filterId?: string, templateId?: string, fields?: string, retrieveConfiguration?: string): boolean {
        return false;
    }
    toString(): string {
        return "";
    }
    updateLastRunDate(auditId?: string): void {
        
    }
}
