import { NativeObject } from '../imports/NativeObject'

export class AppCustomizationAPI {
    static canInstallOrRepairCustomization(appScopeId?: string): boolean {
        return false;
    }
    static containsUnpublishedCustomizations(scopeId?: string): boolean {
        return false;
    }
    static getAppCustomizationFiles(appScopeId?: string): string {
        return "";
    }
    static getAppCustomizationVersionById(appScopeId?: string): string {
        return "";
    }
    static getCustomizationVersionInfo(appScopeId?: string): NativeObject {
        return null as any;
    }
    static getInactivePluginCustomizationVersionInfo(pluginId?: string): NativeObject {
        return null as any;
    }
    static hasAppCustomizationFiles(appScopeId?: string): boolean {
        return false;
    }
    static isAppCustomizationCapableById(appScopeId?: string): boolean {
        return false;
    }
    static isAppCustomizationCapableByScopeName(scopeName?: string): boolean {
        return false;
    }
    static isAppCustomizationFeatureEnabled(): boolean {
        return false;
    }
    static isCustomizedApp(appScopeId?: string): boolean {
        return false;
    }
    static isCustomizedAppOnAllAppsPage(appScopeId?: string): boolean {
        return false;
    }
    static isEditableInStudio(appScopeId?: string): boolean {
        return false;
    }
    static isInactivePluginAppCustomizationCapableById(pluginId?: string): boolean {
        return false;
    }
    static isInactivePluginCustomizedApp(pluginId?: string): boolean {
        return false;
    }
    static isInstalledPlugin(scopeId?: string): boolean {
        return false;
    }
    static isRepairableCustomizedPlugin(appScopeId?: string): boolean {
        return false;
    }
    static storeAppCustomization(vendorAppId?: string, appCustomizationVersion?: string): boolean {
        return false;
    }
}
