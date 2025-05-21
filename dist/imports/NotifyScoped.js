"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotifyScoped = void 0;
const GlideRecord_1 = require("./GlideRecord.js");
class NotifyScoped {
    constructor(cx, args, funObj, inNewExpr) { }
    call(cx, scope, args, funObj) {
    }
    conferenceCall(context, scope, args, funObj) {
        return new GlideRecord_1.GlideRecord("");
    }
    dequeueCall(context, scope, args, funObj) {
    }
    forwardCall(context, scope, args, funObj) {
    }
    getAvailableClients(context, scope, args, funObj) {
        return new GlideRecord_1.GlideRecord("");
    }
    getParentCallID(context, scope, args, funObj) {
        return "";
    }
    getPhoneNumbers(cx, scope, args, funObj) {
        return new Array();
    }
    getShortCodes(cx, scope, args, funObj) {
        return new Array();
    }
    getTokenTTL(owner) {
        return "";
    }
    getTokens(context, scope, args, funObj) {
        return "";
    }
    hasCapability(cx, scope, args, funObj) {
        return false;
    }
    kick(context, scope, args, funObj) {
    }
    modifyCall(context, scope, args, funObj) {
    }
    mute(context, scope, args, funObj) {
    }
    queueCall(context, scope, args, funObj) {
    }
    sendBulkSMS(cx, scope, args, funObj) {
        return "";
    }
    sendSMS(cx, scope, args, funObj) {
        return "";
    }
    unmute(context, scope, args, funObj) {
    }
}
exports.NotifyScoped = NotifyScoped;
//# sourceMappingURL=NotifyScoped.js.map