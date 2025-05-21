import { GlideRecord } from '@servicenow/glide';
export declare class SecCommonUtil {
    constructor();
    /**
     * Examines whether case sensitive
     * method is available or not
     */
    caseSensitiveMethodAvailable(): boolean;
    /**
     * Performs the case insensitive condition check
     * @param gr - Glide record
     * @param condition - condition to be evaluated against
     */
    checkRecord(gr: GlideRecord, condition: string): boolean;
    /**
     * Returns auth config for a integration instance
     * @param instance - sys_id of integration instance
     */
    getConfig(instance: string): any;
    /**
     * Insert/Update record for auth config
     * @param instance - sys_id of integration instance
     * @param obj - Object with the configurations
     */
    setConfig(instance: string, obj: any): void;
    /**
     * create copy of the integration data source using existing Security Data Integrations
     * @param sourceIntegration - sys_id of the existing Security Data Integration
     * @param targetIntegration - sys_id of the new Security Data Integration
     */
    copyIntegrationDataSources(sourceIntegration: string, targetIntegration: string): void;
    hasUserRole(role: string): boolean;
    type(): string;
}
//# sourceMappingURL=SecCommonUtil.d.ts.map