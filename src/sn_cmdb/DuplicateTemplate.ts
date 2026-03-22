import { NativeObject } from '../imports/NativeObject'
import { NativeArray } from '../imports/NativeArray'

export class DuplicateTemplate {
    static canAddTasksToTemplate(taskIds?: NativeArray, templateId?: string): NativeObject {
        return null as any;
    }
    static createTemplate(template?: NativeObject): string {
        return "";
    }
    static getTemplate(templateId?: string): NativeObject {
        return null as any;
    }
    static preview(templateId?: string, taskId?: string): NativeObject {
        return null as any;
    }
    static publishTemplate(templateId?: string): boolean {
        return false;
    }
    static remediateTask(templateId?: string, taskId?: string): string {
        return "";
    }
    static remediateTaskRun(taskRunId?: string, triggerId?: string): void {
        
    }
    static requestCancellation(templateRunId?: string): boolean {
        return false;
    }
    static retireTemplate(templateId?: string): boolean {
        return false;
    }
    static runScheduler(): void {
        
    }
    static runTemplate(templateId?: string): string {
        return "";
    }
    static unPublishTemplate(templateId?: string): boolean {
        return false;
    }
    static updateTemplate(templateId?: string, template?: NativeObject): boolean {
        return false;
    }
}
