import { GlideExtensionPoint } from "../imports/GlideExtensionPoint";
import { GlidePlugin } from "../imports/GlidePlugin";
import { GlideRecord } from "./GlideRecord";

export class GlidePluginManager {
    constructor() {  }
    static canRollback(pluginName: string): boolean {
        return false;
    }
    static getActivePlugin(pluginName: string): GlidePlugin {
        return null as any;
    }
    static getActivePlugins(): Map<string, GlidePlugin> {
        return {} as any;
    }
    static getExtensionMap(): Map<string, Map<string, GlideExtensionPoint>> {
        return {} as any;
    }
    static getInstalledCorePlugins(): Map<string, GlidePlugin> {
        return {} as any;
    }
    static getInstalledPlugin(pluginName: string): GlidePlugin {
        return null as any;
    }
    static getInstalledPlugins(): Map<string, GlidePlugin> {
        return {} as any;
    }
    static getPluginDependencies(pluginName: string): string {
        return "";
    }
    static getPluginPath(pluginName: string): string {
        return "";
    }
    static getRollbackContextId(pluginName: string): string {
        return "";
    }
    static getRollbackDenialReason(pluginName: string): string {
        return "";
    }
    static getRollbackRunId(rollbackContextId: string): string {
        return "";
    }
    static getUninstalledConditionalPlugins(pluginName: string): GlideRecord {
        return null as any;
    }
    init(haveDB: boolean): void {
        
    }
    static isActive(plugin_id: string): boolean {
        return false;
    }
    static isPublished(plugin_id: string): boolean {
        return false;
    }
    static isRegistered(pluginId: string): boolean {
        return false;
    }
    isSkipDependentUpdate(): boolean {
        return false;
    }
    static isUpgradeSystemBusy(): boolean {
        return false;
    }
    static isZboot(): boolean {
        return false;
    }
    static loadAllDemo(): void {
        
    }
    static loadDemoData(pluginName: string): void {
        
    }
    static loadPluginData(pluginName: string): void;
    static loadPluginData(pluginName: string, dir: string): void;
    static loadPluginData(...args: any[]): any {
        
    }
    registerAndActivateCoreJumboApps(): void {
        
    }
    registerOOBContent(): void {
        
    }
    registerPlugin(pluginName: string): void {
        
    }
    repairPlugin(pluginName: string): void {
        
    }
    setSkipDependentUpdate(b: boolean): void {
        
    }
    setSource(source: string): void {
        
    }
    static setZboot(b: boolean): void {
        
    }
    static startPluginFromCluster(pluginName: string): void {
        
    }
    upgrade(): void {
        
    }
    upgradeCount(): number {
        return 0;
    }
    static verifyFilenames(): void {
        
    }
}
