import { GlideRecord } from "./GlideRecord";

export class GlideAppLoader {
    constructor() {  }
    canUninstall(appScope: string, sysCode: string): boolean {
        return false;
    }
    installBatch(jsonPayload: string, isScheduled: boolean): string {
        return "";
    }
    installOrUpgradeApp(storeAppId: string, appAttachmentId: string, loadDemoData: boolean, isAppV2Install: boolean, offeringPluginId: string, optionalDependencies: Array<string>, isReinstallRequested: boolean): boolean {
        return false;
    }
    installOrUpgradeAppCustomization(appCustomization: GlideRecord, obtainMutex: boolean, isAppV2Install: boolean, offeringPluginId: string, optionalDependencies: Array<string>): boolean {
        return false;
    }
    installOrUpgradeAppCustomizationAndStoreApp(appCustomization: GlideRecord, storeApp: GlideRecord, obtainMutex: boolean, loadDemoData: boolean, isAppV2Install: boolean, offeringPluginId: string, optionalDependencies: Array<string>): boolean {
        return false;
    }
    installOrUpgradeAppCustomizationAndStoreAppInteractive(appCustomization: GlideRecord, storeApp: GlideRecord, obtainMutex: boolean, loadDemoData: boolean, isAppV2Install: boolean, offeringPluginId: string, optionalDependencies: Array<string>): boolean {
        return false;
    }
    installOrUpgradeAppCustomizationInteractive(appCustomization: GlideRecord, obtainMutex: boolean, isAppV2Install: boolean, offeringPluginId: string, optionalDependencies: Array<string>): boolean {
        return false;
    }
    installOrUpgradeAppWithMutex(storeAppId: string, loadDemoData: boolean, isAppV2Install: boolean, offeringPluginId: string, optionalDependencies: Array<string>, isReinstallRequested: boolean): boolean {
        return false;
    }
    installOrUpgradeAppWithMutexInteractive(storeAppId: string, loadDemoData: boolean, isAppV2Install: boolean, offeringPluginId: string, optionalDependencies: Array<string>, isReinstallRequested: boolean): boolean {
        return false;
    }
    isAllowedAsDependency(pluginId: string): boolean {
        return false;
    }
    loadConditionalContent(appScope: string, isFirstTimeActivation: boolean): void {
        
    }
    loadOfflineAppsWithOOB(): void {
        
    }
    reapOldLogo(logoRecord: GlideRecord): void {
        
    }
    reapOldPackages(storeApp: GlideRecord, newPackageAttachmentId: string): void {
        
    }
    reapOldRemoteApp(sourceRemoteApp: GlideRecord, targetStoreApp: GlideRecord): void {
        
    }
    resetAllStoreRequestLimits(): void {
        
    }
    setAuthorProperties(properties: Map<string, string>): void {
        
    }
    setStoreRequestLimits(storeRequestLimits: Map<string, number>): void {
        
    }
    unloadDeleteToXML(gr: GlideRecord): string {
        return "";
    }
    unloadRecordToXML(gr: GlideRecord): string {
        return "";
    }
}
