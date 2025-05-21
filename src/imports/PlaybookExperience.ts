import { GlideRecord } from './GlideRecord';

export class PlaybookExperience {
    cancelPlaybook(playbookContext?: GlideRecord, cancellationReason?: string, playbookExperienceId?: string, force?: boolean): Record<any, any> {
        return {};
    }
    cancelPlaybooksByParentRecord(parentRecord?: GlideRecord, cancellationReason?: string, scopedName?: string, playbookExperienceId?: string): Record<any, any> {
        return {};
    }
    getPlaybooksForParentRecord(parentRecord?: GlideRecord): Array<any> {
        return new Array();
    }
    parentRecordContainsPlaybook(parentRecord?: GlideRecord, scopedName?: string): boolean {
        return false;
    }
    triggerPlaybook(scopedName?: string, parentRecord?: GlideRecord): string {
        return "";
    }
}
