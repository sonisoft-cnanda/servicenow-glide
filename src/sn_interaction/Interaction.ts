import { GlideRecord } from "../types/GlideRecord";
import { GlideDateTime } from "../types/GlideDateTime";
import { RelatedRecord } from "./RelatedRecord";

export class Interaction {
    opened_at: GlideDateTime = null as any;
    opened_for: string = "";
    location: string = "";
    state: string = "";
    sys_id: string = "";
    number: string = "";
    parent_interaction: string = "";
    sys_created_on: GlideDateTime = null as any;
    constructor() {  }
    addRelatedRecord(documentTable?: string, documentId?: string): RelatedRecord {
        return null as any;
    }
    assigned_to(assignedTo?: string): void {
        
    }
    channel_metadata(channelMetadata?: any): void {
        
    }
    context(context?: any): void {
        
    }
    static create(options?: Record<any, any>): Interaction {
        return null as any;
    }
    getGlideRecord(): GlideRecord {
        return null as any;
    }
    static getInteraction(interactionRecord?: GlideRecord): Interaction {
        return null as any;
    }
    getRelatedRecords(): Array<any> {
        return [];
    }
    static publishOngoingItem(userId?: string, workItemSysId?: string): void {
        
    }
    removeRelatedRecord(documentTable?: string, documentId?: string): void {
        
    }
    scheduleWrapupTimeout(timeoutDuration?: number): void {
        
    }
}
