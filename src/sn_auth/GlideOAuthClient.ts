import { GlideOAuthClientRequest } from "./GlideOAuthClientRequest";
import { GlideOAuthClientResponse } from "./GlideOAuthClientResponse";
import { GlideOAuthStringMap } from "./GlideOAuthStringMap";
import { GlideOAuthToken } from "./GlideOAuthToken";

export class GlideOAuthClient {
    constructor() {  }
    getAuthorizationURL(authReq?: Record<any, any>): string {
        return "";
    }
    getEndSessionLogoutURL(logoutReq?: Record<any, any>): string {
        return "";
    }
    getToken(requestor?: string, provideProfileId?: string): GlideOAuthToken {
        return null as any;
    }
    getUserNameAndClaimsByAuthorization(authResp?: Record<any, any>): GlideOAuthToken {
        return null as any;
    }
    initAuthzReqParams(requestorContext?: string, requestorId?: string, oauthEntityProfileId?: string): GlideOAuthStringMap {
        return null as any;
    }
    requestToken(clientName?: string, jsonString?: string): GlideOAuthClientResponse {
        return null as any;
    }
    requestTokenByRequest(clientName?: string, request?: GlideOAuthClientRequest): GlideOAuthClientResponse {
        return null as any;
    }
    requestTokenWithInitiator(initiatorSysId?: string, authzResponseParams?: Record<any, any>): GlideOAuthToken {
        return null as any;
    }
    revokeToken(clientName?: string, accessToken?: string, refreshToken?: string, req?: GlideOAuthClientRequest): GlideOAuthClientResponse {
        return null as any;
    }
    revokeTokensForUser(userId?: string): void {
        
    }
    setPersonal(personal?: boolean): void {
        
    }
    validateAuthorizationResponse(authResp?: Record<any, any>): boolean {
        return false;
    }
}
