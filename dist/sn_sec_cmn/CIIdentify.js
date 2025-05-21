"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CIIdentify = void 0;
const glide_1 = require("@servicenow/glide");
const SecCommonUtil_1 = require("./SecCommonUtil.js");
class CIIdentify {
    constructor() {
        this._PROP_IGNORE_NULL_VALUES = true;
        this._IGNORE_CLASS_LIST = ["sn_sec_cmn_unmatched_ci", "cmdb_ci_unclassed_hardware", "cmdb_ci_incomplete_ip"];
        this._PRODUCT_MODEL = false;
        this.util = new SecCommonUtil_1.SecCommonUtil();
        this.autoPromoteFields = global.SecProperty.getProperty("sn_sec_cmn.autoPromoteFields", "");
        if (this.autoPromoteFields) {
            this.autoPromoteFieldsJson = JSON.parse(this.autoPromoteFields);
        }
        else {
            this.autoPromoteFieldsJson = {
                "dscy_switchport": "cmdb_ci",
                "cmdb_ci_network_adapter": "cmdb_ci",
                "cmdb_ci_nic": "cmdb_ci",
                "cmdb_ci_ip_address": [
                    "owned_by_cmdb_ci",
                    "nic"
                ],
                "cmdb_ci_vmware_nic": "cmdb_ci"
            };
        }
        this.filterDecommissionCi = global.SecProperty.getProperty("sn_sec_cmn.filterOutDecommissionedCI", "true");
        this.ignoreClassArr = this._getIgnoreClass();
        this.ignoreClass = this.ignoreClassArr.join(",");
    }
    getCILookupRules(source) {
        return null;
    }
    _makeObjectFromRule(grRule) {
        return new glide_1.GlideRecord(grRule.getTableName());
    }
    identify(source, srcValues, isReqLookupRule, hostRecord) {
        return null;
    }
    getLookupScriptByMethod(method) {
        return this._getLookupScriptByMethod(method);
    }
    _getLookupScriptByMethod(method) {
        return '';
    }
    getLookupTypeScriptNames() {
        return this._getLookupTypeScriptNames();
    }
    _getLookupTypeScriptNames() {
        return '';
    }
    _autoPromoteCIID(ciId) {
        return '';
    }
    _autoPromoteCIRecord(grCI) {
        return '';
    }
    _autoPromoteCI(ciId, grCI) {
        return '';
    }
    _getAutoPromoteField(currentRecord) {
        return '';
    }
    _identifyViaFieldMatching(rule, srcValues) {
        return null;
    }
    _identifyViaScript(rule, srcValues) {
        return null;
    }
    _identifyViaReferenceScript(rule, srcValues) {
        return null;
    }
    _queryMatch(gr, rule, srcValues) {
        return null;
    }
    _logDupWhileIdentifying(chosenCI, rule, srcValues) { }
    _cacheCi(gr) {
        return null;
    }
    _filterCI(mainCi, ciList) {
        return null;
    }
    _isOrphan(gr) {
        return false;
    }
    _isCIDecommissioned(gr, filterDecommissionCi) {
        return false;
    }
    _getIgnoreClass() {
        return [];
    }
    _checkCIIgnored(gr, ignoreClass) {
        return false;
    }
    type() {
        return 'CIIdentify';
    }
}
exports.CIIdentify = CIIdentify;
//# sourceMappingURL=CIIdentify.js.map