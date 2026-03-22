import { GlideRecord } from "../types/GlideRecord";

export class PlaybookExperience {
    static canAddOptionalActivity(playbookContext?: GlideRecord, laneID?: string): boolean {
        return false;
    }
    static canCancelPlaybook(playbookContext?: GlideRecord): boolean {
        return false;
    }
    static canRestartPlaybook(playbookContext?: GlideRecord): boolean {
        return false;
    }
    static canRestartStage(playbookContext?: GlideRecord, laneID?: string): boolean {
        return false;
    }
    static cancelPlaybook(playbookContext?: GlideRecord, cancellationReason?: string, playbookExperienceId?: string, force?: boolean): Record<any, any> {
        return {} as any;
    }
    static cancelPlaybooksByParentRecord(parentRecord?: GlideRecord, cancellationReason?: string, scopedName?: string, playbookExperienceId?: string): Record<any, any> {
        return {} as any;
    }
    static getPlaybooksForParentRecord(parentRecord?: GlideRecord): Array<any> {
        return [];
    }
    static launchPlaybook(processDefinitionId?: string, parentRecord?: GlideRecord, playbookInputs?: Record<any, any>): string {
        return "";
    }
    static parentRecordContainsPlaybook(parentRecord?: GlideRecord, scopedName?: string): boolean {
        return false;
    }
    static restartPlaybook(playbookContext?: GlideRecord, laneContextId?: string, activityContextId?: string, playbookExperienceId?: string): Record<any, any> {
        return {} as any;
    }
    static serializePlaybookContext(playbookContextRecord?: GlideRecord): boolean {
        return false;
    }
    static triggerPlaybook(scopedName?: string, parentRecord?: GlideRecord): string {
        return "";
    }
}
