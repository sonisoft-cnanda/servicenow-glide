"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlideOAuthClientResponse = void 0;
const GlideOAuthToken_1 = require("./GlideOAuthToken.js");
class GlideOAuthClientResponse {
    constructor() { }
    getBody() {
        return "";
    }
    getContentType() {
        return "";
    }
    getErrorMessage() {
        return "";
    }
    getResponseCode() {
        return 0;
    }
    getResponseParameters() {
        return {};
    }
    getToken() {
        return new GlideOAuthToken_1.GlideOAuthToken();
    }
}
exports.GlideOAuthClientResponse = GlideOAuthClientResponse;
//# sourceMappingURL=GlideOAuthClientResponse.js.map