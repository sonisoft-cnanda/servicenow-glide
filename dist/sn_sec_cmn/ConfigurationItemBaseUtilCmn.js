"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigurationItemBaseUtilCmn = void 0;
const glide_1 = require("@servicenow/glide");
class ConfigurationItemBaseUtilCmn {
    constructor() {
        this.DEFAULT_IRE_SOURCE = 'VR-Unknown';
        this.SEPARATOR = '|';
        this.useIRE = glide_1.gs.getProperty('sn_sec_cmn.ci_creation_through_IRE', 'true') === 'true';
        this.UNMATCHED_CI_CLASS_NAME = 'sn_sec_cmn_unmatched_ci';
    }
    createCIThroughIRE(sourceID, source, payload, integration, domainID, integrationRun, detailResponse) {
        return null;
    }
    createItemPayload(ciInfo, className) {
        return null;
    }
    getSysObjectSourceInfo(ciInfo, value) {
        return null;
    }
    getSettings() {
        return null;
    }
    getOptions() {
        return null;
    }
    createCIUsingGlide(payload, integration, domainID, detailResponse) {
        return null;
    }
    createPayload(ciInfo) { }
    hasSysId(output) {
        return false;
    }
    hasError(output) {
        return false;
    }
    isEnchancedIREApiAvailable() {
        return false;
    }
    _getInternalId(value, nativeKey) {
        return '';
    }
    _setValues(values, integration, payload, targetTable) { }
    getMappingEntries(integration, targetTable) {
        return null;
    }
    _cacheMappingEntries(integration, targetTable) {
        return null;
    }
    type() {
        return 'ConfigurationItemBaseUtilCmn';
    }
}
exports.ConfigurationItemBaseUtilCmn = ConfigurationItemBaseUtilCmn;
//# sourceMappingURL=ConfigurationItemBaseUtilCmn.js.map