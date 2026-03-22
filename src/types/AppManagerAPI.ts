export class AppManagerAPI {
    constructor() {  }
    static activatePlugin(pluginId: string, customizationVersion: string, loadDemoData: boolean): string {
        return "";
    }
    static installApplication(sysId: string, version: string, customizationVersion: string, loadDemoData: boolean): string {
        return "";
    }
    static installApplicationV2(sysId: string, version: string, customizationVersion: string, loadDemoData: boolean, offeringPluginId: string, optionalPluginIds: Array<string>): string {
        return "";
    }
    static installBatch(installationPlan: string): string {
        return "";
    }
    static repairApplication(sysId: string, version: string, customizationVersion: string, loadDemoData: boolean): string {
        return "";
    }
    static repairApplicationV2(sysId: string, version: string, customizationVersion: string, loadDemoData: boolean, offeringPluginId: string, optionalPluginIds: Array<string>): string {
        return "";
    }
    static repairPlugin(pluginId: string, customizationVersion: string, loadDemoData: boolean): string {
        return "";
    }
    static updateApplication(sysId: string, version: string, customizationVersion: string, loadDemoData: boolean): string {
        return "";
    }
    static updateApplicationV2(sysId: string, version: string, customizationVersion: string, loadDemoData: boolean, offeringPluginId: string, optionalPluginIds: Array<string>): string {
        return "";
    }
}
