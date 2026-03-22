import { Context } from "../imports/Context";
import { Function } from "../imports/Function";
import { GlideHTTPUtil } from "../types/GlideHTTPUtil";
import { GlideRecord } from "../types/GlideRecord";
import { SNAnalyticsSettings } from "./SNAnalyticsSettings";

export class SNAnalytics {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    static calculateUxaConfig(channel?: string, application_sys_id?: string, customerOverridenConfig?: string): string {
        return "";
    }
    static downloadUxaConfig(): void {
        
    }
    static getAPIHttpClient(): GlideHTTPUtil {
        return null as any;
    }
    static getAPIHttpClientForMigration(): GlideHTTPUtil {
        return null as any;
    }
    static getAPIServerHost(): string {
        return "";
    }
    static getAllApplications(): Array<any> {
        return [];
    }
    static getAllEnabledSettings(): Array<any> {
        return [];
    }
    static getBucketScope(documentGR?: GlideRecord): string {
        return "";
    }
    static insertNewConfigurationRecords(channel?: string, applicationSysId?: string, sysAnalyticsAppSysId?: string): void {
        
    }
    static isApplicationRegistered(appTableName?: string, appSysId?: string): boolean {
        return false;
    }
    static isEnabled(): boolean {
        return false;
    }
    static isSDKAnalyticsEnabled(): boolean {
        return false;
    }
    static processAllUnRegisteredSettings(): void {
        
    }
    static registerApplication(appTableName?: string, appSysId?: string, channelType?: string): void {
        
    }
    static registerChatApplication(appTableName?: string, appSysId?: string, appType?: string): void {
        
    }
    static registerCoreUIApplication(appTableName?: string, appSysId?: string, appType?: string): void {
        
    }
    static registerNextExperienceApplication(appTableName?: string, appSysId?: string, appType?: string): void {
        
    }
    static registerNowExperienceApplication(appTableName?: string, appSysId?: string, appType?: string): void {
        
    }
    static registerSDKApplication(appTableName?: string, appSysId?: string, appType?: string): void {
        
    }
    static registerWebApplication(appTableName?: string, appSysId?: string, appType?: string): void {
        
    }
    static retrieveConsentSettings(): Record<any, any> {
        return {} as any;
    }
    static retrieveSettings(appTableName?: string, appSysId?: string): SNAnalyticsSettings {
        return null as any;
    }
    static syncAppCreation(appTableName?: string, appSysId?: string, appType?: string): void {
        
    }
    static updateConfigOnAppRecordActive(channel?: string, applicationSysId?: string, sysAnalyticsAppSysId?: string): void {
        
    }
    static updateConfigRecordOnOverrideUpdate(channel?: string, applicationSysId?: string, sysAnalyticsAppSysId?: string): void {
        
    }
}
