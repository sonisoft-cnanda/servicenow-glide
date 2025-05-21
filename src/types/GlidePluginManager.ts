import { Plugin } from '../imports/Plugin';
import { GlideRecord } from '../imports/GlideRecord';

export class GlidePluginManager {
    constructor() {}
    canRollback(pluginName?: string): boolean {
        return false;
    }
    getActivePlugin(pluginName?: string): Plugin {
        return new Plugin();
    }
    getActivePlugins(): Record<any, any> {
        return {};
    }
    getExtensionMap(): Record<any, any> {
        return {};
    }
    getInstalledCorePlugins(): Record<any, any> {
        return {};
    }
    getInstalledPlugin(pluginName?: string): Plugin {
        return new Plugin();
    }
    getInstalledPlugins(): Record<any, any> {
        return {};
    }
    getPluginDependencies(pluginName?: string): string {
        return "";
    }
    getPluginPath(pluginName?: string): string {
        return "";
    }
    getRollbackContextId(pluginName?: string): string {
        return "";
    }
    getRollbackDenialReason(pluginName?: string): string {
        return "";
    }
    getRollbackRunId(rollbackContextId?: string): string {
        return "";
    }
    getUninstalledConditionalPlugins(pluginName?: string): GlideRecord {
        return new GlideRecord("");
    }
    init(haveDB?: boolean): void {
        
    }
    isActive(plugin_id?: string): boolean {
        return false;
    }
    isRegistered(pluginId?: string): boolean {
        return false;
    }
    isSkipDependentUpdate(): boolean {
        return false;
    }
    isUpgradeSystemBusy(): boolean {
        return false;
    }
    isZboot(): boolean {
        return false;
    }
    loadAllDemo(): void {
        
    }
    loadDemoData(pluginName?: string): void {
        
    }
    loadPluginData(pluginName?: string, dir?: string): void {
        
    }
    registerAndActivateCoreJumboApps(): void {
        
    }
    registerOOBContent(): void {
        
    }
    registerPlugin(pluginName?: string): void {
        
    }
    repairPlugin(pluginName?: string): void {
        
    }
    setSkipDependentUpdate(b?: boolean): void {
        
    }
    setSource(source?: string): void {
        
    }
    setZboot(b?: boolean): void {
        
    }
    startPluginFromCluster(pluginName?: string): void {
        
    }
    upgrade(): void {
        
    }
    upgradeCount(): number {
        return 0;
    }
    verifyFilenames(): void {
        
    }
}
