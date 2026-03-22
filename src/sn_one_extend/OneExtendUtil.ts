import { NativeObject } from "../imports/NativeObject";

export class OneExtendUtil {
    static addCapability(request?: Record<any, any>): string {
        return "";
    }
    static addCapabilityAttribute(capabilityId?: string, request?: Record<any, any>): string {
        return "";
    }
    static addCapabilityDefinition(request?: Record<any, any>): string {
        return "";
    }
    static addGenerativeAIConfig(request?: Record<any, any>): string {
        return "";
    }
    static addGenerativeAIPromptConfig(request?: Record<any, any>): string {
        return "";
    }
    static addOneExtendResourceAttributeMapping(request?: Record<any, any>): string {
        return "";
    }
    static addOneExtendResourceEdge(request?: Record<any, any>): string {
        return "";
    }
    static addOneExtendResourceMapping(request?: Record<any, any>): string {
        return "";
    }
    static addOneExtendResourceParamValue(request?: Record<any, any>): string {
        return "";
    }
    static call(request?: Record<any, any>): Record<any, any> {
        return {} as any;
    }
    static cancelEvaluationRun(batchRunId?: string): Record<any, any> {
        return {} as any;
    }
    static cancelled(response?: Record<any, any>): void {
        
    }
    static cloneEvaluationRun(evaluationRunId?: string): Record<any, any> {
        return {} as any;
    }
    static cloneTestDataset(evaluationRunId?: string): string {
        return "";
    }
    static completed(response?: Record<any, any>): void {
        
    }
    static copyEvaluationRun(evaluationRunId?: string): string {
        return "";
    }
    static createDataSetAttribute(request?: Record<any, any>): string {
        return "";
    }
    static createEvalAttribute(request?: Record<any, any>): string {
        return "";
    }
    static createEvalStrategy(request?: Record<any, any>): string {
        return "";
    }
    static createEvalStrategyMetric(request?: Record<any, any>): string {
        return "";
    }
    static createEvalStrategyWithMetrics(request?: Record<any, any>): Record<any, any> {
        return {} as any;
    }
    static createEvalSuggestion(request?: Record<any, any>): string {
        return "";
    }
    static createEvaluationRun(request?: Record<any, any>): string {
        return "";
    }
    static createRuntimeConfig(request?: Record<any, any>): Record<any, any> {
        return {} as any;
    }
    static createTestDataset(request?: Record<any, any>): string {
        return "";
    }
    static deleteBatchRun(batchRunId?: string): boolean {
        return false;
    }
    static deleteDefinitionAttribute(attributeId?: string): boolean {
        return false;
    }
    static deleteEvalStrategyMetric(encodedQuery?: string): boolean {
        return false;
    }
    static deleteOneExtendResourceAttributeMapping(request?: Record<any, any>): boolean {
        return false;
    }
    static deleteOneExtendResourceEdge(resourceEdgeId?: string): boolean {
        return false;
    }
    static deleteResourceMapping(resourceMappingId?: string, deleteRelatedResourceAttributeMappings?: boolean, deleteRelatedResourceParamValues?: boolean): boolean {
        return false;
    }
    static deleteTestDataset(datasetId?: string): any {
        return null as any;
    }
    static errored(response?: Record<any, any>): void {
        
    }
    static evaluate(request?: Record<any, any>): Record<any, any> {
        return {} as any;
    }
    static execute(request?: Record<any, any>): Record<any, any> {
        return {} as any;
    }
    static executeApplicabilityCheck(request?: Record<any, any>): Record<any, any> {
        return {} as any;
    }
    static executeCapability(request?: Record<any, any>): Record<any, any> {
        return {} as any;
    }
    static extractSemanticFlowResponse(response?: string): Record<any, any> {
        return {} as any;
    }
    static generateSamples(filterId?: string, count?: number): Array<any> {
        return [];
    }
    static getActiveControls(request?: Record<any, any>): Array<any> {
        return [];
    }
    static getAdvancedBatchResultIds(batchRunId?: string, aiConfigId?: string, testRecordEncodedQuery?: string, metricFilters?: Array<any>): Array<any> {
        return [];
    }
    static getAdvancedPaginatedBatchResults(capabilityId?: string, batchRunId?: string, aiConfigId?: string, testRecordEncodedQuery?: string, metricFilters?: Array<any>, offset?: number, limit?: number): Array<any> {
        return [];
    }
    static getAllCapabilities(builderName?: string, params?: Record<any, any>): Array<any> {
        return [];
    }
    static getAllDataSourceMappingsForCapability(capabilityId?: string): Array<any> {
        return [];
    }
    static getAllMetricMappingsForCapability(capabilityId?: string): Array<any> {
        return [];
    }
    static getAllProviderMappings(): Array<any> {
        return [];
    }
    static getAllResourceAttributeMappings(resourceMappingId?: string): Array<any> {
        return [];
    }
    static getAllResourceAttributeMappingsForResourceMappingIds(resourceMappingIds?: Array<any>): Array<any> {
        return [];
    }
    static getAllSkills(): Array<any> {
        return [];
    }
    static getAllToolsMappingsForCapability(capabilityId?: string, includeSelfResourceMapping?: boolean): Array<any> {
        return [];
    }
    static getAllUsersFromBatchRun(encodedQuery?: string): Array<any> {
        return [];
    }
    static getAllowedLanguages(model?: string): Array<any> {
        return [];
    }
    static getAttributesForDataSetId(datasetId?: string): Array<any> {
        return [];
    }
    static getAvailableControls(request?: Record<any, any>): Array<any> {
        return [];
    }
    static getBatchResultCountFromEvalMetric(encodedQuery?: string): number {
        return 0;
    }
    static getBatchResultStatus(batchRunId?: string): Record<any, any> {
        return {} as any;
    }
    static getBatchResultTestRecordToStatusMap(batchRunId?: string): Record<any, any> {
        return {} as any;
    }
    static getBatchResults(encodedQuery?: string): Array<any> {
        return [];
    }
    static getCapabilitiesByType(capabilityType?: string): Array<any> {
        return [];
    }
    static getCapability(capabilityId?: string): Record<any, any> {
        return {} as any;
    }
    static getCapabilityAttributes(capabilityId?: string): Record<any, any> {
        return {} as any;
    }
    static getCapabilityDefinitions(request?: Record<any, any>): Array<any> {
        return [];
    }
    static getDataCollectionRecordIdsForDataset(datasetId?: string): Record<any, any> {
        return {} as any;
    }
    static getDatasetAttributeMappingsWithoutSkill(datasetId?: string): Array<any> {
        return [];
    }
    static getDefinitionAttributes(definitionId?: string): Record<any, any> {
        return {} as any;
    }
    static getDefinitionAttributesByQuery(encodedQuery?: string): Record<any, any> {
        return {} as any;
    }
    static getDefinitionConfig(capabilityDefinitionId?: string): Record<any, any> {
        return {} as any;
    }
    static getDefinitionConfigs(capabilityDefinitionIds?: Array<any>): Record<any, any> {
        return {} as any;
    }
    static getDocumentIdsForDataset(datasetId?: string): Record<any, any> {
        return {} as any;
    }
    static getEvalAttributesForCapability(capabilityId?: string): Array<any> {
        return [];
    }
    static getEvalMetricResults(encodedQuery?: string): Array<any> {
        return [];
    }
    static getEvalMetricResultsGroupByMetric(encodedQuery?: string): any {
        return null as any;
    }
    static getEvalRunBatchResultCount(encodedQuery?: string): number {
        return 0;
    }
    static getEvalRunsCountForDatasets(encodedQuery?: string): Record<any, any> {
        return {} as any;
    }
    static getEvalStrategiesWithMetrics(encodedQuery?: string): Array<any> {
        return [];
    }
    static getEvalSuggestions(encodedQuery?: string): Array<any> {
        return [];
    }
    static getEvaluationRun(batchRunId?: string): Record<any, any> {
        return {} as any;
    }
    static getEvaluationRuns(encodedQuery?: string): Array<any> {
        return [];
    }
    static getEvaluationRunsWithMetricScores(encodedQuery?: string, limit?: number): Array<any> {
        return [];
    }
    static getGenAIConfig(genAIConfigId?: string): Record<any, any> {
        return {} as any;
    }
    static getGenAIConfigs(capabilityDefinitionId?: string): Array<any> {
        return [];
    }
    static getGenAIConfigsList(capabilityDefinitionIds?: Array<any>): Record<any, any> {
        return {} as any;
    }
    static getGenAIConfigurationList(configIds?: Array<any>): Record<any, any> {
        return {} as any;
    }
    static getGenAIProviderMapping(definitionAPI?: string): Record<any, any> {
        return {} as any;
    }
    static getGenAIProviderMappings(definitionAPIs?: Array<any>): Record<any, any> {
        return {} as any;
    }
    static getGuardianExecutionModeSetting(skillConfigId?: string, capabilityId?: string): string {
        return "";
    }
    static getGuardianModerationSettings(skillConfigId?: string, capabilityId?: string): Record<any, any> {
        return {} as any;
    }
    static getLogConfigFromModel(definitionId?: string): Array<any> {
        return [];
    }
    static getMetricScoresPerPrompt(encodedQuery?: string): any {
        return null as any;
    }
    static getOneExtendResourceEdgesByQuery(encodedQuery?: string): Array<any> {
        return [];
    }
    static getPaginatedBatchResultWithoutSkill(encodedQuery?: string, offset?: number, limit?: number, addPaginationQuery?: boolean): Array<any> {
        return [];
    }
    static getPaginatedBatchResults(capabilityId?: string, batchResultEncodedQuery?: string, evalMetricEncodedQuery?: string, offset?: number, limit?: number): Array<any> {
        return [];
    }
    static getProgressPerPrompt(aiConfig?: string, encodedQuery?: string): any {
        return null as any;
    }
    static getResourceMapping(resourceMappingId?: string): Record<any, any> {
        return {} as any;
    }
    static getResourceMappingsByQuery(encodedQuery?: string): Array<any> {
        return [];
    }
    static getResourceParamValuesForResourceMapping(resourceMappingId?: string): Array<any> {
        return [];
    }
    static getSemanticFlowFilters(assistantId?: string): Record<any, any> {
        return {} as any;
    }
    static getSkillDetails(skillId?: string): Record<any, any> {
        return {} as any;
    }
    static getSkills(): string {
        return "";
    }
    static getSupportedLanguages(model?: string, api?: string): Array<any> {
        return [];
    }
    static getTestDatasetDetails(datasetId?: string): Record<any, any> {
        return {} as any;
    }
    static getTestDatasets(encodedQuery?: string): Array<any> {
        return [];
    }
    static getTestDatasetsForSkill(datasetSkillMappingQuery?: string, encodedQuery?: string): Array<any> {
        return [];
    }
    static getTotalRecords(batchRunId?: string, aiConfigs?: Array<any>): number {
        return 0;
    }
    static getTotalRecordsWithoutSkill(batchRunId?: string): number {
        return 0;
    }
    static getTransformedResponses(capabilityResponse?: NativeObject, batchResultId?: string, capabilityId?: string): any {
        return null as any;
    }
    static getTruncateStrategyByName(truncateStrategyName?: string): Record<any, any> {
        return {} as any;
    }
    static getUniqueTestRecordsIdsForBatchRun(encodedQuery?: string): Array<any> {
        return [];
    }
    static globalToolsExecutor(scriptApiName?: string, scriptFunctionName?: string, initializationParameters?: string, functionParameters?: string): any {
        return null as any;
    }
    static insertEvalMetric(evalMetricJson?: Record<any, any>): string {
        return "";
    }
    static insertGenAiMetric(metricJson?: Record<any, any>): string {
        return "";
    }
    static isValidRequestForOem(featureInvocationId?: string): boolean {
        return false;
    }
    static markDefaultDefinitionConfig(request?: Record<any, any>): boolean {
        return false;
    }
    static matchFilters(userText?: string, assistantId?: string): Record<any, any> {
        return {} as any;
    }
    static processCancelEvaluationRun(batchRunId?: string): void {
        
    }
    static processCancelled(response?: Record<any, any>): void {
        
    }
    static processFailure(response?: Record<any, any>): void {
        
    }
    static processSkipped(response?: Record<any, any>): void {
        
    }
    static processSuccess(response?: Record<any, any>): void {
        
    }
    static processTestDataset(datasetId?: string): void {
        
    }
    static registerFilter(filterId?: string): void {
        
    }
    static setActiveControl(request?: Record<any, any>): Record<any, any> {
        return {} as any;
    }
    static setupAndExecuteCapability(request?: Record<any, any>): Record<any, any> {
        return {} as any;
    }
    static updateBatchResultResponse(request?: Record<any, any>): string {
        return "";
    }
    static updateCapability(request?: Record<any, any>): boolean {
        return false;
    }
    static updateCapabilityAttribute(capabilityId?: string, request?: Record<any, any>): boolean {
        return false;
    }
    static updateCapabilityDefinition(request?: Record<any, any>): boolean {
        return false;
    }
    static updateDataSetAttribute(sysId?: string, request?: Record<any, any>): void {
        
    }
    static updateDefinitionFilterProperties(definitionId?: string, filterProperties?: Record<any, any>): boolean {
        return false;
    }
    static updateEvalAttribute(sysId?: string, request?: Record<any, any>): void {
        
    }
    static updateEvalMetric(evalMetricJson?: any): void {
        
    }
    static updateEvalSuggestion(request?: Record<any, any>): void {
        
    }
    static updateEvaluationRun(request?: Record<any, any>): string {
        return "";
    }
    static updateGenAiMetrics(generativeAIMetric?: Record<any, any>): void {
        
    }
    static updateGenerativeAIConfig(request?: Record<any, any>): boolean {
        return false;
    }
    static updateGoldenResponse(datasetId?: string, documentId?: string, goldenResponse?: string): void {
        
    }
    static updateOneExtendResourceEdge(request?: Record<any, any>): boolean {
        return false;
    }
    static updateResourceAttributeMapping(request?: Record<any, any>): boolean {
        return false;
    }
    static updateResourceMapping(request?: Record<any, any>): boolean {
        return false;
    }
    static updateResourceParamValue(request?: Record<any, any>): boolean {
        return false;
    }
    static updateTestDataset(request?: Record<any, any>): void {
        
    }
    static upsertBatchResult(request?: Record<any, any>): string {
        return "";
    }
    static upsertEvalMetric(evalMetricJson?: Record<any, any>): void {
        
    }
    static upsertEvalMetricResult(request?: Record<any, any>): string {
        return "";
    }
    static useOem(featureInvocationId?: string): boolean {
        return false;
    }
    static validateCapability(capabilityId?: string): boolean {
        return false;
    }
}
