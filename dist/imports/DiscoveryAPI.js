"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscoveryAPI = void 0;
const Scriptable_1 = require("./Scriptable.js");
class DiscoveryAPI {
    createPageCountRecordForPatternExecution(outputEccId, discoveryStatus) {
        return "";
    }
    discoverIpAddress(ipAddress, application, source) {
        return new Scriptable_1.Scriptable();
    }
    getMidServerFromSchedule(scheduler) {
        return "";
    }
    reportCiIpAddressStatus(ipAddress, discoveryStatusSysId) {
        return new Scriptable_1.Scriptable();
    }
    reportCiStatus(discoveryStatusSysId) {
        return new Scriptable_1.Scriptable();
    }
}
exports.DiscoveryAPI = DiscoveryAPI;
//# sourceMappingURL=DiscoveryAPI.js.map