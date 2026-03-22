import { GlideRecord } from "../types/GlideRecord";
import { HermesSharedTopicTokenRequest } from "./HermesSharedTopicTokenRequest";
import { HermesTokenRequest } from "./HermesTokenRequest";

export class HermesTokenManager {
    constructor() {  }
    deleteToken(hermesServiceName?: string, appId?: string, issuerInstance?: string): void {
        
    }
    findToken(hermesServiceName?: string, appId?: string, issuerInstance?: string): string {
        return "";
    }
    findTokenByTopic(topicRecord?: GlideRecord): string {
        return "";
    }
    getTokenExpiration(hermesServiceName?: string, appId?: string, issuerInstance?: string): number {
        return 0;
    }
    issueSharedToken(tokenRequest?: HermesSharedTopicTokenRequest, otherNonHermesAcls?: Record<any, any>): string {
        return "";
    }
    issueToken(tokenRequest?: HermesTokenRequest, otherNonHermesAcls?: Record<any, any>): string {
        return "";
    }
    registerToken(token?: string, hermesServiceName?: string, appId?: string, issuerInstance?: string): void {
        
    }
}
