"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlideSystemUserSession = void 0;
const UpgradeDebuggerResult_1 = require("../imports/UpgradeDebuggerResult.js");
const GlideUser_1 = require("../imports/GlideUser.js");
class GlideSystemUserSession {
    addErrorMessage(error, messageKey) {
    }
    addErrorMessageNoSanitization(error, messageKey) {
    }
    addInfoMessage(message, messageKey) {
    }
    addInfoMessageNoSanitization(message, messageKey) {
    }
    addMessage(bucket, message, messageKey) {
    }
    addUpgradeDebuggerArtifact(tableName, sysId) {
    }
    createUser(common_name) {
        return "";
    }
    flushAccessMessages() {
    }
    flushMessages() {
    }
    getAccessMessages() {
        return new Array();
    }
    getCurrentApplicationId() {
        return "";
    }
    getCurrentApplicationName() {
        return "";
    }
    getCurrentApplicationScope() {
        return "";
    }
    getDateFormat() {
        return "";
    }
    getDateTimeFormat() {
        return "";
    }
    getErrorMessages() {
        return new Array();
    }
    getImpersonatingUserDisplayName() {
        return "";
    }
    getImpersonatingUserID() {
        return "";
    }
    getImpersonatingUserName() {
        return "";
    }
    getInfoMessages() {
        return new Array();
    }
    getMessages(type) {
        return new Array();
    }
    getNavMessage() {
        return null;
    }
    getSessionToken() {
        return "";
    }
    getSysTimeZone() {
        return "";
    }
    getTimeFormat() {
        return "";
    }
    getTrivialMessages() {
        return new Array();
    }
    getUpgradeDebuggerResult() {
        return new UpgradeDebuggerResult_1.UpgradeDebuggerResult();
    }
    getUrlOnStack() {
        return "";
    }
    getUser() {
        return new GlideUser_1.GlideUser();
    }
    getUserDisplayName() {
        return "";
    }
    getUserID() {
        return "";
    }
    getUserName() {
        return "";
    }
    getUserNameByUserID(userID) {
        return "";
    }
    hasMessages(buckets) {
        return false;
    }
    hasRoleInGroup(role, group) {
        return false;
    }
    isCurrentApplicationCrossScopeProtected() {
        return false;
    }
    isCurrentApplicationCustom() {
        return false;
    }
    isCurrentApplicationInGlobalScope() {
        return false;
    }
    isInteractive() {
        return false;
    }
    isLoggedIn() {
        return false;
    }
    isScopeAdminForAnyApp() {
        return false;
    }
    isUpgradeDebuggerEnabled() {
        return false;
    }
    setCurrentApplicationId(appId) {
        return "";
    }
    setRedirect(o) {
    }
    setReturn(o) {
    }
    setTrackMetadataDeletes(onOrOff) {
        return false;
    }
    statsThisSession(onOff) {
    }
    statsThisSessionThreshold(threshold) {
    }
    suppressTextIndex(suppress) {
        return false;
    }
    suppressUpdateSynch(suppress) {
        return false;
    }
    updateUserRoles(userSysId) {
    }
    user() {
        return "";
    }
    userID() {
        return "";
    }
    user_id() {
        return "";
    }
}
exports.GlideSystemUserSession = GlideSystemUserSession;
//# sourceMappingURL=GlideSystemUserSession.js.map