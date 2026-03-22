import { GlideRecord } from "../types/GlideRecord";

export class GlideEntitlement {
    static canRouteToEMS(): boolean {
        return false;
    }
    static checkLicenseForPlugin(pluginId?: string, isDependantPlugin?: boolean): boolean {
        return false;
    }
    static currentUserHasLicenseForApp(appId?: string): boolean {
        return false;
    }
    static disableEntitlement(entitlementId?: string, appId?: string, disableWorkFlow?: boolean): void {
        
    }
    static enableEntitlement(entitlementId?: string, appId?: string, disableWorkFlow?: boolean): void {
        
    }
    static enforceEntitlements(disableWorkflow?: boolean): void {
        
    }
    static entitlementExists(entitlementId?: string): boolean {
        return false;
    }
    static getAllActiveEntitlements(): string {
        return "";
    }
    static getEligibleCustomAppSubscriptionsQuery(): string {
        return "";
    }
    static getEntitledGenAIMetadataInfo(featureID?: string): string {
        return "";
    }
    static getEntitlementEnforceMode(): string {
        return "";
    }
    static getItomLegacyLicenseInfo(): string {
        return "";
    }
    static getLicenseAwareMode(): boolean {
        return false;
    }
    static getLicenseModel(appId?: string): string {
        return "";
    }
    static getPluginActivationMode(): string {
        return "";
    }
    static getRecordFulfillerCondition(tableName?: string): string {
        return "";
    }
    static getRecordOwnerCondition(tableName?: string): string {
        return "";
    }
    static getRecordProducerCondition(tableName?: string): string {
        return "";
    }
    static getUnifiedItomLicenseInfo(): string {
        return "";
    }
    static hasBetaLicenseForApp(appId?: string): boolean {
        return false;
    }
    static hasLicenseEntitlementForApp(appId?: string, entitlementId?: string): boolean {
        return false;
    }
    static hasLicenseForApp(appId?: string): boolean {
        return false;
    }
    static hasPlatformRuntimeLicense(): boolean {
        return false;
    }
    static isCustomAppSubscriptionMappingEnforced(): boolean {
        return false;
    }
    static isEnforcementOn(appId?: string): boolean {
        return false;
    }
    static isFulfillmentOp(gr?: GlideRecord, opName?: string): boolean {
        return false;
    }
    static isFulfillmentTable(tableName?: string): boolean {
        return false;
    }
    static isLicensableApp(appId?: string): boolean {
        return false;
    }
    static isLicenseCheckRequired(appId?: string): boolean {
        return false;
    }
    static isLicenseComplianceRequired(): boolean {
        return false;
    }
    static isProducerTable(tableName?: string): boolean {
        return false;
    }
    static isUserEntitledToOp(gr?: GlideRecord, opName?: string): boolean {
        return false;
    }
    static userHasLicenseForApp(appId?: string, uid?: string): boolean {
        return false;
    }
}
