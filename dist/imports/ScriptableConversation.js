"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScriptableConversation = void 0;
class ScriptableConversation {
    constructor(cx, args, ctorObj, inNewExpr) { }
    addSubscriber(userSysID, silent) {
    }
    create(options) {
        return new ScriptableConversation();
    }
    get(documentSysID, documentTable) {
        return new ScriptableConversation();
    }
    getAgentName(agentSysUserID) {
        return "";
    }
    getDeviceType() {
        return "";
    }
    getLiveGroupProfileIdByInteractionMetadata(table, id) {
        return "";
    }
    getName() {
        return "";
    }
    getRecordTableName() {
        return "";
    }
    getSubscribers() {
        return new Array();
    }
    getSysID() {
        return "";
    }
    getVersion(conversationSysId) {
        return "";
    }
    removeSubscriber(userSysID, silent) {
    }
    sendMessage(options) {
    }
    updateInteractionInternalTranscript(interactionId) {
        return false;
    }
}
exports.ScriptableConversation = ScriptableConversation;
//# sourceMappingURL=ScriptableConversation.js.map