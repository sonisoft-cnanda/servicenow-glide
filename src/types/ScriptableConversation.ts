import { Context } from '../imports/Context';
import { Function } from '../imports/Function';
import { IScriptableUser } from '../imports/IScriptableUser';

export class ScriptableConversation {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {}
    addSubscriber(userSysID?: string, silent?: boolean): void {
        
    }
    create(options?: Record<any, any>): ScriptableConversation {
        return new ScriptableConversation();
    }
    get(documentSysID?: string, documentTable?: any): ScriptableConversation {
        return new ScriptableConversation();
    }
    getAgentName(agentSysUserID?: string): string {
        return "";
    }
    getDeviceType(): string {
        return "";
    }
    getLiveGroupProfileIdByInteractionMetadata(table?: string, id?: string): string {
        return "";
    }
    getName(): string {
        return "";
    }
    getRecordTableName(): string {
        return "";
    }
    getSubscribers(): IScriptableUser[] {
        return new Array();
    }
    getSysID(): string {
        return "";
    }
    getVersion(conversationSysId?: string): string {
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
