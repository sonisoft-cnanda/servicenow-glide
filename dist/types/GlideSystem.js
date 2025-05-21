"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlideSystem = void 0;
const UpgradeDebuggerResult_1 = require("../imports/UpgradeDebuggerResult.js");
const GlideUser_1 = require("../imports/GlideUser.js");
const GlideDateTime_1 = require("../imports/GlideDateTime.js");
const NativeObject_1 = require("../imports/NativeObject.js");
class GlideSystem {
    OLAPBuildTimeDimension() {
    }
    _cacheFlush() {
    }
    _dropTable(tableName) {
    }
    _getScriptError(script, scopeId) {
        return "";
    }
    _getScriptErrorForTable(script, scopeId, table) {
        return "";
    }
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
    alterSqlFieldDefintion(table, element, oldLength) {
    }
    appLoad(dirName) {
    }
    appLoadData(dirName) {
    }
    appLoadDemo(dirName) {
    }
    appUpdate(dirName) {
    }
    appUpgrade(dirName) {
    }
    beginningOfCurrentHour() {
        return "";
    }
    beginningOfCurrentMinute() {
        return "";
    }
    beginningOfDay(o) {
        return "";
    }
    beginningOfLast120Days() {
        return "";
    }
    beginningOfLast12Months() {
        return "";
    }
    beginningOfLast15Minutes() {
        return "";
    }
    beginningOfLast2Hours() {
        return "";
    }
    beginningOfLast2Quarters() {
        return "";
    }
    beginningOfLast2Years() {
        return "";
    }
    beginningOfLast30Days() {
        return "";
    }
    beginningOfLast30Minutes() {
        return "";
    }
    beginningOfLast3Months() {
        return "";
    }
    beginningOfLast45Minutes() {
        return "";
    }
    beginningOfLast60Days() {
        return "";
    }
    beginningOfLast6Months() {
        return "";
    }
    beginningOfLast7Days() {
        return "";
    }
    beginningOfLast90Days() {
        return "";
    }
    beginningOfLast9Months() {
        return "";
    }
    beginningOfLastHour() {
        return "";
    }
    beginningOfLastMinute() {
        return "";
    }
    beginningOfLastMonth() {
        return "";
    }
    beginningOfLastQuarter() {
        return "";
    }
    beginningOfLastSchedulePeriod(scheduleId) {
        return "";
    }
    beginningOfLastWeek() {
        return "";
    }
    beginningOfLastYear() {
        return "";
    }
    beginningOfMonth(o) {
        return "";
    }
    beginningOfNext2Quarters() {
        return "";
    }
    beginningOfNextMonth() {
        return "";
    }
    beginningOfNextQuarter() {
        return "";
    }
    beginningOfNextSchedulePeriod(scheduleId) {
        return "";
    }
    beginningOfNextWeek() {
        return "";
    }
    beginningOfNextYear() {
        return "";
    }
    beginningOfOneYearAgo() {
        return "";
    }
    beginningOfSchedulePeriodsAgo(periodsAgo, scheduleId) {
        return "";
    }
    beginningOfThisMonth() {
        return "";
    }
    beginningOfThisQuarter() {
        return "";
    }
    beginningOfThisSchedulePeriod(scheduleId) {
        return "";
    }
    beginningOfThisWeek() {
        return "";
    }
    beginningOfThisYear() {
        return "";
    }
    beginningOfToday() {
        return "";
    }
    beginningOfTomorrow() {
        return "";
    }
    beginningOfWeek(o) {
        return "";
    }
    beginningOfYear(o) {
        return "";
    }
    beginningOfYesterday() {
        return "";
    }
    breaker(obj) {
    }
    cacheFlush(catalog, invalidateMetaData) {
    }
    calDateDiff(startDate, endDate, numericValue) {
        return "";
    }
    createUser(common_name) {
        return "";
    }
    dateAdd(unit, offset, basis) {
        return "";
    }
    dateDiff(startDate, endDate, bnumericValue) {
        return "";
    }
    dateGenerate(date, range) {
        return "";
    }
    datePart(interval, value, oper) {
        return "";
    }
    daysAgo(days) {
        return "";
    }
    daysAgoEnd(days) {
        return "";
    }
    daysAgoLocal(days) {
        return "";
    }
    daysAgoStart(days) {
        return "";
    }
    debug(message, parm1, parm2, parm3, parm4, parm5) {
    }
    disableSessionScopeDebug(scopeName) {
    }
    dropColumn(tableName, fieldName) {
    }
    dropColumnQuick(tableName, fieldName) {
    }
    dropTable(tableName) {
    }
    dropTableRecord(dbObject) {
    }
    dumpProperties() {
    }
    dumpPropertiesSecured() {
    }
    enableSessionScopeDebug(scopeName) {
    }
    endOfCurrentHour() {
        return "";
    }
    endOfCurrentMinute() {
        return "";
    }
    endOfDay(o) {
        return "";
    }
    endOfLast120Days() {
        return "";
    }
    endOfLast12Months() {
        return "";
    }
    endOfLast15Minutes() {
        return "";
    }
    endOfLast2Hours() {
        return "";
    }
    endOfLast2Quarters() {
        return "";
    }
    endOfLast2Years() {
        return "";
    }
    endOfLast30Days() {
        return "";
    }
    endOfLast30Minutes() {
        return "";
    }
    endOfLast3Months() {
        return "";
    }
    endOfLast45Minutes() {
        return "";
    }
    endOfLast60Days() {
        return "";
    }
    endOfLast6Months() {
        return "";
    }
    endOfLast7Days() {
        return "";
    }
    endOfLast90Days() {
        return "";
    }
    endOfLast9Months() {
        return "";
    }
    endOfLastHour() {
        return "";
    }
    endOfLastMinute() {
        return "";
    }
    endOfLastMonth() {
        return "";
    }
    endOfLastQuarter() {
        return "";
    }
    endOfLastSchedulePeriod(scheduleId) {
        return "";
    }
    endOfLastWeek() {
        return "";
    }
    endOfLastYear() {
        return "";
    }
    endOfMonth(o) {
        return "";
    }
    endOfNext2Quarters() {
        return "";
    }
    endOfNextMonth() {
        return "";
    }
    endOfNextQuarter() {
        return "";
    }
    endOfNextSchedulePeriod(scheduleId) {
        return "";
    }
    endOfNextWeek() {
        return "";
    }
    endOfNextYear() {
        return "";
    }
    endOfOneYearAgo() {
        return "";
    }
    endOfSchedulePeriodsAgo(periodsAgo, scheduleId) {
        return "";
    }
    endOfThisMonth() {
        return "";
    }
    endOfThisQuarter() {
        return "";
    }
    endOfThisSchedulePeriod(scheduleId) {
        return "";
    }
    endOfThisWeek() {
        return "";
    }
    endOfThisYear() {
        return "";
    }
    endOfToday() {
        return "";
    }
    endOfTomorrow() {
        return "";
    }
    endOfWeek(o) {
        return "";
    }
    endOfYear(o) {
        return "";
    }
    endOfYesterday() {
        return "";
    }
    ensureCompositeIndex(tableName, sfields, indexName) {
    }
    ensureIndex(tableName, elementName) {
        return false;
    }
    error(message, parm1, parm2, parm3, parm4, parm5) {
    }
    escaper(string) {
        return "";
    }
    eventQueue(name, instance, parm1, parm2, queue) {
    }
    eventQueueScheduled(name, instance, parm1, parm2, expiration) {
    }
    eventsProcess() {
    }
    executeCondition(condition) {
        return false;
    }
    executeNow(current) {
        return "";
    }
    fieldExists(tableName, fieldName) {
        return false;
    }
    fileExists(fileName) {
        return false;
    }
    flushAccessMessages() {
    }
    flushMessages() {
    }
    flushStatus() {
    }
    generateGUID(o) {
        return "";
    }
    generateURL(table, key, view) {
        return "";
    }
    getAccessMessages() {
        return new Array();
    }
    getBooleanPreference(key, defaultValue) {
        return false;
    }
    getCallerScopeName() {
        return "";
    }
    getCannotConfigureScopeReason(scopeID) {
        return "";
    }
    getCssCacheVersionString(theme) {
        return "";
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
    getCurrentScopeName() {
        return "";
    }
    getCustomerPrefix() {
        return "";
    }
    getDateFormat() {
        return "";
    }
    getDateTimeFormat() {
        return "";
    }
    getDictionaryEntryPackage(tableName, fieldName) {
        return "";
    }
    getDictionaryEntryScope(tableName, fieldName) {
        return "";
    }
    getDisplayColumn(tableName) {
        return "";
    }
    getDisplayValueFor(table, key, field) {
        return "";
    }
    getDurationDate(duration) {
        return "";
    }
    getErrorMessages() {
        return new Array();
    }
    getEscapedMessage(id, args) {
        return "";
    }
    getEscapedProperty(key, alt) {
        return "";
    }
    getEscapedPropertySecured(key, alt) {
        return "";
    }
    getGlideHome() {
        return "";
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
    getInScopeDBViews() {
        return new Array();
    }
    getInScopeTables() {
        return new Array();
    }
    getInfoMessages() {
        return new Array();
    }
    getInstanceIP() {
        return "";
    }
    getJavaVersion() {
        return "";
    }
    getJellyVariable(name) {
        return null;
    }
    getMaxSchemaNameLength() {
        return 0;
    }
    getMessage(id, args) {
        return "";
    }
    getMessageLang(id, language, args) {
        return "";
    }
    getMessageS(id, args) {
        return "";
    }
    getMessages(type) {
        return new Array();
    }
    getNavMessage() {
        return null;
    }
    getNewAppScopeCompanyPrefix() {
        return "";
    }
    getNodeID() {
        return "";
    }
    getNodeName(o, i) {
        return "";
    }
    getNodeValue(o, i) {
        return "";
    }
    getNumericPreference(key, defaultValue) {
        return 0;
    }
    getPreference(key, defaultValue) {
        return "";
    }
    getProperty(key, alt) {
        return "";
    }
    getPropertySecured(key, alt) {
        return "";
    }
    getScopeIdByElementName(tableName, elementName) {
        return "";
    }
    getScopeIdByRecordId(sysId) {
        return "";
    }
    getScopeLabelByElementName(tableName, elementName) {
        return "";
    }
    getScopeLabelByRecordId(sysId) {
        return "";
    }
    getScopeNameByElementName(tableName, elementName) {
        return "";
    }
    getScopeNameByRecordId(sysId) {
        return "";
    }
    getScriptError(script) {
        return "";
    }
    getScriptErrorFromScope(script, scopeId) {
        return "";
    }
    getSession() {
        return null;
    }
    getSessionID() {
        return "";
    }
    getSessionToken() {
        return "";
    }
    getStyle(tableName, fieldName, fieldValue) {
        return "";
    }
    getSysTimeZone() {
        return "";
    }
    getSystemID() {
        return "";
    }
    getTempDir() {
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
    getVendorPrefixPrefix() {
        return "";
    }
    getXMLNodeList(xml) {
        return new Array();
    }
    getXMLText(xml, xpath) {
        return "";
    }
    globalPut(name, g) {
    }
    hasMessages(buckets) {
        return false;
    }
    hasRightsTo(resourcePath, context) {
        return false;
    }
    hasRole(role) {
        return false;
    }
    hasRoleInGroup(role, group) {
        return false;
    }
    healthCheck(filePattern, reportonly) {
        return false;
    }
    hoursAgo(hours) {
        return "";
    }
    hoursAgoEnd(hours) {
        return "";
    }
    hoursAgoLocal(hours) {
        return "";
    }
    hoursAgoStart(hours) {
        return "";
    }
    include(name) {
        return false;
    }
    indexUpdate(dirName) {
    }
    info(message, parm1, parm2, parm3, parm4, parm5) {
    }
    installationSetting(spec, ref) {
        return "";
    }
    invalidateCache() {
    }
    isCleaningDemoData() {
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
    isDatabaseView(table) {
        return false;
    }
    isDebugging() {
        return false;
    }
    isESLatest() {
        return false;
    }
    isEdgeEncryptedSession() {
        return false;
    }
    isFirstDayOfMonth(o) {
        return false;
    }
    isFirstDayOfWeek(o) {
        return false;
    }
    isFirstDayOfYear(o) {
        return false;
    }
    isInteractive() {
        return false;
    }
    isInteractiveSession() {
        return false;
    }
    isLastDayOfMonth(o) {
        return false;
    }
    isLastDayOfWeek(o) {
        return false;
    }
    isLastDayOfYear(o) {
        return false;
    }
    isLoggedIn() {
        return false;
    }
    isMobile() {
        return false;
    }
    isPaused() {
        return false;
    }
    isPausedForAtfPerformance() {
        return false;
    }
    isScopeAdminForAnyApp() {
        return false;
    }
    isScopedAdminApp() {
        return false;
    }
    isScopedApp() {
        return false;
    }
    isSessionScopeDebugging(scopeName) {
        return false;
    }
    isTableInScope(tableName) {
        return false;
    }
    isUpgradeDebuggerEnabled() {
        return false;
    }
    isValidScript(script) {
        return false;
    }
    isValidScriptFromScope(script, scopeId) {
        return false;
    }
    lastWeek() {
        return "";
    }
    load(fileName) {
    }
    loadBatchScript(fileName) {
    }
    loadFixes(o) {
    }
    loadResource(pluginName, resourcePath) {
    }
    loadUpdates(o) {
    }
    log(message, source) {
    }
    logError(message, source) {
    }
    logWarning(message, source) {
    }
    mergeAttribute(tableName, parm1, parm2) {
    }
    minutesAgo(minutes) {
        return "";
    }
    minutesAgoEnd(minutes) {
        return "";
    }
    minutesAgoStart(minutes) {
        return "";
    }
    monthsAgo(month) {
        return "";
    }
    monthsAgoEnd(month) {
        return "";
    }
    monthsAgoStart(month) {
        return "";
    }
    nil(o) {
        return false;
    }
    now() {
        return "";
    }
    nowDateTime() {
        return "";
    }
    nowGlideDateTime() {
        return new GlideDateTime_1.GlideDateTime();
    }
    nowNoTZ() {
        return "";
    }
    pause() {
    }
    print(toPrint) {
    }
    processDelegatedEvents() {
    }
    publish(channel, data) {
    }
    publishToUser(channel, data, toUser) {
    }
    quartersAgo(quarters) {
        return "";
    }
    quartersAgoEnd(quarters) {
        return "";
    }
    quartersAgoStart(quarters) {
        return "";
    }
    rebuildAllIndexes() {
    }
    rebuildIndexes(tableName) {
    }
    renameTable(tableName, newTableName, cacheFlush) {
    }
    reset() {
        return false;
    }
    resetDB(dbName) {
    }
    resolveIcon(className) {
        return "";
    }
    resume() {
    }
    scheduleScript(scriptName, currentObj, parmString) {
    }
    setCannotCancel(b) {
        return false;
    }
    setCleaningDemoData(cleaning) {
    }
    setCurrentApplicationId(appId) {
        return "";
    }
    setProperty(key, value, description) {
    }
    setRedirect(o) {
    }
    setReturn(o) {
    }
    setTrackMetadataDeletes(onOrOff) {
        return false;
    }
    sleep(i) {
    }
    sql(statement) {
    }
    sqlItemsByField(table, sfields, fwfield, value, limit) {
        return new Array();
    }
    sqlItemsByID(table, sfields, sys_id, limit) {
        return new Array();
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
    tableCreate(name, label) {
        return "";
    }
    tableDrop(name) {
    }
    tableExists(name) {
        return false;
    }
    templateExists(templateName) {
        return false;
    }
    templateOrMacroExists(templateName) {
        return false;
    }
    trace(onOff) {
    }
    transpile(script, swcOptions) {
        return "";
    }
    truncateTable(name) {
    }
    unWrap(url) {
        return "";
    }
    unload(tableName, fileName) {
    }
    unloadAll(path) {
    }
    unloadChoices(tableName, fieldName, baseline) {
    }
    unloadRecordToXML(o, indent) {
        return "";
    }
    unloadWithQuery(tableName, fileName, query) {
    }
    updateSave(o) {
    }
    updateUnload() {
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
    urlEncode(url) {
        return "";
    }
    warn(message, parm1, parm2, parm3, parm4, parm5) {
    }
    workflowFlush(o) {
    }
    xmlToJSON(xmlString) {
        return new NativeObject_1.NativeObject();
    }
    yearsAgo(year) {
        return "";
    }
    yesterday() {
        return "";
    }
}
exports.GlideSystem = GlideSystem;
//# sourceMappingURL=GlideSystem.js.map