import { Plugin } from '../imports/Plugin.js';
import { GlideRecord } from '../imports/GlideRecord.js';
export declare class GlidePluginManager {
    constructor();
    canRollback(pluginName?: string): boolean;
    getActivePlugin(pluginName?: string): Plugin;
    getActivePlugins(): Record<any, any>;
    getExtensionMap(): Record<any, any>;
    getInstalledCorePlugins(): Record<any, any>;
    getInstalledPlugin(pluginName?: string): Plugin;
    getInstalledPlugins(): Record<any, any>;
    getPluginDependencies(pluginName?: string): string;
    getPluginPath(pluginName?: string): string;
    getRollbackContextId(pluginName?: string): string;
    getRollbackDenialReason(pluginName?: string): string;
    getRollbackRunId(rollbackContextId?: string): string;
    getUninstalledConditionalPlugins(pluginName?: string): GlideRecord;
    init(haveDB?: boolean): void;
    isActive(plugin_id?: string): boolean;
    isRegistered(pluginId?: string): boolean;
    isSkipDependentUpdate(): boolean;
    isUpgradeSystemBusy(): boolean;
    isZboot(): boolean;
    loadAllDemo(): void;
    loadDemoData(pluginName?: string): void;
    loadPluginData(pluginName?: string, dir?: string): void;
    registerAndActivateCoreJumboApps(): void;
    registerOOBContent(): void;
    registerPlugin(pluginName?: string): void;
    repairPlugin(pluginName?: string): void;
    setSkipDependentUpdate(b?: boolean): void;
    setSource(source?: string): void;
    setZboot(b?: boolean): void;
    startPluginFromCluster(pluginName?: string): void;
    upgrade(): void;
    upgradeCount(): number;
    verifyFilenames(): void;
}
//# sourceMappingURL=GlidePluginManager.d.ts.map