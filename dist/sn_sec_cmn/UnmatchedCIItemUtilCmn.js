"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnmatchedCIItemUtilCmn = void 0;
const ConfigurationItemBaseUtilCmn_1 = require("./ConfigurationItemBaseUtilCmn.js");
class UnmatchedCIItemUtilCmn extends ConfigurationItemBaseUtilCmn_1.ConfigurationItemBaseUtilCmn {
    constructor() {
        super();
        this.CI_CLASS_NAME = "cmdb_ci_unclassed_hardware";
        this.UNMATCHED_CI_CLASS_NAME = "sn_sec_cmn_unmatched_ci";
        this.INCOMPLETE_IP_CLASS = "cmdb_ci_incomplete_ip";
        this.checkFieldValidity();
    }
    checkFieldValidity() { }
    createNetworkAdapterCI(ciInfo) {
        return null;
    }
    createIpAddressCI(ciInfo, payload) {
        return null;
    }
    createIncompleteIPCI(ciInfo, payload) {
        return null;
    }
    hasOnlyIp(ciInfo) {
        return false;
    }
    //@ts-ignore
    createPayload(ciInfo, integration, payload) {
        return null;
    }
    _createNWAAndRelationsPayload(ciInfo, item, relations, networkAdaptors) { }
    _createIPAndRelationsPayload(ciInfo, item, items, relations, referenceItems, payload) { }
    createCIUsingGlide(payload, integration, domainID, detailResponse) {
        return null;
    }
    type() {
        return 'UnmatchedCIItemUtilCmn';
    }
}
exports.UnmatchedCIItemUtilCmn = UnmatchedCIItemUtilCmn;
//# sourceMappingURL=UnmatchedCIItemUtilCmn.js.map