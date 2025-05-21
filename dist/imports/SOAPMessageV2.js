"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SOAPMessageV2 = void 0;
const SOAPResponseV2_1 = require("./SOAPResponseV2.js");
class SOAPMessageV2 {
    constructor(cx, args, ctorObj, inNewExpr) { }
    execute() {
        return new SOAPResponseV2_1.SOAPResponseV2();
    }
    executeAsync() {
        return new SOAPResponseV2_1.SOAPResponseV2();
    }
    getEndpoint() {
        return "";
    }
    getRequestBody() {
        return "";
    }
    getRequestHeader(headerName) {
        return "";
    }
    getRequestHeaders() {
        return {};
    }
    getVariables() {
        return new Array();
    }
    setAuthenticationProfile(type, profileName) {
    }
    setBasicAuth(userName, password) {
    }
    setEccCorrelator(correlator) {
    }
    setEccParameter(parameterName, value) {
    }
    setEndpoint(endpoint) {
    }
    setHttpTimeout(timeoutMs) {
    }
    setLogLevel(logLevel) {
    }
    setMIDServer(midServerName) {
    }
    setMutualAuth(mutualAuthProtocol) {
    }
    setRequestBody(requestBody) {
    }
    setRequestHeader(headerName, headerValue) {
    }
    setSOAPAction(soapAction) {
    }
    setStringParameter(parameterName, value) {
    }
    setStringParameterNoEscape(parameterName, value) {
    }
    setWSSecurity(keystoreId, keystoreAlias, keystorePassword, certficateId) {
    }
    setWSSecurityUsernameToken(username, password) {
    }
    setWSSecurityX509Token(keystoreId, keystoreAlias, keystorePassword, certficateId) {
    }
}
exports.SOAPMessageV2 = SOAPMessageV2;
//# sourceMappingURL=SOAPMessageV2.js.map