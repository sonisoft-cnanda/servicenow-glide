import { ScopedGlideOAuthToken } from '../imports/ScopedGlideOAuthToken';
import { ScopedGlideOAuthStringMap } from '../imports/ScopedGlideOAuthStringMap';
import { ScopedGlideOAuthClientResponse } from '../imports/ScopedGlideOAuthClientResponse';
import { ScopedGlideOAuthClientRequest } from '../imports/ScopedGlideOAuthClientRequest';

export class GlideOAuthClient {
    constructor() {}
    getAuthorizationURL(authReq?: Record<any, any>): string {
        return "";
    }
    getEndSessionLogoutURL(logoutReq?: Record<any, any>): string {
        return "";
    }
    getToken(requestor?: string, provideProfileId?: string): ScopedGlideOAuthToken {
        return new ScopedGlideOAuthToken();
    }
    getUserNameAndClaimsByAuthorization(authResp?: Record<any, any>): ScopedGlideOAuthToken {
        return new ScopedGlideOAuthToken();
    }
    initAuthzReqParams(requestorContext?: string, requestorId?: string, oauthEntityProfileId?: string): ScopedGlideOAuthStringMap {
        return new ScopedGlideOAuthStringMap();
    }
    requestToken(clientName?: string, jsonString?: string): ScopedGlideOAuthClientResponse {
        return new ScopedGlideOAuthClientResponse();
    }
    requestTokenByRequest(clientName?: string, request?: ScopedGlideOAuthClientRequest): ScopedGlideOAuthClientResponse {
        return new ScopedGlideOAuthClientResponse();
    }
    requestTokenWithInitiator(initiatorSysId?: string, authzResponseParams?: Record<any, any>): ScopedGlideOAuthToken {
        return new ScopedGlideOAuthToken();
    }
    revokeToken(clientName?: string, accessToken?: string, refreshToken?: string, req?: ScopedGlideOAuthClientRequest): ScopedGlideOAuthClientResponse {
        return new ScopedGlideOAuthClientResponse();
    }
    setPersonal(personal?: boolean): void {
        
    }
    validateAuthorizationResponse(authResp?: Record<any, any>): boolean {
        return false;
    }
}
