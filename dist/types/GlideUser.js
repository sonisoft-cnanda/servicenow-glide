"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlideUser = void 0;
const GlideRecord_1 = require("../imports/GlideRecord.js");
const GlideMemoryRecord_1 = require("../imports/GlideMemoryRecord.js");
const GlideVector_1 = require("../imports/GlideVector.js");
class GlideUser {
    constructor() { }
    authenticate(user, password) {
        return false;
    }
    authenticateMutualAuthToken() {
        return "";
    }
    authenticateOAuthAccessToken(token) {
        return "";
    }
    authenticateUser(user, password) {
        return "";
    }
    exists() {
        return false;
    }
    getAllGroups() {
        return new Array();
    }
    getAvatar() {
        return "";
    }
    getBusinessNumber() {
        return "";
    }
    getCompanyID() {
        return "";
    }
    getCompanyRecord() {
        return new GlideRecord_1.GlideRecord("");
    }
    getCountry() {
        return "";
    }
    getCurrentUser() {
        return new GlideUser();
    }
    getDateFormat() {
        return "";
    }
    getDateFormatEx(style) {
        return "";
    }
    getDateTimeFormat() {
        return "";
    }
    getDepartmentID() {
        return "";
    }
    getDisplayName() {
        return "";
    }
    getDomainDisplayValue() {
        return "";
    }
    getDomainID() {
        return "";
    }
    getEmail() {
        return "";
    }
    getFirstName() {
        return "";
    }
    getFullName() {
        return "";
    }
    getID() {
        return "";
    }
    getInitials() {
        return "";
    }
    getLanguage() {
        return "";
    }
    getLastName() {
        return "";
    }
    getLocation() {
        return "";
    }
    getManagedGroups() {
        return new Array();
    }
    getManagerID() {
        return "";
    }
    getManagerName() {
        return "";
    }
    getMobileNumber() {
        return "";
    }
    getMyExplicitGroups(u) {
        return new Array();
    }
    getMyGroups(user) {
        return new Array();
    }
    getMyGroupsExcludeAdmin() {
        return new Array();
    }
    getName() {
        return "";
    }
    getPreference(name) {
        return "";
    }
    getRecord() {
        return new GlideMemoryRecord_1.GlideMemoryRecord();
    }
    getRoles() {
        return new GlideVector_1.GlideVector();
    }
    getSysId(name, value) {
        return "";
    }
    getSysIdByEmail(email) {
        return "";
    }
    getSysTimeZone() {
        return "";
    }
    getTZ() {
        return "";
    }
    getTimeFormat() {
        return "";
    }
    getTitle() {
        return "";
    }
    getUser(user) {
        return new GlideUser();
    }
    getUserByEmail(email) {
        return new GlideUser();
    }
    getUserByID(id) {
        return new GlideUser();
    }
    getUserRoles() {
        return new GlideVector_1.GlideVector();
    }
    getUserType() {
        return "";
    }
    hasRole(o) {
        return false;
    }
    hasRoles() {
        return false;
    }
    isACRUser() {
        return false;
    }
    isDefault() {
        return false;
    }
    isExplicitMemberOf(group) {
        return false;
    }
    isLockedOut(userName) {
        return false;
    }
    isMemberOf(group) {
        return false;
    }
    isOpenIDConnect() {
        return false;
    }
    isReadOnlyUser() {
        return false;
    }
    isTimeLimitedCredential() {
        return false;
    }
    isWebSvcAccessOnly(userName) {
        return false;
    }
    isXML() {
        return false;
    }
    resolveNameFromLoginName(name) {
        return "";
    }
    resolveNameFromSysID(sysID) {
        return "";
    }
    resolveSysId(value) {
        return "";
    }
    savePreference(name, value) {
    }
    savePreferences() {
    }
    setDateFormat(df) {
    }
    setDomainID(id) {
    }
    setPreference(name, value) {
    }
    setPreferencesLoaded(b) {
    }
    setTimeFormat(tf) {
    }
}
exports.GlideUser = GlideUser;
//# sourceMappingURL=GlideUser.js.map