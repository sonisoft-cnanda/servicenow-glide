import { GlideRecord } from './GlideRecord';
import { UpgradeDebuggerResult } from './UpgradeDebuggerResult';
import { GlideUser } from './GlideUser';
import { GlideDateTime } from './GlideDateTime';
import { NativeObject } from './NativeObject';

export class GlideSystem {
    OLAPBuildTimeDimension(): void {
        
    }
    _cacheFlush(): void {
        
    }
    _dropTable(tableName?: string): void {
        
    }
    _getScriptError(script?: string, scopeId?: string): string {
        return "";
    }
    _getScriptErrorForTable(script?: string, scopeId?: string, table?: string): string {
        return "";
    }
    addErrorMessage(error?: any, messageKey?: string): void {
        
    }
    addErrorMessageNoSanitization(error?: any, messageKey?: string): void {
        
    }
    addInfoMessage(message?: any, messageKey?: string): void {
        
    }
    addInfoMessageNoSanitization(message?: any, messageKey?: string): void {
        
    }
    addMessage(bucket?: string, message?: any, messageKey?: string): void {
        
    }
    addUpgradeDebuggerArtifact(tableName?: string, sysId?: string): void {
        
    }
    alterSqlFieldDefintion(table?: string, element?: string, oldLength?: any): void {
        
    }
    appLoad(dirName?: string): void {
        
    }
    appLoadData(dirName?: string): void {
        
    }
    appLoadDemo(dirName?: string): void {
        
    }
    appUpdate(dirName?: string): void {
        
    }
    appUpgrade(dirName?: string): void {
        
    }
    beginningOfCurrentHour(): string {
        return "";
    }
    beginningOfCurrentMinute(): string {
        return "";
    }
    beginningOfDay(o?: any): string {
        return "";
    }
    beginningOfLast120Days(): string {
        return "";
    }
    beginningOfLast12Months(): string {
        return "";
    }
    beginningOfLast15Minutes(): string {
        return "";
    }
    beginningOfLast2Hours(): string {
        return "";
    }
    beginningOfLast2Quarters(): string {
        return "";
    }
    beginningOfLast2Years(): string {
        return "";
    }
    beginningOfLast30Days(): string {
        return "";
    }
    beginningOfLast30Minutes(): string {
        return "";
    }
    beginningOfLast3Months(): string {
        return "";
    }
    beginningOfLast45Minutes(): string {
        return "";
    }
    beginningOfLast60Days(): string {
        return "";
    }
    beginningOfLast6Months(): string {
        return "";
    }
    beginningOfLast7Days(): string {
        return "";
    }
    beginningOfLast90Days(): string {
        return "";
    }
    beginningOfLast9Months(): string {
        return "";
    }
    beginningOfLastHour(): string {
        return "";
    }
    beginningOfLastMinute(): string {
        return "";
    }
    beginningOfLastMonth(): string {
        return "";
    }
    beginningOfLastQuarter(): string {
        return "";
    }
    beginningOfLastSchedulePeriod(scheduleId?: string): string {
        return "";
    }
    beginningOfLastWeek(): string {
        return "";
    }
    beginningOfLastYear(): string {
        return "";
    }
    beginningOfMonth(o?: any): string {
        return "";
    }
    beginningOfNext2Quarters(): string {
        return "";
    }
    beginningOfNextMonth(): string {
        return "";
    }
    beginningOfNextQuarter(): string {
        return "";
    }
    beginningOfNextSchedulePeriod(scheduleId?: string): string {
        return "";
    }
    beginningOfNextWeek(): string {
        return "";
    }
    beginningOfNextYear(): string {
        return "";
    }
    beginningOfOneYearAgo(): string {
        return "";
    }
    beginningOfSchedulePeriodsAgo(periodsAgo?: number, scheduleId?: string): string {
        return "";
    }
    beginningOfThisMonth(): string {
        return "";
    }
    beginningOfThisQuarter(): string {
        return "";
    }
    beginningOfThisSchedulePeriod(scheduleId?: string): string {
        return "";
    }
    beginningOfThisWeek(): string {
        return "";
    }
    beginningOfThisYear(): string {
        return "";
    }
    beginningOfToday(): string {
        return "";
    }
    beginningOfTomorrow(): string {
        return "";
    }
    beginningOfWeek(o?: any): string {
        return "";
    }
    beginningOfYear(o?: any): string {
        return "";
    }
    beginningOfYesterday(): string {
        return "";
    }
    breaker(obj?: any): void {
        
    }
    cacheFlush(catalog?: any, invalidateMetaData?: any): void {
        
    }
    calDateDiff(startDate?: string, endDate?: string, numericValue?: boolean): string {
        return "";
    }
    createUser(common_name?: string): string {
        return "";
    }
    dateAdd(unit?: string, offset?: number, basis?: any): string {
        return "";
    }
    dateDiff(startDate?: string, endDate?: string, bnumericValue?: boolean): string {
        return "";
    }
    dateGenerate(date?: string, range?: string): string {
        return "";
    }
    datePart(interval?: string, value?: string, oper?: string): string {
        return "";
    }
    daysAgo(days?: number): string {
        return "";
    }
    daysAgoEnd(days?: number): string {
        return "";
    }
    daysAgoLocal(days?: number): string {
        return "";
    }
    daysAgoStart(days?: number): string {
        return "";
    }
    debug(message?: string, parm1?: any, parm2?: any, parm3?: any, parm4?: any, parm5?: any): void {
        
    }
    disableSessionScopeDebug(scopeName?: string): void {
        
    }
    dropColumn(tableName?: string, fieldName?: string): void {
        
    }
    dropColumnQuick(tableName?: string, fieldName?: string): void {
        
    }
    dropTable(tableName?: string): void {
        
    }
    dropTableRecord(dbObject?: GlideRecord): void {
        
    }
    dumpProperties(): void {
        
    }
    dumpPropertiesSecured(): void {
        
    }
    enableSessionScopeDebug(scopeName?: string): void {
        
    }
    endOfCurrentHour(): string {
        return "";
    }
    endOfCurrentMinute(): string {
        return "";
    }
    endOfDay(o?: any): string {
        return "";
    }
    endOfLast120Days(): string {
        return "";
    }
    endOfLast12Months(): string {
        return "";
    }
    endOfLast15Minutes(): string {
        return "";
    }
    endOfLast2Hours(): string {
        return "";
    }
    endOfLast2Quarters(): string {
        return "";
    }
    endOfLast2Years(): string {
        return "";
    }
    endOfLast30Days(): string {
        return "";
    }
    endOfLast30Minutes(): string {
        return "";
    }
    endOfLast3Months(): string {
        return "";
    }
    endOfLast45Minutes(): string {
        return "";
    }
    endOfLast60Days(): string {
        return "";
    }
    endOfLast6Months(): string {
        return "";
    }
    endOfLast7Days(): string {
        return "";
    }
    endOfLast90Days(): string {
        return "";
    }
    endOfLast9Months(): string {
        return "";
    }
    endOfLastHour(): string {
        return "";
    }
    endOfLastMinute(): string {
        return "";
    }
    endOfLastMonth(): string {
        return "";
    }
    endOfLastQuarter(): string {
        return "";
    }
    endOfLastSchedulePeriod(scheduleId?: string): string {
        return "";
    }
    endOfLastWeek(): string {
        return "";
    }
    endOfLastYear(): string {
        return "";
    }
    endOfMonth(o?: any): string {
        return "";
    }
    endOfNext2Quarters(): string {
        return "";
    }
    endOfNextMonth(): string {
        return "";
    }
    endOfNextQuarter(): string {
        return "";
    }
    endOfNextSchedulePeriod(scheduleId?: string): string {
        return "";
    }
    endOfNextWeek(): string {
        return "";
    }
    endOfNextYear(): string {
        return "";
    }
    endOfOneYearAgo(): string {
        return "";
    }
    endOfSchedulePeriodsAgo(periodsAgo?: number, scheduleId?: string): string {
        return "";
    }
    endOfThisMonth(): string {
        return "";
    }
    endOfThisQuarter(): string {
        return "";
    }
    endOfThisSchedulePeriod(scheduleId?: string): string {
        return "";
    }
    endOfThisWeek(): string {
        return "";
    }
    endOfThisYear(): string {
        return "";
    }
    endOfToday(): string {
        return "";
    }
    endOfTomorrow(): string {
        return "";
    }
    endOfWeek(o?: any): string {
        return "";
    }
    endOfYear(o?: any): string {
        return "";
    }
    endOfYesterday(): string {
        return "";
    }
    ensureCompositeIndex(tableName?: string, sfields?: string, indexName?: string): void {
        
    }
    ensureIndex(tableName?: string, elementName?: string): boolean {
        return false;
    }
    error(message?: string, parm1?: any, parm2?: any, parm3?: any, parm4?: any, parm5?: any): void {
        
    }
    escaper(string?: string): string {
        return "";
    }
    eventQueue(name?: string, instance?: any, parm1?: string, parm2?: string, queue?: string): void {
        
    }
    eventQueueScheduled(name?: string, instance?: any, parm1?: string, parm2?: string, expiration?: any): void {
        
    }
    eventsProcess(): void {
        
    }
    executeCondition(condition?: string): boolean {
        return false;
    }
    executeNow(current?: any): string {
        return "";
    }
    fieldExists(tableName?: string, fieldName?: string): boolean {
        return false;
    }
    fileExists(fileName?: string): boolean {
        return false;
    }
    flushAccessMessages(): void {
        
    }
    flushMessages(): void {
        
    }
    flushStatus(): void {
        
    }
    generateGUID(o?: any): string {
        return "";
    }
    generateURL(table?: string, key?: string, view?: any): string {
        return "";
    }
    getAccessMessages(): Array<any> {
        return new Array();
    }
    getBooleanPreference(key?: string, defaultValue?: boolean): boolean {
        return false;
    }
    getCallerScopeName(): string {
        return "";
    }
    getCannotConfigureScopeReason(scopeID?: string): string {
        return "";
    }
    getCssCacheVersionString(theme?: string): string {
        return "";
    }
    getCurrentApplicationId(): string {
        return "";
    }
    getCurrentApplicationName(): string {
        return "";
    }
    getCurrentApplicationScope(): string {
        return "";
    }
    getCurrentScopeName(): string {
        return "";
    }
    getCustomerPrefix(): string {
        return "";
    }
    getDateFormat(): string {
        return "";
    }
    getDateTimeFormat(): string {
        return "";
    }
    getDictionaryEntryPackage(tableName?: string, fieldName?: string): string {
        return "";
    }
    getDictionaryEntryScope(tableName?: string, fieldName?: string): string {
        return "";
    }
    getDisplayColumn(tableName?: string): string {
        return "";
    }
    getDisplayValueFor(table?: string, key?: string, field?: string): string {
        return "";
    }
    getDurationDate(duration?: string): string {
        return "";
    }
    getErrorMessages(): Array<any> {
        return new Array();
    }
    getEscapedMessage(id?: string, args?: any): string {
        return "";
    }
    getEscapedProperty(key?: string, alt?: any): string {
        return "";
    }
    getEscapedPropertySecured(key?: string, alt?: any): string {
        return "";
    }
    getGlideHome(): string {
        return "";
    }
    getImpersonatingUserDisplayName(): string {
        return "";
    }
    getImpersonatingUserID(): string {
        return "";
    }
    getImpersonatingUserName(): string {
        return "";
    }
    getInScopeDBViews(): Array<string> {
        return new Array<string>();
    }
    getInScopeTables(): Array<string> {
        return new Array<string>();
    }
    getInfoMessages(): Array<any> {
        return new Array();
    }
    getInstanceIP(): string {
        return "";
    }
    getJavaVersion(): string {
        return "";
    }
    getJellyVariable(name?: string): any {
        return null;
    }
    getMaxSchemaNameLength(): number {
        return 0;
    }
    getMessage(id?: string, args?: any): string {
        return "";
    }
    getMessageLang(id?: string, language?: string, args?: any): string {
        return "";
    }
    getMessageS(id?: string, args?: any): string {
        return "";
    }
    getMessages(type?: string): Array<any> {
        return new Array();
    }
    getNavMessage(): any {
        return null;
    }
    getNewAppScopeCompanyPrefix(): string {
        return "";
    }
    getNodeID(): string {
        return "";
    }
    getNodeName(o?: any, i?: number): string {
        return "";
    }
    getNodeValue(o?: any, i?: number): string {
        return "";
    }
    getNumericPreference(key?: string, defaultValue?: number): number {
        return 0;
    }
    getPreference(key?: string, defaultValue?: any): string {
        return "";
    }
    getProperty(key?: string, alt?: any): string {
        return "";
    }
    getPropertySecured(key?: string, alt?: any): string {
        return "";
    }
    getScopeIdByElementName(tableName?: string, elementName?: string): string {
        return "";
    }
    getScopeIdByRecordId(sysId?: string): string {
        return "";
    }
    getScopeLabelByElementName(tableName?: string, elementName?: string): string {
        return "";
    }
    getScopeLabelByRecordId(sysId?: string): string {
        return "";
    }
    getScopeNameByElementName(tableName?: string, elementName?: string): string {
        return "";
    }
    getScopeNameByRecordId(sysId?: string): string {
        return "";
    }
    getScriptError(script?: string): string {
        return "";
    }
    getScriptErrorFromScope(script?: string, scopeId?: string): string {
        return "";
    }
    getSession(): any {
        return null;
    }
    getSessionID(): string {
        return "";
    }
    getSessionToken(): string {
        return "";
    }
    getStyle(tableName?: string, fieldName?: string, fieldValue?: string): string {
        return "";
    }
    getSysTimeZone(): string {
        return "";
    }
    getSystemID(): string {
        return "";
    }
    getTempDir(): string {
        return "";
    }
    getTimeFormat(): string {
        return "";
    }
    getTrivialMessages(): Array<any> {
        return new Array();
    }
    getUpgradeDebuggerResult(): UpgradeDebuggerResult {
        return new UpgradeDebuggerResult();
    }
    getUrlOnStack(): string {
        return "";
    }
    getUser(): GlideUser {
        return new GlideUser();
    }
    getUserDisplayName(): string {
        return "";
    }
    getUserID(): string {
        return "";
    }
    getUserName(): string {
        return "";
    }
    getUserNameByUserID(userID?: string): string {
        return "";
    }
    getVendorPrefixPrefix(): string {
        return "";
    }
    getXMLNodeList(xml?: string): Array<any> {
        return new Array();
    }
    getXMLText(xml?: string, xpath?: string): string {
        return "";
    }
    globalPut(name?: string, g?: any): void {
        
    }
    hasMessages(buckets?: any): boolean {
        return false;
    }
    hasRightsTo(resourcePath?: string, context?: any): boolean {
        return false;
    }
    hasRole(role?: string): boolean {
        return false;
    }
    hasRoleInGroup(role?: any, group?: any): boolean {
        return false;
    }
    healthCheck(filePattern?: string, reportonly?: boolean): boolean {
        return false;
    }
    hoursAgo(hours?: number): string {
        return "";
    }
    hoursAgoEnd(hours?: number): string {
        return "";
    }
    hoursAgoLocal(hours?: number): string {
        return "";
    }
    hoursAgoStart(hours?: number): string {
        return "";
    }
    include(name?: string): boolean {
        return false;
    }
    indexUpdate(dirName?: string): void {
        
    }
    info(message?: string, parm1?: any, parm2?: any, parm3?: any, parm4?: any, parm5?: any): void {
        
    }
    installationSetting(spec?: string, ref?: string): string {
        return "";
    }
    invalidateCache(): void {
        
    }
    isCleaningDemoData(): boolean {
        return false;
    }
    isCurrentApplicationCrossScopeProtected(): boolean {
        return false;
    }
    isCurrentApplicationCustom(): boolean {
        return false;
    }
    isCurrentApplicationInGlobalScope(): boolean {
        return false;
    }
    isDatabaseView(table?: string): boolean {
        return false;
    }
    isDebugging(): boolean {
        return false;
    }
    isESLatest(): boolean {
        return false;
    }
    isEdgeEncryptedSession(): boolean {
        return false;
    }
    isFirstDayOfMonth(o?: any): boolean {
        return false;
    }
    isFirstDayOfWeek(o?: any): boolean {
        return false;
    }
    isFirstDayOfYear(o?: any): boolean {
        return false;
    }
    isInteractive(): boolean {
        return false;
    }
    isInteractiveSession(): boolean {
        return false;
    }
    isLastDayOfMonth(o?: any): boolean {
        return false;
    }
    isLastDayOfWeek(o?: any): boolean {
        return false;
    }
    isLastDayOfYear(o?: any): boolean {
        return false;
    }
    isLoggedIn(): boolean {
        return false;
    }
    isMobile(): boolean {
        return false;
    }
    isPaused(): boolean {
        return false;
    }
    isPausedForAtfPerformance(): boolean {
        return false;
    }
    isScopeAdminForAnyApp(): boolean {
        return false;
    }
    isScopedAdminApp(): boolean {
        return false;
    }
    isScopedApp(): boolean {
        return false;
    }
    isSessionScopeDebugging(scopeName?: string): boolean {
        return false;
    }
    isTableInScope(tableName?: string): boolean {
        return false;
    }
    isUpgradeDebuggerEnabled(): boolean {
        return false;
    }
    isValidScript(script?: string): boolean {
        return false;
    }
    isValidScriptFromScope(script?: string, scopeId?: string): boolean {
        return false;
    }
    lastWeek(): string {
        return "";
    }
    load(fileName?: string): void {
        
    }
    loadBatchScript(fileName?: string): void {
        
    }
    loadFixes(o?: any): void {
        
    }
    loadResource(pluginName?: string, resourcePath?: string): void {
        
    }
    loadUpdates(o?: any): void {
        
    }
    log(message?: string, source?: string): void {
        
    }
    logError(message?: string, source?: string): void {
        
    }
    logWarning(message?: string, source?: string): void {
        
    }
    mergeAttribute(tableName?: string, parm1?: string, parm2?: string): void {
        
    }
    minutesAgo(minutes?: number): string {
        return "";
    }
    minutesAgoEnd(minutes?: number): string {
        return "";
    }
    minutesAgoStart(minutes?: number): string {
        return "";
    }
    monthsAgo(month?: number): string {
        return "";
    }
    monthsAgoEnd(month?: number): string {
        return "";
    }
    monthsAgoStart(month?: number): string {
        return "";
    }
    nil(o?: any): boolean {
        return false;
    }
    now(): string {
        return "";
    }
    nowDateTime(): string {
        return "";
    }
    nowGlideDateTime(): GlideDateTime {
        return new GlideDateTime();
    }
    nowNoTZ(): string {
        return "";
    }
    pause(): void {
        
    }
    print(toPrint?: string): void {
        
    }
    processDelegatedEvents(): void {
        
    }
    publish(channel?: string, data?: any): void {
        
    }
    publishToUser(channel?: string, data?: any, toUser?: string): void {
        
    }
    quartersAgo(quarters?: number): string {
        return "";
    }
    quartersAgoEnd(quarters?: number): string {
        return "";
    }
    quartersAgoStart(quarters?: number): string {
        return "";
    }
    rebuildAllIndexes(): void {
        
    }
    rebuildIndexes(tableName?: string): void {
        
    }
    renameTable(tableName?: string, newTableName?: string, cacheFlush?: boolean): void {
        
    }
    reset(): boolean {
        return false;
    }
    resetDB(dbName?: string): void {
        
    }
    resolveIcon(className?: string): string {
        return "";
    }
    resume(): void {
        
    }
    scheduleScript(scriptName?: string, currentObj?: any, parmString?: any): void {
        
    }
    setCannotCancel(b?: boolean): boolean {
        return false;
    }
    setCleaningDemoData(cleaning?: boolean): void {
        
    }
    setCurrentApplicationId(appId?: string): string {
        return "";
    }
    setProperty(key?: string, value?: string, description?: string): void {
        
    }
    setRedirect(o?: any): void {
        
    }
    setReturn(o?: any): void {
        
    }
    setTrackMetadataDeletes(onOrOff?: boolean): boolean {
        return false;
    }
    sleep(i?: number): void {
        
    }
    sql(statement?: string): void {
        
    }
    sqlItemsByField(table?: string, sfields?: any, fwfield?: string, value?: string, limit?: number): Array<any> {
        return new Array();
    }
    sqlItemsByID(table?: string, sfields?: any, sys_id?: string, limit?: number): Array<any> {
        return new Array();
    }
    statsThisSession(onOff?: boolean): void {
        
    }
    statsThisSessionThreshold(threshold?: number): void {
        
    }
    suppressTextIndex(suppress?: boolean): boolean {
        return false;
    }
    suppressUpdateSynch(suppress?: boolean): boolean {
        return false;
    }
    tableCreate(name?: string, label?: any): string {
        return "";
    }
    tableDrop(name?: string): void {
        
    }
    tableExists(name?: string): boolean {
        return false;
    }
    templateExists(templateName?: string): boolean {
        return false;
    }
    templateOrMacroExists(templateName?: string): boolean {
        return false;
    }
    trace(onOff?: boolean): void {
        
    }
    transpile(script?: string, swcOptions?: string): string {
        return "";
    }
    truncateTable(name?: string): void {
        
    }
    unWrap(url?: string): string {
        return "";
    }
    unload(tableName?: string, fileName?: string): void {
        
    }
    unloadAll(path?: string): void {
        
    }
    unloadChoices(tableName?: string, fieldName?: string, baseline?: string): void {
        
    }
    unloadRecordToXML(o?: any, indent?: boolean): string {
        return "";
    }
    unloadWithQuery(tableName?: string, fileName?: string, query?: string): void {
        
    }
    updateSave(o?: any): void {
        
    }
    updateUnload(): void {
        
    }
    updateUserRoles(userSysId?: string): void {
        
    }
    user(): string {
        return "";
    }
    userID(): string {
        return "";
    }
    user_id(): string {
        return "";
    }
    warn(message?: string, parm1?: any, parm2?: any, parm3?: any, parm4?: any, parm5?: any): void {
        
    }
    workflowFlush(o?: any): void {
        
    }
    xmlToJSON(xmlString?: string): NativeObject {
        return new NativeObject();
    }
    yearsAgo(year?: number): string {
        return "";
    }
    yesterday(): string {
        return "";
    }
}
