"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreferenceDestination = void 0;
const GlideRecord_1 = require("./GlideRecord.js");
class PreferenceDestination {
    constructor(cx, args, ctorObj, inNewExpr) { }
    getChannel() {
        return new GlideRecord_1.GlideRecord("");
    }
    getDeliverTo() {
        return "";
    }
    getDestinationType() {
        return new GlideRecord_1.GlideRecord("");
    }
    isActive(notificationObj) {
        return false;
    }
    isOverridden(notificationObj) {
        return false;
    }
    setActive(arg1, arg2) {
    }
}
exports.PreferenceDestination = PreferenceDestination;
//# sourceMappingURL=PreferenceDestination.js.map