import { Context } from '../imports/Context';
import { Function } from '../imports/Function';
import { NativeArray } from '../imports/NativeArray';

export class Preferences {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {}
    getDestinations(): NativeArray {
        return new NativeArray();
    }
    getDestinationsByChannel(channelObj?: any): NativeArray {
        return new NativeArray();
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
