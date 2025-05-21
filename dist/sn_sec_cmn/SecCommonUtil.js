"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecCommonUtil = void 0;
class SecCommonUtil {
    constructor() { }
    /**
     * Examines whether case sensitive
     * method is available or not
     */
    caseSensitiveMethodAvailable() {
        return false;
    }
    /**
     * Performs the case insensitive condition check
     * @param gr - Glide record
     * @param condition - condition to be evaluated against
     */
    checkRecord(gr, condition) {
        return false;
    }
    /**
     * Returns auth config for a integration instance
     * @param instance - sys_id of integration instance
     */
    getConfig(instance) {
        return null;
    }
    /**
     * Insert/Update record for auth config
     * @param instance - sys_id of integration instance
     * @param obj - Object with the configurations
     */
    setConfig(instance, obj) { }
    /**
     * create copy of the integration data source using existing Security Data Integrations
     * @param sourceIntegration - sys_id of the existing Security Data Integration
     * @param targetIntegration - sys_id of the new Security Data Integration
     */
    copyIntegrationDataSources(sourceIntegration, targetIntegration) { }
    hasUserRole(role) {
        return false;
    }
    type() {
        return 'SecCommonUtil';
    }
}
exports.SecCommonUtil = SecCommonUtil;
//# sourceMappingURL=SecCommonUtil.js.map