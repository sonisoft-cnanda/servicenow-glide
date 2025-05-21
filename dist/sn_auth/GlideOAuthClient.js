"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlideOAuthClient = void 0;
const ScopedGlideOAuthToken_1 = require("../imports/ScopedGlideOAuthToken.js");
const ScopedGlideOAuthStringMap_1 = require("../imports/ScopedGlideOAuthStringMap.js");
const ScopedGlideOAuthClientResponse_1 = require("../imports/ScopedGlideOAuthClientResponse.js");
class GlideOAuthClient {
    constructor() { }
    getAuthorizationURL(authReq) {
        return "";
    }
    getEndSessionLogoutURL(logoutReq) {
        return "";
    }
    getToken(requestor, provideProfileId) {
        return new ScopedGlideOAuthToken_1.ScopedGlideOAuthToken();
    }
    getUserNameAndClaimsByAuthorization(authResp) {
        return new ScopedGlideOAuthToken_1.ScopedGlideOAuthToken();
    }
    initAuthzReqParams(requestorContext, requestorId, oauthEntityProfileId) {
        return new ScopedGlideOAuthStringMap_1.ScopedGlideOAuthStringMap();
    }
    requestToken(clientName, jsonString) {
        return new ScopedGlideOAuthClientResponse_1.ScopedGlideOAuthClientResponse();
    }
    requestTokenByRequest(clientName, request) {
        return new ScopedGlideOAuthClientResponse_1.ScopedGlideOAuthClientResponse();
    }
    requestTokenWithInitiator(initiatorSysId, authzResponseParams) {
        return new ScopedGlideOAuthToken_1.ScopedGlideOAuthToken();
    }
    revokeToken(clientName, accessToken, refreshToken, req) {
        return new ScopedGlideOAuthClientResponse_1.ScopedGlideOAuthClientResponse();
    }
    setPersonal(personal) {
    }
    validateAuthorizationResponse(authResp) {
        return false;
    }
}
exports.GlideOAuthClient = GlideOAuthClient;
//# sourceMappingURL=GlideOAuthClient.js.map