import { GlideRecord, GlideFilter, gs } from '@servicenow/glide';

export class SecCommonUtil {
    constructor() {}

    /**
     * Examines whether case sensitive 
     * method is available or not
     */
    public caseSensitiveMethodAvailable(): boolean {
        return false;
    }

    /**
     * Performs the case insensitive condition check
     * @param gr - Glide record
     * @param condition - condition to be evaluated against
     */
    public checkRecord(gr: GlideRecord, condition: string): boolean {
        return false;
    }

    /**
     * Returns auth config for a integration instance
     * @param instance - sys_id of integration instance
     */
    public getConfig(instance: string): any {
        return null;
    }

    /**
     * Insert/Update record for auth config
     * @param instance - sys_id of integration instance
     * @param obj - Object with the configurations
     */
    public setConfig(instance: string, obj: any): void {}

    /**
     * create copy of the integration data source using existing Security Data Integrations
     * @param sourceIntegration - sys_id of the existing Security Data Integration
     * @param targetIntegration - sys_id of the new Security Data Integration
     */
    public copyIntegrationDataSources(sourceIntegration: string, targetIntegration: string): void {}

    public hasUserRole(role: string): boolean {
        return false;
    }

    public type(): string {
        return 'SecCommonUtil';
    }
}