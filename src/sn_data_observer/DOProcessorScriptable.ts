export class DOProcessorScriptable {
    constructor() {  }
    checkAOTrackingStatus(): string {
        return "";
    }
    checkCachedActiveConfigurations(): string {
        return "";
    }
    checkLRUCacheStatus(): string {
        return "";
    }
    createOrUpdateSysTrigger(actionTime?: string, actionTypeString?: string, docSysId?: string, endDate?: string): boolean {
        return false;
    }
    deallocateCacheIfNoActiveConfigs(): void {
        
    }
    getBlockedTables(): string[] {
        return [];
    }
    getObserveTableElements(tableName?: string): Array<any> {
        return [];
    }
    isTableRotatedOrRotationExtension(tableName?: string): boolean {
        return false;
    }
    isTableValidForDO(tableName?: string): boolean {
        return false;
    }
    processDOQueue(): void {
        
    }
    resetAOTrackingState(): void {
        
    }
}
