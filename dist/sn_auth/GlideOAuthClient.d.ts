import { ScopedGlideOAuthToken } from '../imports/ScopedGlideOAuthToken.js';
import { ScopedGlideOAuthStringMap } from '../imports/ScopedGlideOAuthStringMap.js';
import { ScopedGlideOAuthClientResponse } from '../imports/ScopedGlideOAuthClientResponse.js';
import { ScopedGlideOAuthClientRequest } from '../imports/ScopedGlideOAuthClientRequest.js';
export declare class GlideOAuthClient {
    constructor();
    getAuthorizationURL(authReq?: Record<any, any>): string;
    getEndSessionLogoutURL(logoutReq?: Record<any, any>): string;
    getToken(requestor?: string, provideProfileId?: string): ScopedGlideOAuthToken;
    getUserNameAndClaimsByAuthorization(authResp?: Record<any, any>): ScopedGlideOAuthToken;
    initAuthzReqParams(requestorContext?: string, requestorId?: string, oauthEntityProfileId?: string): ScopedGlideOAuthStringMap;
    requestToken(clientName?: string, jsonString?: string): ScopedGlideOAuthClientResponse;
    requestTokenByRequest(clientName?: string, request?: ScopedGlideOAuthClientRequest): ScopedGlideOAuthClientResponse;
    requestTokenWithInitiator(initiatorSysId?: string, authzResponseParams?: Record<any, any>): ScopedGlideOAuthToken;
    revokeToken(clientName?: string, accessToken?: string, refreshToken?: string, req?: ScopedGlideOAuthClientRequest): ScopedGlideOAuthClientResponse;
    setPersonal(personal?: boolean): void;
    validateAuthorizationResponse(authResp?: Record<any, any>): boolean;
}
//# sourceMappingURL=GlideOAuthClient.d.ts.map