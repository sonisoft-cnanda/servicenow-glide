import { Context } from '../imports/Context'
import { Function } from '../imports/Function'

export class MessageSetupScriptObject {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    callbackSetup(channelId?: string, toPhoneNumber?: string, userTable?: string, userDocument?: string, callbackId?: string): Record<any, any> {
        return {} as any;
    }
    messageSetup(providerApplicationId?: string, fromPhoneNumber?: string, toPhoneNumber?: string, message?: string, userTable?: string, userDocument?: string, attachmentId?: string): Record<any, any> {
        return {} as any;
    }
    static validateChannelProfile(userTable?: string, userDocument?: string, providerInboundId?: string, clientChannelUserId?: string, channelSysId?: string): Record<any, any> {
        return {} as any;
    }
}
