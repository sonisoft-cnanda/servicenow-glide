"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RESTResponseV2 = void 0;
class RESTResponseV2 {
    constructor(cx, args, ctorObj, inNewExpr) { }
    getAllHeaders() {
        return new Array();
    }
    getBody() {
        return "";
    }
    getCookies() {
        return null;
    }
    getErrorCode() {
        return 0;
    }
    getErrorMessage() {
        return "";
    }
    getHeader(name) {
        return "";
    }
    getHeaders() {
        return {};
    }
    getQueryString() {
        return "";
    }
    getResponseAttachmentSysid() {
        return "";
    }
    getStatusCode() {
        return 0;
    }
    haveError() {
        return false;
    }
    waitForResponse(timeoutSecs) {
    }
}
exports.RESTResponseV2 = RESTResponseV2;
//# sourceMappingURL=RESTResponseV2.js.map