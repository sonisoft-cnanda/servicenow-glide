import { Context } from '../imports/Context'
import { Function } from '../imports/Function'

export class AsyncChatSetupScriptObject {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    asyncChatSetup(clientSysID?: string, message?: string, attachmentId?: string): Record<any, any> {
        return {} as any;
    }
    static validateChannelProfile(userTable?: string, userDocument?: string, clientChannelUserId?: string): Record<any, any> {
        return {} as any;
    }
}
