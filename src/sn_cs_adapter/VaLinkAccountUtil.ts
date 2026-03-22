import { Context } from '../imports/Context'
import { Function } from '../imports/Function'

export class VaLinkAccountUtil {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    elevateSession(providerAppId?: string, providerUserId?: string, sysUserId?: string, tokenPayload?: string, interactionSysId?: string): boolean {
        return false;
    }
    getChallengeURL(deviceId?: string, deviceType?: string, providerChannelidentityId?: string, providerUserId?: string, providerUserName?: string, conversationId?: string): string {
        return "";
    }
    linkOauthUser(providerAppId?: string, providerUserId?: string, accessToken?: string): void {
        
    }
    logout(messageAuthId?: string, providerUserId?: string): boolean {
        return false;
    }
    unLinkUserAccount(messageAuthId?: string, providerUserId?: string, channelId?: string): boolean {
        return false;
    }
}
