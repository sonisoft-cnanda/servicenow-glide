export class CustomAdapterScriptObject {
    constructor() {  }
    getAccountLinkType(providerAppId?: string): string {
        return "";
    }
    getHtmlTitle(unfurlInputsJson?: string): string {
        return "";
    }
    getInProgressConversationDetails(providerChannelIdentityId?: string, providerUserId?: string): string {
        return "";
    }
    getLastConversationDetails(providerChannelIdentityId?: string, providerUserId?: string): string {
        return "";
    }
    getUnfurlMetadata(unfurlInputsJson?: string): string {
        return "";
    }
    getUrlsFromText(urlOrText?: string): string {
        return "";
    }
    processUpdatedMessage(messagePayload?: string, providerAppId?: string, userId?: string, token?: string): Record<any, any> {
        return {} as any;
    }
    sendUpdatedMessage(messageId?: string, updatedText?: string, channelUserProfileId?: string): void {
        
    }
    startCreatedConversation(providerChannelIdentityId?: string, providerUserId?: string): boolean {
        return false;
    }
}
