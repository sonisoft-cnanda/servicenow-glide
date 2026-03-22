export class AgentChatScriptObject {
    static fetchMessages(csConversationSysId?: string, boundaryId?: string, before?: boolean, limit?: number): [] {
        return [];
    }
    static fetchPreviousInteractions(convSysId?: string, type?: string): [] {
        return [];
    }
    static getVersion(): string {
        return "";
    }
    static send(sysCsConversationSysId?: string, message?: string, attachmentSysIds?: [], internal?: boolean): [] {
        return [];
    }
}
