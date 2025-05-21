"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectionInfoProvider = void 0;
const ConnectionInfo_1 = require("../imports/ConnectionInfo.js");
class ConnectionInfoProvider {
    constructor() { }
    getConnectionInfo(aliasID) {
        return new ConnectionInfo_1.ConnectionInfo();
    }
    getConnectionInfoByDomain(aliasID, domainID) {
        return new ConnectionInfo_1.ConnectionInfo();
    }
    getConnectionInfoList(aliasID) {
        return new Array();
    }
    getConnectionInfoListByDomain(aliasID, domainID) {
        return new Array();
    }
}
exports.ConnectionInfoProvider = ConnectionInfoProvider;
//# sourceMappingURL=ConnectionInfoProvider.js.map