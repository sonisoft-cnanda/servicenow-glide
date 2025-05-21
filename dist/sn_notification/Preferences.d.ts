import { Context } from '../imports/Context.js';
import { Function } from '../imports/Function.js';
import { NativeArray } from '../imports/NativeArray.js';
export declare class Preferences {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean);
    getDestinations(): NativeArray;
    getDestinationsByChannel(channelObj?: any): NativeArray;
    getUserGlobalPreference(): boolean;
    setNotificationPreference(notificationSysId?: string, send?: boolean): boolean;
    setUserGlobalPreference(send?: boolean): boolean;
}
//# sourceMappingURL=Preferences.d.ts.map