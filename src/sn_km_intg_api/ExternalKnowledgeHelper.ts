import { Context } from "../imports/Context";
import { Function } from "../imports/Function";
import { GlideRecord } from "../types/GlideRecord";

export class ExternalKnowledgeHelper {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    static getArticleFields(): string[] {
        return [];
    }
    static match(pattern?: string, matchText?: string): boolean {
        return false;
    }
    static moveAttachmentsToArticle(attachmentIds?: string[], articleSysId?: string, deleteExisting?: boolean): void {
        
    }
    static runHandler(handlerRec?: GlideRecord, articleSysId?: string, taskObj?: any): void {
        
    }
}
