import { NativeObject } from "../imports/NativeObject";
import { GlideRecord } from "../types/GlideRecord";

export class JumboAppAPI {
    static calculateJumboAppAdditionalParameters(name: string): string {
        return "";
    }
    static canUninstallPlugin(jumboPluginId: string): boolean {
        return false;
    }
    static checkCompatibility(offeringPluginId: string, optionalDependencies: Array<string>): NativeObject {
        return null as any;
    }
    static convertToStoreAppAndScopedPlugins(appId: string, offeringPluginId: string, requiredVersion: string): GlideRecord {
        return null as any;
    }
    static getAllScopeNamesUnderScopedIdWithUncommitedChanges(sysId: string): Array<string> {
        return [];
    }
    static getAllScopedPluginsWithScopes(scopeIds: Array<string>, onlyActive: boolean): Array<string> {
        return [];
    }
    static getAllScopesUnderAnchorPlugin(anchorPluginId: string): Array<string> {
        return [];
    }
    static getJumboPluginScope(pluginId: string): string {
        return "";
    }
    static getPrimaryOffering(storeAppId: string): string {
        return "";
    }
    static getScopes(sysId: string): Array<string> {
        return [];
    }
    static installPlugin(jumboPluginId: string, loadDemoData: boolean, optionalPlugins: string[]): boolean {
        return false;
    }
    static isAllowPublishAllScopes(): boolean {
        return false;
    }
    static isJumboPlugin(jumboPluginId: string): boolean {
        return false;
    }
    static isJumboPluginByScopedId(jumboPluginSysId: string): boolean {
        return false;
    }
    static isOffering(gr: GlideRecord): boolean {
        return false;
    }
    static repairPlugin(jumboPluginId: string, loadDemoData: boolean, optionalDependencies: Array<string>): boolean {
        return false;
    }
}
