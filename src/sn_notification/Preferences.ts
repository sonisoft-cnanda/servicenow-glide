import { Context } from '../imports/Context'
import { NativeArray } from '../imports/NativeArray'
import { Function } from '../imports/Function'

export class Preferences {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    getDestinations(): NativeArray {
        return null as any;
    }
    getDestinationsByChannel(channelObj?: any): NativeArray {
        return null as any;
    }
    getUserGlobalPreference(): boolean {
        return false;
    }
    setNotificationPreference(notificationSysId?: string, send?: boolean): boolean {
        return false;
    }
    setUserGlobalPreference(send?: boolean): boolean {
        return false;
    }
}
