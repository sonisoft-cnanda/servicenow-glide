import { Interaction } from "./Interaction";
import { GlideRecord } from "../types/GlideRecord";

export class RelatedRecord {
    document_table: string = "";
    document_id: string = "";
    interaction: Interaction = null as any;
    constructor() {  }
    static create(interactionId?: string, documentTable?: string, documentId?: string): RelatedRecord {
        return null as any;
    }
    static createOrUpdate(interactionId?: string, documentTable?: string, documentId?: string, operation?: string): RelatedRecord {
        return null as any;
    }
    static deleteRelationship(interactionId?: string, documentTable?: string, documentId?: string): void {
        
    }
    getDocument(): GlideRecord {
        return null as any;
    }
    static getRelatedInteractions(tableName?: string, sysId?: string): Array<any> {
        return [];
    }
    static getRelatedRecords(interactionId?: string): Array<any> {
        return [];
    }
    static isAutocreateAllowed(interactionId?: string, documentTable?: string, documentId?: string, operation?: string): boolean {
        return false;
    }
}
