"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectionInfo = void 0;
const ScriptableStandardCredential_1 = require("../imports/ScriptableStandardCredential.js");
class ConnectionInfo {
    constructor(cx, args, ctorObj, inNewExpr) { }
    getAttribute(name) {
        return "";
    }
    getConnectionRetries() {
        return 0;
    }
    getConnectionTimeout() {
        return 0;
    }
    getCredential() {
        return new ScriptableStandardCredential_1.ScriptableStandardCredential();
    }
    getCredentialAttribute(name) {
        return "";
    }
    getDataMap() {
        return {};
    }
    getExtendedAttributes() {
        return {};
    }
    getHost() {
        return "";
    }
    getName() {
        return "";
    }
    getPort() {
        return 0;
    }
    getProtocol() {
        return "";
    }
}
exports.ConnectionInfo = ConnectionInfo;
//# sourceMappingURL=ConnectionInfo.js.map