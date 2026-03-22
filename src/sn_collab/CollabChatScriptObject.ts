export class CollabChatScriptObject {
    static addMembersToChat(collabChatSysId?: string, sysUserIds?: any, collabUserSysIds?: any, token?: string, groupsSysIds?: any, ischeckDone?: boolean): string {
        return "";
    }
    static addMessageToActivityStream(messageId?: string): boolean {
        return false;
    }
    static closeCollabChatFrame(collabChatSysId?: string): boolean {
        return false;
    }
    static createChat(documentTableName?: string, documentSysId?: string, title?: string, initialMessage?: string, userSysIds?: Array<any>, addCaller?: boolean, token?: string, externalCollabUserIDs?: Array<any>, isChatPrivate?: boolean): Record<any, any> {
        return {} as any;
    }
    static createOrUpdateSettingsRecord(enabled?: boolean, enableTeams?: boolean, enableEmojis?: boolean, enableExpertFinder?: boolean, enableLegacySupport?: boolean): boolean {
        return false;
    }
    static deregisterResponder(): void {
        
    }
    static exportPublicKeyToCertificate(publicKeyId?: string, exportType?: string): boolean {
        return false;
    }
    static favoriteChat(collabChatMemberId?: string, favorited?: boolean): boolean {
        return false;
    }
    static fetchAllCollabConversations(limit?: number, filter?: string, currentTab?: string): [] {
        return [];
    }
    static fetchMessages(collabChatSysId?: string, boundaryId?: string, limit?: number, before?: boolean, pinnedOnly?: boolean): [] {
        return [];
    }
    static getCandidates(documentTable?: string, documentSysId?: string, type?: string, term?: string): [] {
        return [];
    }
    static getCollabChatCard(collabChatSysId?: string, filter?: string): Record<any, any> {
        return {} as any;
    }
    static getCollabChatMember(collabChatSysId?: string, userId?: string): Record<any, any> {
        return {} as any;
    }
    static getCollabChatMembers(collabChatSysId?: string, limit?: number): [] {
        return [];
    }
    static getCollabChatSearchResultView(collabChatSysId?: string): Record<any, any> {
        return {} as any;
    }
    static getCollabChatSearchResultViewBySearchRecord(sysId?: string, searchRecord?: string): Record<any, any> {
        return {} as any;
    }
    static getCollabChatSettingForCurrentDomain(): Record<any, any> {
        return {} as any;
    }
    static getCollabChatTranscriptById(collabChatSysId?: string): string {
        return "";
    }
    static getConversationCount(filter?: string): number {
        return 0;
    }
    static getCurrentUserChatFrames(): [] {
        return [];
    }
    static getDockedChatIdsWithUnread(): [] {
        return [];
    }
    static getNumberOfMembers(collabChatSysId?: string): number {
        return 0;
    }
    static getOutputHtmlContent(messageSysId?: string, messageTable?: string): string {
        return "";
    }
    static getPinnedMessageRowCount(collabChatSysId?: string): number {
        return 0;
    }
    static getUnreadConversationCount(): number {
        return 0;
    }
    static hasPermission(userSysId?: string, documentTable?: string, documentSysId?: string): boolean {
        return false;
    }
    static isCollabChatEnabledForRecord(table?: string, sysId?: string): boolean {
        return false;
    }
    static isCollabChatEnabledInDomain(): boolean {
        return false;
    }
    static isCollabChatEnabledInUserDomain(userID?: string): boolean {
        return false;
    }
    static minimizeCollabChatFrame(collabChatSysId?: string): boolean {
        return false;
    }
    static openCollabChatFrame(collabChatSysId?: string, forceReorder?: boolean): Record<any, any> {
        return {} as any;
    }
    static pinMessage(pinnedUserId?: string, messageId?: string, pinned?: boolean): Record<any, any> {
        return {} as any;
    }
    static processInboundMessage(payload?: string, channelType?: string): void {
        
    }
    static processInboundMessageByProvider(headers?: string, payload?: string, providerId?: string): void {
        
    }
    static registerResponder(): void {
        
    }
    static removeMemberFromChat(collabChatSysId?: string, sysUserId?: string, collabUserSysId?: string, token?: string): boolean {
        return false;
    }
    static removeMessageFromActivityStream(messageId?: string): boolean {
        return false;
    }
    static sendMentionNotification(recipientID?: string, chatID?: string, messageID?: string, senderName?: string): void {
        
    }
    static sendMessage(collabChatSysId?: string, senderId?: string, payloadMap?: Record<any, any>, attachmentSysIds?: [], token?: string): Record<any, any> {
        return {} as any;
    }
    static sendSummaryToCollabMember(collabChatSysId?: string, payload?: string, messageAudienceMemberIds?: Array<any>): Record<any, any> {
        return {} as any;
    }
    static sendSystemMessage(collabChatSysId?: string, messageText?: string): Record<any, any> {
        return {} as any;
    }
    static sendUserSpecificMessage(collabChatSysId?: string, senderId?: string, payloadMap?: Record<any, any>, attachmentSysIds?: [], systemMessage?: boolean, messageAudienceMemberIds?: Array<any>): Record<any, any> {
        return {} as any;
    }
    static updateLastRead(messageId?: string, collabChatMemberId?: string): boolean {
        return false;
    }
    static updateTitle(collabSysId?: string, title?: string): string {
        return "";
    }
}
