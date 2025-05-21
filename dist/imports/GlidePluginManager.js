"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlidePluginManager = void 0;
const Plugin_1 = require("./Plugin.js");
const GlideRecord_1 = require("./GlideRecord.js");
class GlidePluginManager {
    constructor() { }
    canRollback(pluginName) {
        return false;
    }
    getActivePlugin(pluginName) {
        return new Plugin_1.Plugin();
    }
    getActivePlugins() {
        return {};
    }
    getExtensionMap() {
        return {};
    }
    getInstalledCorePlugins() {
        return {};
    }
    getInstalledPlugin(pluginName) {
        return new Plugin_1.Plugin();
    }
    getInstalledPlugins() {
        return {};
    }
    getPluginDependencies(pluginName) {
        return "";
    }
    getPluginPath(pluginName) {
        return "";
    }
    getRollbackContextId(pluginName) {
        return "";
    }
    getRollbackDenialReason(pluginName) {
        return "";
    }
    getRollbackRunId(rollbackContextId) {
        return "";
    }
    getUninstalledConditionalPlugins(pluginName) {
        return new GlideRecord_1.GlideRecord("");
    }
    init(haveDB) {
    }
    isActive(plugin_id) {
        return false;
    }
    isRegistered(pluginId) {
        return false;
    }
    isSkipDependentUpdate() {
        return false;
    }
    isUpgradeSystemBusy() {
        return false;
    }
    isZboot() {
        return false;
    }
    loadAllDemo() {
    }
    loadDemoData(pluginName) {
    }
    loadPluginData(pluginName, dir) {
    }
    registerAndActivateCoreJumboApps() {
    }
    registerOOBContent() {
    }
    registerPlugin(pluginName) {
    }
    repairPlugin(pluginName) {
    }
    setSkipDependentUpdate(b) {
    }
    setSource(source) {
    }
    setZboot(b) {
    }
    startPluginFromCluster(pluginName) {
    }
    upgrade() {
    }
    upgradeCount() {
        return 0;
    }
    verifyFilenames() {
    }
}
exports.GlidePluginManager = GlidePluginManager;
//# sourceMappingURL=GlidePluginManager.js.map