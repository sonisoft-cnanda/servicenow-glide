import { Context } from '../imports/Context'
import { Function } from '../imports/Function'

export class GenerativeAIUtility {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    static addRequestValidator(request?: Record<any, any>): string {
        return "";
    }
    static addResponseValidator(request?: Record<any, any>): string {
        return "";
    }
    static cloneCapability(capabilityId?: string, request?: Record<any, any>): string {
        return "";
    }
    static cloneGenerativeAIConfig(aiConfigId?: string): string {
        return "";
    }
    static deleteGenerativeAIConfig(aiConfigId?: string): boolean {
        return false;
    }
    static deleteRequestValidator(sysId?: string): boolean {
        return false;
    }
    static deleteResponseValidator(sysId?: string): boolean {
        return false;
    }
    static enableGeoRouting(useCaseNames?: Array<any>): string {
        return "";
    }
    static evaluateLookUpAttributeScript(encodedQuery?: string, payload?: any): Record<any, any> {
        return {} as any;
    }
    static finalizeGenerativeAIConfig(aiConfigId?: string): boolean {
        return false;
    }
    static getAllValidators(): Array<any> {
        return [];
    }
    static getAttributeGroups(encodedQuery?: string): Array<any> {
        return [];
    }
    static getCapabilityAttributeResourceLookup(encodedQuery?: string): Array<any> {
        return [];
    }
    static getFeedbackFromGenAiLogTable(logId?: string): Record<any, any> {
        return {} as any;
    }
    static getGenAIModelConfigs(providerId?: string): Array<any> {
        return [];
    }
    static getGenAIModelConfigsList(providerIds?: Array<any>): Record<any, any> {
        return {} as any;
    }
    static getGenerativeAILog(logId?: string): Record<any, any> {
        return {} as any;
    }
    static getGeoRoutingConfig(useCaseName?: string): string {
        return "";
    }
    static getGeoRoutingDetails(): string {
        return "";
    }
    static getGranularFeedback(id?: string, type?: string, feedbackType?: string): Record<any, any> {
        return {} as any;
    }
    static getLatestGenAIConfig(encodedQuery?: string): Record<any, any> {
        return {} as any;
    }
    static getLookupConfig(attributeSysId?: string): Array<any> {
        return [];
    }
    static getPromptLibrarySearchResults(request?: Record<any, any>): Array<any> {
        return [];
    }
    static getPromptValidators(documentId?: string, documentTable?: string): Record<any, any> {
        return {} as any;
    }
    static getPromptValidatorsList(documentIds?: Array<any>, documentTable?: string): Record<any, any> {
        return {} as any;
    }
    static getRequestValidator(requestValidatorId?: string): Record<any, any> {
        return {} as any;
    }
    static getResponseValidator(responseValidatorId?: string): Record<any, any> {
        return {} as any;
    }
    static getServiceRecordURL(serviceId?: string): string {
        return "";
    }
    static logGenAIUsage(strategy?: string, documentId?: string, documentTable?: string, skillConfigId?: string): string {
        return "";
    }
    static logGenAIUsageWithAdditionalAttributes(strategy?: string, documentId?: string, documentTable?: string, skillConfigId?: string, genAILogId?: string, groupId?: string, additionalAttributes?: Record<any, any>): string {
        return "";
    }
    static publishGenerativeAIConfig(aiConfigId?: string, showInPromptLibrary?: boolean): boolean {
        return false;
    }
    static publishGenerativeAIConfigs(request?: Array<any>): boolean {
        return false;
    }
    static reprocessPendingUsageRecords(): void {
        
    }
    static sendFeedback(feedbackPayload?: any): Record<any, any> {
        return {} as any;
    }
    static updateConnectionURL(connectionId?: string, url?: string): boolean {
        return false;
    }
    static updateDocumentOnUsageLog(documentTable?: string, document?: string, usageLogRecordId?: string, skillConfigId?: string, groupId?: string): void {
        
    }
    static updateGenAIUsageLog(usageLogId?: string, additionalAttributes?: Record<any, any>): string {
        return "";
    }
    static updateGenerativeAILog(payload?: Record<any, any>): boolean {
        return false;
    }
    static updateGenerativeAIPromptConfig(request?: Record<any, any>): boolean {
        return false;
    }
    static updateGeoRoutingHttpConnection(useCaseName?: string, url?: string): boolean {
        return false;
    }
    static updateRequestValidator(request?: Record<any, any>): Record<any, any> {
        return {} as any;
    }
    static updateResponseValidator(response?: Record<any, any>): Record<any, any> {
        return {} as any;
    }
}
