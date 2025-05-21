"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlideSession = void 0;
const Stack_1 = require("./Stack.js");
const ChoiceList_1 = require("./ChoiceList.js");
const IPAddress_1 = require("./IPAddress.js");
const CryptoModulePicker_1 = require("./CryptoModulePicker.js");
const EncryptionContext_1 = require("./EncryptionContext.js");
const HttpSession_1 = require("./HttpSession.js");
const ScopedKMFKaaProfile_1 = require("./ScopedKMFKaaProfile.js");
const GlideStack_1 = require("./GlideStack.js");
const TimeZone_1 = require("./TimeZone.js");
const GlideUser_1 = require("./GlideUser.js");
class GlideSession {
    constructor() { }
    addErrorMessage(message) {
    }
    addInfoMessage(message) {
    }
    addTrivialMessage(message) {
    }
    checkActiveDBs() {
    }
    clearClientData(name) {
    }
    clearProperty(key) {
    }
    clearWatchField() {
    }
    disableQueryCategoryPool(poolName) {
    }
    disableSeparation() {
    }
    disconnect(releaseMutexes) {
    }
    enableSeparation() {
    }
    get() {
        return new GlideSession();
    }
    getActivatedElevatedRoles() {
        return "";
    }
    getAvailableElevatedRoles() {
        return "";
    }
    getBooleanProperty(key, bDefault) {
        return false;
    }
    getBusinessRuleStack() {
        return new Stack_1.Stack();
    }
    getClientData(name) {
        return "";
    }
    getClientDataMap() {
        return new ChoiceList_1.ChoiceList();
    }
    getClientIP() {
        return new IPAddress_1.IPAddress();
    }
    getContextualMode() {
        return "";
    }
    getCryptoModulePicker() {
        return new CryptoModulePicker_1.CryptoModulePicker();
    }
    getCryptoModulePickerForTableWithSingleModule(tableName) {
        return new CryptoModulePicker_1.CryptoModulePicker();
    }
    getCurrentDomainID() {
        return "";
    }
    getDateFormat(style) {
        return "";
    }
    getDateTimeFormat(dateStyle) {
        return "";
    }
    getEncryptionContext() {
        return new EncryptionContext_1.EncryptionContext();
    }
    getFullName() {
        return "";
    }
    getHttpSession() {
        return new HttpSession_1.HttpSession();
    }
    getIntProperty(key, iDefault) {
        return 0;
    }
    getKaaProfile() {
        return new ScopedKMFKaaProfile_1.ScopedKMFKaaProfile();
    }
    getLanguage() {
        return "";
    }
    getLoginHome(direct) {
        return "";
    }
    getNumberOfWaiters() {
        return 0;
    }
    getProperty(key) {
        return null;
    }
    getRoles(includeDefaultRoles) {
        return "";
    }
    getRunEngines() {
        return false;
    }
    getSeparationValue() {
        return "";
    }
    getSessionID() {
        return "";
    }
    getSessionKey() {
        return "";
    }
    getStack(stackName) {
        return new GlideStack_1.GlideStack();
    }
    getStackName() {
        return "";
    }
    getTimeFormat() {
        return "";
    }
    getTimeZone() {
        return new TimeZone_1.TimeZone();
    }
    getTimeZoneName() {
        return "";
    }
    getTimeZoneShortName() {
        return "";
    }
    getUID() {
        return "";
    }
    getURI() {
        return "";
    }
    getUser() {
        return new GlideUser_1.GlideUser();
    }
    getUserName() {
        return "";
    }
    getWatchField() {
        return "";
    }
    getWorkflow() {
        return false;
    }
    hasRole(appRoles) {
        return false;
    }
    impersonate(userSysId) {
        return "";
    }
    isInteractive() {
        return false;
    }
    isLockedOut() {
        return false;
    }
    isLoggedIn() {
        return false;
    }
    isOverridingQueryRoute(poolGR) {
        return false;
    }
    isQueryCategoryPoolDisabled(poolName) {
        return false;
    }
    loadUserByID(userSysId) {
        return new GlideUser_1.GlideUser();
    }
    onlineImpersonate(userSysId) {
        return "";
    }
    onlineUnimpersonate() {
        return "";
    }
    putClientData(name, value) {
    }
    putProperty(key, value) {
    }
    resetDisabledQueryCategoryPool(poolName) {
    }
    resetOverrideQueryCategoryPool() {
    }
    resetURI() {
        return "";
    }
    setCacheFlush(onOrOff) {
        return false;
    }
    setCacheIgnoreFlushTable(table) {
        return "";
    }
    setContextualMode(mode) {
    }
    setDateFormat(dateFormat) {
    }
    setDomainID(domainID) {
    }
    setInteractive(b) {
    }
    setLanguage(language) {
    }
    setOverrideQueryCategoryPool(poolGR) {
    }
    setRunEngines(onOrOff) {
        return false;
    }
    setStrictQuery(b) {
        return false;
    }
    setTimeFormat(timeFormat) {
    }
    setTimeZoneName(timezoneName) {
    }
    setURI(uri) {
    }
    setWatchField(id) {
    }
    setWorkflow(onOrOff) {
        return false;
    }
}
exports.GlideSession = GlideSession;
//# sourceMappingURL=GlideSession.js.map