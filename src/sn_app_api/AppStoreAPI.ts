import { GlideRecord } from "../types/GlideRecord";

export class AppStoreAPI {
    static canConvertSysApp(sysId: string): boolean {
        return false;
    }
    static canConvertSysStoreApp(sysId: string): boolean {
        return false;
    }
    static canInstallOrUpgrade(application: GlideRecord): boolean {
        return false;
    }
    static canPublishToAppRepo(appId: string): boolean {
        return false;
    }
    static canPublishToAppStore(appId: string): boolean {
        return false;
    }
    static canPublishToUpdateSet(appId: string): boolean {
        return false;
    }
    static canUninstall(appScope: string, sysCode: string): boolean {
        return false;
    }
    static canUpgradeAnyStoreApp(): boolean {
        return false;
    }
    static checkForAppstorePlugins(appMap: Map<string, string>): Map<string, Map<string, boolean>> {
        return {} as any;
    }
    static getAppManagerCacheGr(key: string, sharedInternally: boolean): GlideRecord {
        return null as any;
    }
    static getRollbackContextId(appName: string, version: string): string {
        return "";
    }
    static getRollbackDenialReason(appName: string, version: string): string {
        return "";
    }
    static getRollbackRunId(rollbackContextId: string): string {
        return "";
    }
    static isAppstorePlugin(appScopeName: string, sysCode: string): boolean {
        return false;
    }
    static isISVScope(scopeName: string): boolean {
        return false;
    }
    static isLatestVersionInstalled(sysId: string): boolean {
        return false;
    }
    static isOwnedStoreApp(appScope: string): boolean {
        return false;
    }
    static isRollbackEligible(appName: string, version: string): boolean {
        return false;
    }
    static isUpdateMutexAvailable(): boolean {
        return false;
    }
}
