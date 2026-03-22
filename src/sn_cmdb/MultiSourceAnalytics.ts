import { NativeObject } from '../imports/NativeObject'

export class MultiSourceAnalytics {
    static createQuery(queryJson?: string): Array<any> {
        return [];
    }
    static createReport(querySysId?: string): string {
        return "";
    }
    static deleteQueries(querySysIds?: string): void {
        
    }
    static executeAll(registrationId?: string): string {
        return "";
    }
    static executeBatch(registrationId?: string): string {
        return "";
    }
    static getCMDBAndRelatedClasses(): Array<any> {
        return [];
    }
    static getCMDBGroups(): Array<any> {
        return [];
    }
    static getColumnMap(table?: string): Record<any, any> {
        return {} as any;
    }
    static getLastExecution(queryId?: string): string {
        return "";
    }
    static getQueries(offset?: number, limit?: number): Array<any> {
        return [];
    }
    static getServices(): Record<any, any> {
        return {} as any;
    }
    static isDiscoveryLicenseActive(): boolean {
        return false;
    }
    static isMultiSourcePropertyEnabled(): boolean {
        return false;
    }
    static register(savedQueryId?: string): string {
        return "";
    }
    static registerEnhanced(savedQueryId?: string, executionBatchSize?: number, maxResultLimit?: number, maxQueryTimeout?: number): NativeObject {
        return null as any;
    }
    static updateQuery(querySysId?: string, queryJson?: string): void {
        
    }
}
