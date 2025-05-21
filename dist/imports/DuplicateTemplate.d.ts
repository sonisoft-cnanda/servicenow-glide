import { NativeArray } from './NativeArray.js';
import { NativeObject } from './NativeObject.js';
export declare class DuplicateTemplate {
    canAddTasksToTemplate(taskIds?: NativeArray, templateId?: string): NativeObject;
    createTemplate(template?: NativeObject): string;
    getTemplate(templateId?: string): NativeObject;
    preview(templateId?: string, taskId?: string): NativeObject;
    publishTemplate(templateId?: string): boolean;
    remediateTask(templateId?: string, taskId?: string): string;
    remediateTaskRun(taskRunId?: string, triggerId?: string): void;
    requestCancellation(templateRunId?: string): boolean;
    retireTemplate(templateId?: string): boolean;
    runScheduler(): void;
    runTemplate(templateId?: string): string;
    unPublishTemplate(templateId?: string): boolean;
    updateTemplate(templateId?: string, template?: NativeObject): boolean;
}
//# sourceMappingURL=DuplicateTemplate.d.ts.map