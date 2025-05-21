"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Preferences = void 0;
const NativeArray_1 = require("./NativeArray.js");
class Preferences {
    constructor(cx, args, ctorObj, inNewExpr) { }
    getDestinations() {
        return new NativeArray_1.NativeArray();
    }
    getDestinationsByChannel(channelObj) {
        return new NativeArray_1.NativeArray();
    }
    getUserGlobalPreference() {
        return false;
    }
    setNotificationPreference(notificationSysId, send) {
        return false;
    }
    setUserGlobalPreference(send) {
        return false;
    }
}
exports.Preferences = Preferences;
//# sourceMappingURL=Preferences.js.map