import { Context } from '../imports/Context.js';
import { Function } from '../imports/Function.js';
import { IScriptableUser } from '../imports/IScriptableUser.js';
export declare class ScriptableConversation {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean);
    addSubscriber(userSysID?: string, silent?: boolean): void;
    create(options?: Record<any, any>): ScriptableConversation;
    get(documentSysID?: string, documentTable?: any): ScriptableConversation;
    getAgentName(agentSysUserID?: string): string;
    getDeviceType(): string;
    getLiveGroupProfileIdByInteractionMetadata(table?: string, id?: string): string;
    getName(): string;
    getRecordTableName(): string;
    getSubscribers(): IScriptableUser[];
    getSysID(): string;
    getVersion(conversationSysId?: string): string;
    removeSubscriber(userSysID?: string, silent?: boolean): void;
    sendMessage(options?: any): void;
    updateInteractionInternalTranscript(interactionId?: string): boolean;
}
//# sourceMappingURL=ScriptableConversation.d.ts.map