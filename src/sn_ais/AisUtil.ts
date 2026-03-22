export class AisUtil {
    constructor() {  }
    static activateDatasource(sourceName?: string, semanticIndexSysIds?: string[], reindexRequired?: boolean): string {
        return "";
    }
    canConvertToSearchFilter(tableName?: string, encodedQuery?: string): string {
        return "";
    }
    static checkAndUpdateAsyncEmbeddingIndexStatus(): void {
        
    }
    static deactivateDatasource(sourceSysId?: string): string {
        return "";
    }
    static deactivateSemanticIndexes(semanticIndexSysIds?: string[]): string {
        return "";
    }
    dumpDocument(tableName?: string, sysId?: string, locale?: string, filters?: Array<any>): boolean {
        return false;
    }
    static fixZingToAisConfiguration(): void {
        
    }
    flushUpdatableFieldQueue(trackerSysId?: string): void {
        
    }
    static getChunkingConfiguration(): string {
        return "";
    }
    static getDatasourceForTable(tableName?: string): string {
        return "";
    }
    static getEmbeddingModelVersion(embeddingModelId?: string): string {
        return "";
    }
    static getExistingUpgradeRequestId(embeddingModelId?: string, targetVersion?: string): string {
        return "";
    }
    static getIngestionStatus(datasource?: string, datasourceIngestStatsId?: string, embeddingModelName?: string, semanticIndexName?: string): string {
        return "";
    }
    static getPlainText(type?: string, content?: string): string {
        return "";
    }
    getRequiredAisNodeVersion(): string {
        return "";
    }
    static getSemanticIndexes(profileId?: string, tableNames?: string[]): string {
        return "";
    }
    getTableLevelAttribute(table?: string, attribute?: string, defaultValue?: string): string {
        return "";
    }
    static hasPendingIndex(tableName?: string, recordSysId?: string, embeddingModelName?: string, semanticIndexName?: string): boolean {
        return false;
    }
    static hasPendingIndexEvents(tableName?: string, recordSysId?: string): boolean {
        return false;
    }
    static indexDatasource(datasource?: string, childTable?: string): boolean {
        return false;
    }
    static indexDatasourceAndGetTrackingId(datasource?: string, childTable?: string): string {
        return "";
    }
    isAisNodeUpdateRequired(version?: string): boolean {
        return false;
    }
    isFuzzyNumberMatchEnabled(): boolean {
        return false;
    }
    static isGuardRailLimitApplicable(dataSource?: string): boolean {
        return false;
    }
    isIndexAttachmentsEnabled(table?: string): boolean {
        return false;
    }
    isIndexTranslatedFieldsEnabled(table?: string): boolean {
        return false;
    }
    isIndexTranslatedReferenceFieldsEnabled(table?: string): boolean {
        return false;
    }
    static isMandatoryField(tableName?: string, fieldName?: string): boolean {
        return false;
    }
    static isSemanticFieldValid(tableName?: string, semanticFieldName?: string, componentFieldName?: string, type?: string): boolean {
        return false;
    }
    static isSessionDebuggingEnabled(): boolean {
        return false;
    }
    isTableIndexable(tableName?: string): boolean {
        return false;
    }
    isValidDotWalkName(tableName?: string, columnName?: string, dotWalkValues?: string): boolean {
        return false;
    }
    refreshDotWalkUpdateCache(noBroadcast?: boolean): void {
        
    }
    setActiveGeniusResultConfiguration(configSysId?: string, active?: boolean): string {
        return "";
    }
    setFuzzyNumberMatchEnabled(value?: boolean): void {
        
    }
    setParallelIngestionProcessor(numOfProcessors?: number, forceCancelIndexAll?: boolean): boolean {
        return false;
    }
    static switchGlobalSearchToAIS(configId?: string): boolean {
        return false;
    }
    static triggerCacheLoad(tableName?: string, userSysId?: string, additionalContext?: string): boolean {
        return false;
    }
    static updateAisProperty(propertyName?: string, value?: string): void {
        
    }
    updateProfileGeniusResultAssembly(profileSysId?: string, gra?: string): string {
        return "";
    }
    static upgradeEmbeddingModel(embeddingModelId?: string, targetVersion?: string): string {
        return "";
    }
}
