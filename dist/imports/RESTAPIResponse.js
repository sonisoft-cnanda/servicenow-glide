"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RESTAPIResponse = void 0;
const RESTAPIResponseStream_1 = require("./RESTAPIResponseStream.js");
class RESTAPIResponse {
    constructor(cx, args, ctorObj, inNewExpr) { }
    getStreamWriter() {
        return new RESTAPIResponseStream_1.RESTAPIResponseStream();
    }
    setBody(body) {
    }
    setContentType(contentType) {
    }
    setError(error) {
    }
    setHeader(name, value) {
    }
    setHeaders(headers) {
    }
    setLocation(locationValue) {
    }
    setStatus(code) {
    }
}
exports.RESTAPIResponse = RESTAPIResponse;
//# sourceMappingURL=RESTAPIResponse.js.map