import { GlideRecord } from "../types/GlideRecord";

export class AssessmentCreation {
    constructor() {  }
    addRecentAssessor(userId?: string): void {
        
    }
    checkAssessmentAllowed(type?: string, instance?: string, userId?: string): string {
        return "";
    }
    conditionTrigger(recordToMatch?: GlideRecord, conditionId?: string): void {
        
    }
    createAssessableRecord(type?: string, recordId?: string): void {
        
    }
    createAssessableRecords(object?: any): void {
        
    }
    createAssessments(type?: string, sourceIds?: string, userIds?: string, urlEntry?: boolean, existingGroup?: string, isPreview?: boolean, conditionId?: string, recordId?: string, skipAssessments?: boolean, triggerTable?: string): string {
        return "";
    }
    createCategoryUserIfNotPresent(metricType?: GlideRecord, userId?: string): void {
        
    }
    createOrGetAssessment(type?: string, sourceId?: string, userId?: string): string {
        return "";
    }
    createOrGetAssessmentWithTrigger(type?: string, sourceId?: string, userId?: string, triggerTable?: string, triggerId?: string): string {
        return "";
    }
    createPreview(metricTypeId?: string, userId?: string): string {
        return "";
    }
    deleteAssessableRecord(type?: string, recordId?: string): void {
        
    }
    getInstance(type?: string, userId?: string): string {
        return "";
    }
    removePreview(instanceId?: string): void {
        
    }
    validateMultipleStringFields(stringQAnswerMap?: Record<any, any>): string {
        return "";
    }
}
