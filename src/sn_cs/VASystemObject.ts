import { Context } from "../imports/Context";
import { Function } from "../imports/Function";
import { VAResponse } from "../imports/VAResponse";
import { GlideRecord } from "../types/GlideRecord";

export class VASystemObject {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    acceptUIBMessages(shouldAcceptUIbMessages?: boolean, nodeVariable?: string): void {
        
    }
    static addNowAssistExecutionProduct(executionSysId?: string, productId?: string, productTable?: string): string {
        return "";
    }
    applyKnowledgeGraphUserData(kgUserDataJsonString?: string): void {
        
    }
    applyLinkTemplate(sysId?: string, tableName?: string, actionName?: string): string {
        return "";
    }
    static applyLinkTemplateCustomPortal(sysId?: string, tableName?: string, actionName?: string, portal?: string): string {
        return "";
    }
    attachRecordToConversation(tableName?: string, sysId?: string): boolean {
        return false;
    }
    attachToRecord(mediaId?: string, tableName?: string, sysId?: string): boolean {
        return false;
    }
    static authorizeAndEnqueueMessage(ambChannel?: string, message?: string, guestSessionIdentifier?: string): string {
        return "";
    }
    static bulkFillTranscriptsByIds(interactionMap?: Record<any, any>, forceTranscript?: boolean): void {
        
    }
    static cancelCurrentTopic(conversationId?: string): VAResponse {
        return null as any;
    }
    static cancelDocumentQnATopic(conversationId?: string, showUserMessage?: boolean): VAResponse {
        return null as any;
    }
    static cancelFDIH(contextId?: string, reason?: string): void {
        
    }
    cancelTask(taskId?: string): void {
        
    }
    static checkSupportQueuesSchedule(): string {
        return "";
    }
    static choicePage(conversationId?: string, startRow?: number, pageSize?: number, searchText?: string, validation?: boolean, freshControl?: boolean): string {
        return "";
    }
    closeNotification(notificationSysId?: string): boolean {
        return false;
    }
    confirmAutoSelection(confirmed?: boolean, isMidtopic?: boolean): void {
        
    }
    connectToAgent(msg?: string): boolean {
        return false;
    }
    connectToAgentUnsafe(msg?: string): void {
        
    }
    connectToExternalAgent(configId?: string): boolean {
        return false;
    }
    static copyAttachment(attachmentId?: string, targetTable?: string, targetId?: string): void {
        
    }
    createClickMetricsURL(originalURL?: string, scratchPad?: string, eventType?: string): string {
        return "";
    }
    static createConsumerAccountsForNowAssist(userId?: string): void {
        
    }
    static createConversation(preChatForm?: string): string {
        return "";
    }
    didConnectToLiveAgent(): boolean {
        return false;
    }
    displaySystemMessage(msg?: string): void {
        
    }
    elevateSession(sysUserId?: string): boolean {
        return false;
    }
    endConversation(): void {
        
    }
    static endConversation(conversationId?: string): void {
        
    }
    static enqueueCustomAdapterMessage(providerAppId?: string, message?: string, headers?: string, logTime?: number): boolean {
        return false;
    }
    static enqueueCustomAdapterMessageForRequestSubflow(providerAppId?: string, message?: string, headers?: string, subflowResponse?: Record<any, any>): boolean {
        return false;
    }
    static enqueueCustomAdapterResponse(providerAppId?: string, messageId?: string, response?: string, headers?: string, statusCode?: number): boolean {
        return false;
    }
    static enqueueMessage(ambChannel?: string, message?: string): boolean {
        return false;
    }
    static executeAiAgentTool(conversationId?: string, agentM2mSysId?: string, toolRequest?: Record<any, any>): Record<any, any> {
        return {} as any;
    }
    executeCustomInputControlPlan(planSysId?: string): void {
        
    }
    executeCustomOutputControlPlan(planSysId?: string): void {
        
    }
    static executeNBARequest(callbackId?: string, searchTerm?: string, contextProfileId?: string, searchContextId?: string, loggingContext?: string, locale?: string, additionalContext?: string, grConfigFilters?: Array<any>, searchResultType?: string, actionHistory?: string): string {
        return "";
    }
    executeSkill(skillId?: string, clearSkillIdFromContext?: boolean): void {
        
    }
    executeSkillDiscovery(utterance?: string): void {
        
    }
    executeSkillDiscoveryWithArgs(utterance?: string, args?: Record<any, any>): void {
        
    }
    executeSkillWithArgs(skillId?: string, _arguments?: Record<any, any>): void {
        
    }
    executeSkillWithPushOnStack(skillId?: string, clearSkillIdFromContext?: boolean, pushOnStack?: boolean): void {
        
    }
    executeSkillWithResumeBehavior(skillId?: string, clearSkillIdFromContext?: boolean, resumeBehavior?: string): void {
        
    }
    expireNotificationOnUnsubscribe(): void {
        
    }
    static faultAbandonedB2BConversations(): string {
        return "";
    }
    static faultAbandonedConversation(conversationId?: string): void {
        
    }
    static faultAbandonedConversations(): string {
        return "";
    }
    static faultConversation(conversationId?: string, cause?: string, messageToUser?: string, reason?: string, noImpersonationRequired?: boolean): void {
        
    }
    static fillMustacheTemplate(cardName?: string, data?: string, channel?: string): string {
        return "";
    }
    static fillTemplate(cardName?: string, channel?: string, richControl?: string): string {
        return "";
    }
    fillTemplateFromData(templateName?: string, data?: string): string {
        return "";
    }
    static fillTemplateFromDataAndDeviceType(templateName?: string, data?: string, channel?: string, allowNull?: boolean): string {
        return "";
    }
    static fillTemplateFromDataDeviceTypeAndConvoId(templateName?: string, data?: string, channel?: string, allowNull?: boolean, conversationId?: string): Record<any, any> {
        return {} as any;
    }
    static fillTranscriptById(conversationSysID?: string): void {
        
    }
    fireAndForgetFDIHAction(scopedSubflowName?: string, inputValuesByVarName?: Record<any, any>, sysIdOfAction?: string, runAsSystem?: boolean): string {
        return "";
    }
    fireAndForgetFDIHSubflow(scopedSubflowName?: string, inputValuesByVarName?: Record<any, any>, sysIdOfSubflow?: string): string {
        return "";
    }
    fireAndForgetOneExtend(servicePlanId?: string, inputValuesByInputName?: Record<any, any>): void {
        
    }
    fireAndForgetOneExtendWithDynamicRuntimeProvider(capabilityId?: string, inputValuesByInputName?: Record<any, any>): void {
        
    }
    static generateEmailNotifications(): void {
        
    }
    static generateMobilePushNotifications(): void {
        
    }
    static getAgentSkillsForAssistant(conversationId?: string): Array<any> {
        return [];
    }
    getAgentTopicInfo(): Record<any, any> {
        return {} as any;
    }
    static getAgentsOnContextProfile(conversationId?: string): string {
        return "";
    }
    static getAllBotMessages(providerId?: string, inboundId?: string): Record<any, any> {
        return {} as any;
    }
    static getAutoPilotTopics(conversationId?: string, query?: string, limit?: number): Array<any> {
        return [];
    }
    static getBotMessage(name?: string, inboundId?: string, providerId?: string): string {
        return "";
    }
    static getBrandingSettings(brandingKey?: string, languageCode?: string, portalPrefix?: string): Record<any, any> {
        return {} as any;
    }
    getChannelIdByName(name?: string): string {
        return "";
    }
    static getChatHeader(): string {
        return "";
    }
    getClosingMessage(): string {
        return "";
    }
    static getClosingMessage(conversationId?: string): string {
        return "";
    }
    getContextProfileId(): string {
        return "";
    }
    getContextProfileMessage(messageType?: string): string {
        return "";
    }
    static getContextProfileParamsForConversationId(conversationId?: string, params?: string): string {
        return "";
    }
    getContextVariables(keys?: Array<any>): Record<any, any> {
        return {} as any;
    }
    static getContextVariables(conversationId?: string, keys?: Array<any>): Record<any, any> {
        return {} as any;
    }
    getConversationId(): string {
        return "";
    }
    getConversationTaskId(): string {
        return "";
    }
    static getCustomAdapterProperty(name?: string, propertyType?: string, recordId?: string): string {
        return "";
    }
    static getCustomAdapterPropertyWithHierarchy(name?: string, providerAppId?: string): string {
        return "";
    }
    static getFDIHInvocationsFromConversation(conversationId?: string): [] {
        return [];
    }
    static getFullyQualifiedURL(url?: string): string {
        return "";
    }
    static getGenAiUsageLogRecordId(conversationId?: string): string {
        return "";
    }
    static getGeneralSettings(): string {
        return "";
    }
    getGreetingMessage(): string {
        return "";
    }
    getGuestSessionIdentifier(): string {
        return "";
    }
    static getInboundMsgForSentimentAnalysis(conversationId?: string): Array<any> {
        return [];
    }
    static getInitials(name?: string): string {
        return "";
    }
    static getInteractionAgentAvailability(interactionSysID?: string, verbose?: boolean): Record<any, any> {
        return {} as any;
    }
    getInteractionContext(): string {
        return "";
    }
    getInteractionSysId(): string {
        return "";
    }
    static getInteractionType(conversationId?: string): string {
        return "";
    }
    static getInternalTranscriptById(conversationSysID?: string, excludedTypes?: []): string {
        return "";
    }
    static getKeywordsByName(name?: string): string {
        return "";
    }
    static getLeaveConversationMessage(userLang?: string): string {
        return "";
    }
    static getLiveAgentChatDetails(conversationId?: string): Record<any, any> {
        return {} as any;
    }
    getMatchingLAConfig(): string {
        return "";
    }
    static getModelTypeForTopic(topicTypeId?: string): string {
        return "";
    }
    getNotification(actionable?: boolean): string {
        return "";
    }
    getNowAssistDeploymentConfigAttribute(attributeName?: string, deploymentId?: string): string {
        return "";
    }
    getNowAssistTopicInputs(): Record<any, any> {
        return {} as any;
    }
    getNthMostRecentExecutedSkill(n?: number): string {
        return "";
    }
    getPrevNotifications(actionable?: boolean, size?: number): string {
        return "";
    }
    static getProviderAppById(providerAppId?: string): string {
        return "";
    }
    static getProviderAppByInboundAndProviderId(inboundId?: string, providerId?: string): string {
        return "";
    }
    static getProviderById(providerId?: string): string {
        return "";
    }
    static getProviderByProviderAppId(providerAppId?: string): string {
        return "";
    }
    static getProviderUserContext(key?: string, appInboundId?: string, providerUserId?: string): string {
        return "";
    }
    static getProviderUserDetails(providerAppId?: string, providerUserId?: string): Record<any, any> {
        return {} as any;
    }
    static getProviderUserTimeZone(appInboundId?: string, providerUserId?: string): string {
        return "";
    }
    getRequesterLocale(): string {
        return "";
    }
    getRequesterSearchLocale(): string {
        return "";
    }
    getSavedSelectedOptions(saveName?: string): string {
        return "";
    }
    getScoredEntities(): Record<any, any> {
        return {} as any;
    }
    getSearchText(): string {
        return "";
    }
    getSearchUtterance(): string {
        return "";
    }
    static getSentimentNormalisedScore(factor?: number, score?: number): string {
        return "";
    }
    static getSessionIdFromConversationId(conversationId?: string): string {
        return "";
    }
    getSessionIdOnConversation(): string {
        return "";
    }
    static getSettings(brandingKey?: string, languageCode?: string): Record<any, any> {
        return {} as any;
    }
    getShowNotificationsPending(): string {
        return "";
    }
    getSurveyVerificationMessage(): string {
        return "";
    }
    getTableExtensions(tableName?: string): Array<any> {
        return [];
    }
    getTableParents(tableName?: string): Array<any> {
        return [];
    }
    static getTextValueForMessage(messageId?: string): string {
        return "";
    }
    static getTextValueFromMessageDetails(messagePayload?: string, messageType?: string): string {
        return "";
    }
    static getTimeZoneOffset(tzId?: string): string {
        return "";
    }
    static getTopicBlockDataFromConversation(conversationId?: string): [] {
        return [];
    }
    getTopicSelectionMessage(): string {
        return "";
    }
    getTranscript(): string {
        return "";
    }
    static getTranscriptById(conversationSysID?: string, doNotMarkAsDownloaded?: boolean): string {
        return "";
    }
    static getTranscriptForConversationHistory(conversationId?: string, latestSequenceId?: string): string {
        return "";
    }
    getTranslation(record?: GlideRecord, fieldName?: string, language?: string, defaultValue?: string): string {
        return "";
    }
    static getUnreadMessageCountForNAP(): number {
        return 0;
    }
    static getUnreadMessageIdsForConsumerAccount(consumerAccountId?: string, lastReadMessageId?: string): Array<any> {
        return [];
    }
    static getUserAttributes(): Record<any, any> {
        return {} as any;
    }
    getUserData(): Record<any, any> {
        return {} as any;
    }
    getUserDataWithSearchKG(): Record<any, any> {
        return {} as any;
    }
    static getVAName(conversationId?: string): string {
        return "";
    }
    static handleCustomAdapterAsyncException(messages?: Array<any>, errorMessage?: string): void {
        
    }
    hasOtherLiveAgentChatInProgress(): boolean {
        return false;
    }
    htmlToPlainText(html?: string): string {
        return "";
    }
    static initiateAIAgentConversation(userId?: string, objective?: string, conversationLabel?: string, aiAgentContext?: Record<any, any>): string {
        return "";
    }
    static initiateAutoPilot(conversationId?: string, topicName?: string, parameters?: Record<any, any>): VAResponse {
        return null as any;
    }
    invokeAutoPilotTopic(): void {
        
    }
    invokePostChat(): void {
        
    }
    invokePreChat(): boolean {
        return false;
    }
    invokeSubTopic(topicName?: string, libraryCallSerialized?: string): void {
        
    }
    isAMBClient(deviceType?: string): boolean {
        return false;
    }
    isAllowTranscriptDownload(): boolean {
        return false;
    }
    isChannelSecure(): boolean {
        return false;
    }
    isContextualActionApplicable(contextualActionKeyword?: string, providerAppId?: string, providerUserId?: string): boolean {
        return false;
    }
    static isConversationActiveForUser(guestSessionIdentifier?: string, consumerAccountContextId?: string, modelType?: string): boolean {
        return false;
    }
    isExternal(): boolean {
        return false;
    }
    static isInAutoPilotMode(conversationId?: string): boolean {
        return false;
    }
    isInChat(currentTopicId?: string): boolean {
        return false;
    }
    isLiveAgentAvailable(): boolean {
        return false;
    }
    isLiveAgentConfigured(): boolean {
        return false;
    }
    static isLiveChatInProgress(conversationId?: string): boolean {
        return false;
    }
    isMWebAMBClient(deviceType?: string): boolean {
        return false;
    }
    isNASSConversation(): boolean {
        return false;
    }
    isNDSSupported(): boolean {
        return false;
    }
    isNowAssistConversation(): boolean {
        return false;
    }
    liveSupportRequestAbandoned(): boolean {
        return false;
    }
    static mapIntentToTopic(intentId?: string, domainRecord?: GlideRecord, languageCode?: string): Array<any> {
        return [];
    }
    markContextSkillAsCompleted(): void {
        
    }
    markFDIHQuickExecutionState(callerToken?: string, inputValues?: Record<any, any>, outputValues?: Record<any, any>, responseStateStr?: string, responseStateMsg?: string): void {
        
    }
    static markNowAssistExecutionEnded(nowAssistExecutionId?: string, endingState?: string, additionalProperties?: Record<any, any>): void {
        
    }
    static markNowAssistExecutionStarted(conversationId?: string, nowAssistArtifactId?: string, nowAssistArtifactTable?: string, nowAssistArtifactLabel?: string, additionalProperties?: Record<any, any>): string {
        return "";
    }
    markNowAssistTopicAsCompleted(topicOutputs?: Record<any, any>): void {
        
    }
    markSkillFollowUpAnswer(utterance?: string): void {
        
    }
    static oneExtendCancelled(object?: any): void {
        
    }
    static oneExtendCompleted(object?: any): void {
        
    }
    static oneExtendErrored(object?: any): void {
        
    }
    static oneExtendTimedOut(transactionId?: string): void {
        
    }
    static performAutoResolutionSearch(searchTerm?: string, evamConfigId?: string, searchContextId?: string, locale?: string, loggingContext?: string): string {
        return "";
    }
    postProcessNotificationSubscription(): void {
        
    }
    preProcessNotificationSubscription(providerUserId?: string, channelId?: string): boolean {
        return false;
    }
    prepareFDIHQuickExecution(sysIdOfActionOrSubflow?: string, kindStr?: string, topicNodeId?: string, outputVarNames?: Array<any>, runAsSystemUser?: boolean): string {
        return "";
    }
    previewTopic(topicId?: string): void {
        
    }
    static processCustomAdapterFDIHResponseMessage(executionContextId?: string, status?: string): void {
        
    }
    static processSynchronousCustomAdapterMessage(providerAppId?: string, message?: string, headers?: string, logTime?: number): string {
        return "";
    }
    static processSynchronousNonConversationalCustomAdapterMessage(providerAppId?: string, message?: string, headers?: string, logTime?: number): string {
        return "";
    }
    static processToken(token?: string, targetURL?: string): Record<any, any> {
        return {} as any;
    }
    publishInputCollectorPromptUtterance(userResponse?: string): void {
        
    }
    publishInputCollectorVariables(updatedFieldValueJson?: string): void {
        
    }
    publishKnowledgeGraphResults(results?: any): void {
        
    }
    publishUserMessage(userText?: string): void {
        
    }
    static queueClickMetricsClickEvent(clickMetricsEventType?: string, sysId?: string, timestamp?: string): void {
        
    }
    static queueClickMetricsLifeCycleEvent(conversationId?: string, conversationTaskId?: string, clickMetricsEventType?: string, payload?: string): void {
        
    }
    quickExecuteFDIHAction(scopedActionName?: string, inputValuesByVarName?: Record<any, any>, runAsSystem?: boolean): Record<any, any> {
        return {} as any;
    }
    quickExecuteFDIHSubflow(scopedSubflowName?: string, inputValuesByVarName?: Record<any, any>): Record<any, any> {
        return {} as any;
    }
    raiseTopicException(msg?: string): void {
        
    }
    receiveNextBestAction(): void {
        
    }
    static removeAllProviderUserContext(appInboundId?: string, providerUserId?: string): void {
        
    }
    static removeProviderUserContext(key?: string, appInboundId?: string, providerUserId?: string): void {
        
    }
    static removeProviderUserContextImmediately(key?: string, appInboundId?: string, providerUserId?: string): void {
        
    }
    removeSelectedOptions(saveName?: string): void {
        
    }
    renderCard(templateName?: string, data?: string, escapeFieldValues?: boolean, skipTranslation?: boolean): any {
        return null as any;
    }
    renderCardWithFeedback(templateName?: string, data?: string, feedbackPayload?: string, escapeFieldValues?: boolean): any {
        return null as any;
    }
    renderStaticCard(templateName?: string, data?: string): any {
        return null as any;
    }
    renderTable(title?: string, headers?: Array<any>, data?: Array<any>): any {
        return null as any;
    }
    requestNextBestAction(currentAction?: string): void {
        
    }
    resetAllEntities(): void {
        
    }
    resetEntity(topicVariableName?: string): void {
        
    }
    resetGenAiHistory(): void {
        
    }
    static retrieveSearchResults(searchTerm?: string, contextProfileId?: string, searchContextId?: string, loggingContext?: string, locale?: string, additionalContext?: string, grConfigFilters?: Array<any>, searchResultType?: string): string {
        return "";
    }
    static retrieveSearchResultsAsync(callbackId?: string, searchTerm?: string, contextProfileId?: string, searchContextId?: string, loggingContext?: string, locale?: string, additionalContext?: string, grConfigFilters?: Array<any>, searchResultType?: string): string {
        return "";
    }
    static retrieveSearchResultsMultipleCallbacks(callbackId?: string, searchTerm?: string, contextProfileId?: string, searchContextId?: string, loggingContext?: string, locale?: string, additionalContext?: string, grConfigFilters?: Array<any>, searchResultType?: string): string {
        return "";
    }
    static retrieveSemanticSearchResults(searchTerm?: string, contextProfileId?: string, searchContextId?: string, loggingContext?: string, locale?: string, additionalContext?: string): string {
        return "";
    }
    runCustomInputControl(controlName?: string, generateDataStringExpression?: string, messageTranscriptStringExpression?: string, inputResponseHandlerStringExpression?: string, inputResponseMessageTranscriptStringExpression?: string, skippableExpression?: string, unsupportedDeviceMessage?: string): void {
        
    }
    runCustomOutputControl(controlName?: string, generateDataStringExpression?: string, messageTranscriptStringExpression?: string, unsupportedDeviceMessage?: string): void {
        
    }
    safeEval(expression?: string, doubleEval?: boolean): any {
        return null as any;
    }
    static sendActionMessageToUser(conversationId?: string, actionMessageJson?: string): string {
        return "";
    }
    sendBatchedMessages(): void {
        
    }
    sendContextualActions(): void {
        
    }
    sendCustomSkillPickerControl(skillSelectionMessage?: string, args?: Record<any, any>, skills?: Array<any>): void {
        
    }
    sendDynamicProgressMessage(message?: string, defaultHeader?: string): void {
        
    }
    sendInvalidModifyMessageToUser(fieldName?: string, invalidValue?: any): string {
        return "";
    }
    static sendMessageToUser(conversationId?: string, controlJson?: string): string {
        return "";
    }
    sendProcessingMessage(messageType?: string, shouldPersist?: boolean): void {
        
    }
    sendProcessingMessageDirectly(message?: string): void {
        
    }
    static sendReminder(conversationId?: string): void {
        
    }
    sendRequesterOnlySystemMessage(message?: string, showAvatar?: boolean): void {
        
    }
    sendSeparatorMessage(): string {
        return "";
    }
    sendSkillPickerControl(skillSelectionMessage?: string, args?: Record<any, any>): void {
        
    }
    sendSwitchLanguageActionMessage(languageCodeSwitchedTo?: string, languageCodeSwitchedFrom?: string): void {
        
    }
    sendSystemMessage(message?: string, showAvatar?: boolean): string {
        return "";
    }
    sendTopicPickerControl(topicSelectionMessage?: string, topicPickerButtonLabel?: string): void {
        
    }
    setAtlasSearchPerformed(): void {
        
    }
    setCancelButtonEnabled(enabled?: boolean): void {
        
    }
    static setContextVariables(conversationId?: string, variables?: Record<any, any>): boolean {
        return false;
    }
    setConversationContextUser(agentName?: string, tableName?: string, sysId?: string): void {
        
    }
    setDtForVAEnabled(): void {
        
    }
    setIntentClassificationToIncorrectAmongMultiple(): void {
        
    }
    static setProviderUserContext(key?: string, input?: any, appInboundId?: string, providerUserId?: string): void {
        
    }
    static setProviderUserContextImmediately(key?: string, input?: any, appInboundId?: string, providerUserId?: string): void {
        
    }
    static setProviderUserTimeZone(appInboundId?: string, providerUserId?: string, timeZone?: string): void {
        
    }
    setQueue(): void {
        
    }
    setScoredEntities(skillName?: string, entities?: Array<any>): void {
        
    }
    setSearchTextFromPreChat(): boolean {
        return false;
    }
    setSelectedOptions(selectedOptions?: Array<any>, saveName?: string, overwriteExisting?: boolean): void {
        
    }
    setSourceInfo(sysId?: string): void {
        
    }
    static shouldGenerateMobilePushNotifications(): boolean {
        return false;
    }
    static shouldSendEmailNotifications(): boolean {
        return false;
    }
    static skipOptionalQuestion(conversationId?: string): void {
        
    }
    static startConversation(conversationId?: string): void {
        
    }
    static subscribeNotifications(providerChannelIdentityId?: string, providerUserId?: string, token?: string): boolean {
        return false;
    }
    static switchB2BTopic(conversationId?: string, topicId?: string): string {
        return "";
    }
    static switchB2BTopicByName(conversationId?: string, topicName?: string): string {
        return "";
    }
    static switchToLiveAgent(conversationId?: string): void {
        
    }
    switchToLiveAgentSetup(): void {
        
    }
    static switchToLiveAgentSetup(conversationId?: string): void {
        
    }
    switchTopic(topicName?: string, resumeBehavior?: string): void {
        
    }
    static switchTopicAtMaxWaitTime(conversationId?: string): string {
        return "";
    }
    switchTopicById(topicId?: string, resumeBehavior?: string): void {
        
    }
    switchTopicByName(topicName?: string, resumeBehavior?: string): void {
        
    }
    static switchTopicByName(conversationId?: string, topicName?: string, resumeBehavior?: string): string {
        return "";
    }
    static testAgentAvailabilityInfo(conversationSysID?: string): Record<any, any> {
        return {} as any;
    }
    static timeoutDTAC(contextId?: string): void {
        
    }
    static timeoutFDIH(fdihInvocationRecordSysId?: string, conversationId?: string, contextName?: string, stateChangeTopicHandler?: string): void {
        
    }
    static timeoutNLUPrediction(conversationIdSysId?: string, taskSysId?: string, stateTrackingSysId?: string, userId?: string): void {
        
    }
    toSha1(salt?: string, value?: string): string {
        return "";
    }
    topicDiscovery(searchTextOverride?: string, keywordImpl?: boolean, userResponse?: string): void {
        
    }
    topicDiscoveryWithLanguageSwitchResponse(userResponse?: string): void {
        
    }
    transferSearchResults(searchResults?: Record<any, any>): void {
        
    }
    static typingIndicator(conversationId?: string): void {
        
    }
    unsetConversationContextUser(): void {
        
    }
    static unsubscribeNotifications(providerChannelIdentityId?: string, providerUserId?: string, token?: string): boolean {
        return false;
    }
    static updateContextProfileOnConversation(conversationId?: string, contextProfileId?: string): boolean {
        return false;
    }
    updateDynamicProgressMessage(status?: string, header?: string): void {
        
    }
    static updateInteractionChatSummary(conversationId?: string, chatSummaryText?: string): boolean {
        return false;
    }
    static userCanAccessConversation(conversationId?: string, guestSessionIdentifier?: string): boolean {
        return false;
    }
    validateDataCollectorValue(type?: string, value?: any, validator?: Record<any, any>): boolean {
        return false;
    }
    static validateJwtClaim(token?: string, claims?: Record<any, any>): boolean {
        return false;
    }
    static viewingIndicator(conversationId?: string): void {
        
    }
    waitForCompletedAiConnectorOneExtendWithDynamicRuntimeProvider(capabilityId?: string, inputValuesByInputName?: Record<any, any>, topicVarNamesByOutputName?: Record<any, any>, outputTypeByOutputName?: Record<any, any>): void {
        
    }
    waitForCompletedDynamicOneExtendWithDynamicRuntimeProvider(capabilityIds?: any, inputs?: any, output?: string, meta?: Record<any, any>, streaming?: Record<any, any>): void {
        
    }
    waitForCompletedOneExtend(servicePlanId?: string, inputValuesByInputName?: Record<any, any>, topicVarNamesByOutputName?: Record<any, any>, outputTypeByOutputName?: Record<any, any>): void {
        
    }
    waitForCompletedOneExtendWithDynamicRuntimeProvider(capabilityId?: string, inputValuesByInputName?: Record<any, any>, topicVarNamesByOutputName?: Record<any, any>, outputTypeByOutputName?: Record<any, any>): void {
        
    }
    waitForResponseFromDynamicFDIH(sysIdExpression?: string, inputValuesByParamNameExpression?: string, outputVarName?: string, runAsSystem?: boolean, kindExpression?: string, continueOnErrorExpression?: string): string {
        return "";
    }
    waitForResponseFromFDIHAction(scopedActionName?: string, inputValuesByVarName?: Record<any, any>, outputVarNames?: Array<any>, outputsAssignmentExpression?: string, sysIdOfAction?: string, runAsSystem?: boolean): string {
        return "";
    }
    waitForResponseFromFDIHAction_2(scopedActionName?: string, inputValuesByVarName?: Record<any, any>, outputTypesByVarName?: Record<any, any>, outputParamNameToTopicVarName?: Record<any, any>, sysIdOfAction?: string, runAsSystem?: boolean): string {
        return "";
    }
    waitForResponseFromFDIHSubflow(scopedActionName?: string, inputValuesByVarName?: Record<any, any>, outputVarNames?: Array<any>, outputsAssignmentExpression?: string, sysIdOfSubflow?: string): string {
        return "";
    }
    waitForResponseFromFDIHSubflow_2(scopedActionName?: string, inputValuesByVarName?: Record<any, any>, outputTypesByVarName?: Record<any, any>, outputParamNameToTopicVarName?: Record<any, any>, sysIdOfSubflow?: string): string {
        return "";
    }
}
