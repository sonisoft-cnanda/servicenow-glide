"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RESTMessageV2 = void 0;
const RESTResponseV2_1 = require("../imports/RESTResponseV2.js");
class RESTMessageV2 {
    constructor(messageName, methodName) { }
    disableForcedVariableSubstitution() {
    }
    execute() {
        return new RESTResponseV2_1.RESTResponseV2();
    }
    executeAsync() {
        return new RESTResponseV2_1.RESTResponseV2();
    }
    getEccTopic() {
        return "";
    }
    getEndpoint() {
        return "";
    }
    getParameters() {
        return {};
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
    saveResponseBodyAsAttachment(tableName, recordSysId, filename, encryptContext) {
    }
    setAuthenticationProfile(type, profileId) {
    }
    setBasicAuth(userName, userPass) {
    }
    setEccCorrelator(correlator) {
    }
    setEccParameter(name, value) {
    }
    setEccTopic(topic) {
    }
    setEndpoint(endpoint) {
    }
    setFollowRedirect(followRedirect) {
    }
    setHttpMethod(methodName) {
    }
    setHttpTimeout(timeoutMs) {
    }
    setLogLevel(logLevel) {
    }
    setMIDServer(midServer) {
    }
    setMutualAuth(protocolName) {
    }
    setQueryParameter(name, value) {
    }
    setRequestBody(content) {
    }
    setRequestBodyFromAttachment(attachmentSysId) {
    }
    setRequestHeader(name, value) {
    }
    setRequestorProfile(requestorContext, requestorId) {
    }
    setStringParameter(name, value) {
    }
    setStringParameterNoEscape(name, value) {
    }
}
exports.RESTMessageV2 = RESTMessageV2;
//# sourceMappingURL=RESTMessageV2.js.map