"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SOAPResponseV2 = void 0;
class SOAPResponseV2 {
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
    getStatusCode() {
        return 0;
    }
    haveError() {
        return false;
    }
    waitForResponse(timeoutSecs) {
    }
}
exports.SOAPResponseV2 = SOAPResponseV2;
//# sourceMappingURL=SOAPResponseV2.js.map