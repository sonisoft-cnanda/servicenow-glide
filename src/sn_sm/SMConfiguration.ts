import { GlideRecord } from "../types/GlideRecord";

export class SMConfiguration {
    constructor() {  }
    anyEnabled(applicationObject?: any, process?: string, defaultReturn?: boolean): boolean {
        return false;
    }
    exportToUpdateSet(obj?: any, metadataLinkOnly?: any): void {
        
    }
    getAccessibleTaskTables(newObject?: any): string {
        return "";
    }
    getAppName(applicationObject?: any): string {
        return "";
    }
    getBlackList(appName?: string): string {
        return "";
    }
    getConfigRecord(applicationObject?: any): GlideRecord {
        return null as any;
    }
    getConfigurationByMainModelTable(tableName?: string): GlideRecord {
        return null as any;
    }
    getConfigurationByStateFlowTable(tableName?: string): GlideRecord {
        return null as any;
    }
    getConfigurationByTableName(tableName?: string): GlideRecord {
        return null as any;
    }
    getConfigurationByTaskModelTable(tableName?: string): GlideRecord {
        return null as any;
    }
    getDispatchMethod(applicationObject?: any): string {
        return "";
    }
    getGroupType(applicationObject?: any, type?: string): string {
        return "";
    }
    getGroupTypeName(applicationObject?: any, type?: string): string {
        return "";
    }
    getMainModelTable(applicationObject?: any): string {
        return "";
    }
    getParentTable(applicationObject?: any): string {
        return "";
    }
    getPropertyPrefix(applicationObject?: any): string {
        return "";
    }
    getPropertyValue(applicationObject?: any, propertyName?: string, defaultValue?: string): string {
        return "";
    }
    getRequestDrivenAssignMethod(applicationObject?: any): string {
        return "";
    }
    getRole(applicationObject?: any, roleStr?: string): string {
        return "";
    }
    getSMConfig(tableName?: string): string {
        return "";
    }
    getTableName(tableName?: string): string {
        return "";
    }
    getTablePlural(tableName?: string): string {
        return "";
    }
    getTaskModelTable(applicationObject?: any): string {
        return "";
    }
    getTaskTable(applicationObject?: any): string {
        return "";
    }
    hasGroupType(ids?: string, type?: string): boolean {
        return false;
    }
    hasRole(applicationObject?: any, roleStr?: string, uid?: any): boolean {
        return false;
    }
    inboundEmailCheck(applicationObject?: any, value?: string): boolean {
        return false;
    }
    isDisabled(applicationObject?: any, process?: string): boolean {
        return false;
    }
    isEnabled(applicationObject?: any, process?: string, defaultReturn?: boolean): boolean {
        return false;
    }
    isFollowTheSunEnabled(applicationObject?: any, defaultReturn?: boolean): boolean {
        return false;
    }
    isRoleType(applicationObject?: any, roleStr?: string): boolean {
        return false;
    }
    isSMRecord(applicationObject?: any): boolean {
        return false;
    }
    putSMConfig(tableName?: string, sysId?: string, jsonString?: string): void {
        
    }
    startWorkFlow(applicationObject?: any, workflowFieldName?: string): void {
        
    }
}
