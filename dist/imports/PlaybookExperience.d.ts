import { GlideRecord } from './GlideRecord.js';
export declare class PlaybookExperience {
    cancelPlaybook(playbookContext?: GlideRecord, cancellationReason?: string, playbookExperienceId?: string, force?: boolean): Record<any, any>;
    cancelPlaybooksByParentRecord(parentRecord?: GlideRecord, cancellationReason?: string, scopedName?: string, playbookExperienceId?: string): Record<any, any>;
    getPlaybooksForParentRecord(parentRecord?: GlideRecord): Array<any>;
    parentRecordContainsPlaybook(parentRecord?: GlideRecord, scopedName?: string): boolean;
    triggerPlaybook(scopedName?: string, parentRecord?: GlideRecord): string;
}
//# sourceMappingURL=PlaybookExperience.d.ts.map