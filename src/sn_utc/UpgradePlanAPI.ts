import { GlideRecord } from "../types/GlideRecord";

export class UpgradePlanAPI {
    constructor() {  }
    canPublishUpgradePlan(planSysId?: string): boolean {
        return false;
    }
    canReprocessUpgradePlan(planSysId?: string): boolean {
        return false;
    }
    cleanupUpgradePlanSources(upgradePlanSysId?: string): void {
        
    }
    createUpgradePlan(): string {
        return "";
    }
    exportUpgradePlan(upgradePlanSysId?: string, upgradePlanName?: string, targetVersion?: string): any {
        return null as any;
    }
    getRetrieveUpgradePlanUrl(): string {
        return "";
    }
    getScope(planItem?: GlideRecord): string {
        return "";
    }
    getUpgradePlanItemValidation(planItem?: GlideRecord): any {
        return null as any;
    }
    hasErrorUpgradePlanItems(planSysId?: string): boolean {
        return false;
    }
    hasUpgradePlan(): boolean {
        return false;
    }
    installUpgradePlan(planSysId?: string): string {
        return "";
    }
    isUpgradePlanInstalled(planSysId?: string): boolean {
        return false;
    }
    processUpgradePlan(pluginId?: string): string {
        return "";
    }
    processUpgradePlanSkipPreview(pluginId?: string): string {
        return "";
    }
    publishUpgradePlan(planSysId?: string): string {
        return "";
    }
    refreshUpgradePlan(releaseTarget?: string): string {
        return "";
    }
    reprocessUpgradePlan(planSysId?: string): string {
        return "";
    }
    reprocessUpgradePlanSkipPreview(planSysId?: string): string {
        return "";
    }
}
