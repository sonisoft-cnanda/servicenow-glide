import { NativeArray } from '../imports/NativeArray';
import { NativeObject } from '../imports/NativeObject';

export class DuplicateTemplate {
    canAddTasksToTemplate(taskIds?: NativeArray, templateId?: string): NativeObject {
        return new NativeObject();
    }
    createTemplate(template?: NativeObject): string {
        return "";
    }
    getTemplate(templateId?: string): NativeObject {
        return new NativeObject();
    }
    preview(templateId?: string, taskId?: string): NativeObject {
        return new NativeObject();
    }
    publishTemplate(templateId?: string): boolean {
        return false;
    }
    remediateTask(templateId?: string, taskId?: string): string {
        return "";
    }
    remediateTaskRun(taskRunId?: string, triggerId?: string): void {
        
    }
    requestCancellation(templateRunId?: string): boolean {
        return false;
    }
    retireTemplate(templateId?: string): boolean {
        return false;
    }
    runScheduler(): void {
        
    }
    runTemplate(templateId?: string): string {
        return "";
    }
    unPublishTemplate(templateId?: string): boolean {
        return false;
    }
    updateTemplate(templateId?: string, template?: NativeObject): boolean {
        return false;
    }
}
