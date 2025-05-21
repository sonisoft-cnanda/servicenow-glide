import { Context } from './Context.js';
import { Function } from './Function.js';
import { NativeArray } from './NativeArray.js';
export declare class Preferences {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean);
    getDestinations(): NativeArray;
    getDestinationsByChannel(channelObj?: any): NativeArray;
    getUserGlobalPreference(): boolean;
    setNotificationPreference(notificationSysId?: string, send?: boolean): boolean;
    setUserGlobalPreference(send?: boolean): boolean;
}
//# sourceMappingURL=Preferences.d.ts.map