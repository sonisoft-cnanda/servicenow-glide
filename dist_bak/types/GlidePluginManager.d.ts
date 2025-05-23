import { GlideRecord } from '../imports/GlideRecord';
import { Plugin } from '../imports/Plugin';
export declare class GlidePluginManager {
    static canRollback(pluginName?: string): boolean;
    static getActivePlugin(pluginName?: string): Plugin;
    static getActivePlugins(): Record<any, any>;
    static getExtensionMap(): Record<any, any>;
    static getInstalledCorePlugins(): Record<any, any>;
    static getInstalledPlugin(pluginName?: string): Plugin;
    static getInstalledPlugins(): Record<any, any>;
    static getPluginDependencies(pluginName?: string): string;
    static getPluginPath(pluginName?: string): string;
    static getRollbackContextId(pluginName?: string): string;
    static getRollbackDenialReason(pluginName?: string): string;
    static getRollbackRunId(rollbackContextId?: string): string;
    static getUninstalledConditionalPlugins(pluginName?: string): GlideRecord;
    init(haveDB?: boolean): void;
    static isActive(plugin_id?: string): boolean;
    static isRegistered(pluginId?: string): boolean;
    isSkipDependentUpdate(): boolean;
    static isUpgradeSystemBusy(): boolean;
    static isZboot(): boolean;
    static loadAllDemo(): void;
    static loadDemoData(pluginName?: string): void;
    static loadPluginData(pluginName?: string): void;
    static loadPluginData(pluginName?: string, dir?: string): void;
    registerAndActivateCoreJumboApps(): void;
    registerOOBContent(): void;
    registerPlugin(pluginName?: string): void;
    repairPlugin(pluginName?: string): void;
    setSkipDependentUpdate(b?: boolean): void;
    setSource(source?: string): void;
    static setZboot(b?: boolean): void;
    static startPluginFromCluster(pluginName?: string): void;
    upgrade(): void;
    upgradeCount(): number;
    static verifyFilenames(): void;
    constructor();
}
