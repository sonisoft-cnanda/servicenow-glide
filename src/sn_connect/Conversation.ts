import { Context } from "../imports/Context";
import { Function } from "../imports/Function";
import { User } from "./User";

export class Conversation {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    addSubscriber(userSysID?: string, silent?: boolean): void {
        
    }
    static create(options?: Record<any, any>): Conversation {
        return null as any;
    }
    static get(documentSysID?: string, documentTable?: any): Conversation {
        return null as any;
    }
    static getAgentName(agentSysUserID?: string): string {
        return "";
    }
    getDeviceType(): string {
        return "";
    }
    static getLiveGroupProfileIdByInteractionMetadata(table?: string, id?: string): string {
        return "";
    }
    getName(): string {
        return "";
    }
    getRecordTableName(): string {
        return "";
    }
    getSubscribers(): User[] {
        return [];
    }
    getSysID(): string {
        return "";
    }
    static getVersion(conversationSysId?: string): string {
        return "";
    }
    removeSubscriber(userSysID?: string, silent?: boolean): void {
        
    }
    sendMessage(options?: any): void {
        
    }
    updateInteractionInternalTranscript(interactionId?: string): boolean {
        return false;
    }
}
