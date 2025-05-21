"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestAuthAPI = void 0;
const HttpRequestAuthedData_1 = require("../imports/HttpRequestAuthedData.js");
const AuthCredential_1 = require("../imports/AuthCredential.js");
const HttpRequestData_1 = require("../imports/HttpRequestData.js");
class RequestAuthAPI {
    constructor() { }
    generateAuth() {
        return new HttpRequestAuthedData_1.HttpRequestAuthedData();
    }
    getAuthCredential() {
        return new AuthCredential_1.AuthCredential();
    }
    getHttpRequestData() {
        return new HttpRequestData_1.HttpRequestData();
    }
    resetAuthCredential() {
    }
}
exports.RequestAuthAPI = RequestAuthAPI;
//# sourceMappingURL=RequestAuthAPI.js.map