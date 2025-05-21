"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HostUtil = void 0;
const sn_sec_cmn_1 = require("../sn_sec_cmn/index.js");
class HostUtil {
    constructor() {
        this.HostUtilCommon = new sn_sec_cmn_1.HostUtilCommon();
    }
    getNetworkMappings(networkInterfaces, topIPs, topMacs, ignoredIPs, ignoredMacs) {
        return [];
    }
    getValidValues(sourceValues, ignoreValues) {
        return [];
    }
    getDiscoveredItemState(ci) {
        return '';
    }
    isUnmatchedCI(ci) {
        return false;
    }
    initializeHostAttributeRecord(host, hostAttribTable) {
        return null;
    }
    type() {
        return 'HostUtil';
    }
}
exports.HostUtil = HostUtil;
//# sourceMappingURL=HostUtil.js.map