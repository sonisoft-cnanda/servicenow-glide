import { NativeObject } from '../imports/NativeObject';
import { UpgradeDebuggerResult } from '../imports/UpgradeDebuggerResult';
import { GlideUser } from '../imports/GlideUser';
import { GlideRecord } from '../imports/GlideRecord';
import { GlideDateTime } from '../imports/GlideDateTime';
declare class GlideSystem {
    static OLAPBuildTimeDimension(): void;
    static _cacheFlush(): void;
    static _dropTable(tableName?: string): void;
    static _getScriptError(script?: string, scopeId?: string): string;
    static _getScriptErrorForTable(script?: string, scopeId?: string, table?: string): string;
    static addErrorMessage(error?: any, messageKey?: string): void;
    static addErrorMessageNoSanitization(error?: any, messageKey?: string): void;
    static addInfoMessage(message?: any, messageKey?: string): void;
    static addInfoMessageNoSanitization(message?: any, messageKey?: string): void;
    static addMessage(bucket?: string, message?: any, messageKey?: string): void;
    static addUpgradeDebuggerArtifact(tableName?: string, sysId?: string): void;
    static alterSqlFieldDefintion(table?: string, element?: string, oldLength?: any): void;
    static appLoad(dirName?: string): void;
    static appLoadData(dirName?: string): void;
    static appLoadDemo(dirName?: string): void;
    static appUpdate(dirName?: string): void;
    static appUpgrade(dirName?: string): void;
    static beginningOfCurrentHour(): string;
    static beginningOfCurrentMinute(): string;
    static beginningOfDay(o?: any): string;
    static beginningOfLast120Days(): string;
    static beginningOfLast12Months(): string;
    static beginningOfLast15Minutes(): string;
    static beginningOfLast2Hours(): string;
    static beginningOfLast2Quarters(): string;
    static beginningOfLast2Years(): string;
    static beginningOfLast30Days(): string;
    static beginningOfLast30Minutes(): string;
    static beginningOfLast3Months(): string;
    static beginningOfLast45Minutes(): string;
    static beginningOfLast60Days(): string;
    static beginningOfLast6Months(): string;
    static beginningOfLast7Days(): string;
    static beginningOfLast90Days(): string;
    static beginningOfLast9Months(): string;
    static beginningOfLastHour(): string;
    static beginningOfLastMinute(): string;
    static beginningOfLastMonth(): string;
    static beginningOfLastQuarter(): string;
    static beginningOfLastSchedulePeriod(scheduleId?: string): string;
    static beginningOfLastWeek(): string;
    static beginningOfLastYear(): string;
    static beginningOfMonth(o?: any): string;
    static beginningOfNext2Quarters(): string;
    static beginningOfNextMonth(): string;
    static beginningOfNextQuarter(): string;
    static beginningOfNextSchedulePeriod(scheduleId?: string): string;
    static beginningOfNextWeek(): string;
    static beginningOfNextYear(): string;
    static beginningOfOneYearAgo(): string;
    static beginningOfSchedulePeriodsAgo(periodsAgo?: number, scheduleId?: string): string;
    static beginningOfThisMonth(): string;
    static beginningOfThisQuarter(): string;
    static beginningOfThisSchedulePeriod(scheduleId?: string): string;
    static beginningOfThisWeek(): string;
    static beginningOfThisYear(): string;
    static beginningOfToday(): string;
    static beginningOfTomorrow(): string;
    static beginningOfWeek(o?: any): string;
    static beginningOfYear(o?: any): string;
    static beginningOfYesterday(): string;
    static breaker(obj?: any): void;
    static cacheFlush(catalog?: any, invalidateMetaData?: any): void;
    static calDateDiff(startDate?: string, endDate?: string, numericValue?: boolean): string;
    static createUser(common_name?: string): string;
    static dateAdd(unit?: string, offset?: number, basis?: any): string;
    static dateDiff(startDate?: string, endDate?: string, bnumericValue?: boolean): string;
    static dateGenerate(date?: string, range?: string): string;
    static datePart(interval?: string, value?: string, oper?: string): string;
    static daysAgo(days?: number): string;
    static daysAgoEnd(days?: number): string;
    static daysAgoLocal(days?: number): string;
    static daysAgoStart(days?: number): string;
    static debug(message?: string, parm1?: any, parm2?: any, parm3?: any, parm4?: any, parm5?: any): void;
    static disableSessionScopeDebug(scopeName?: string): void;
    static dropColumn(tableName?: string, fieldName?: string): void;
    static dropColumnQuick(tableName?: string, fieldName?: string): void;
    static dropTable(tableName?: string): void;
    static dropTableRecord(dbObject?: GlideRecord): void;
    static dumpProperties(): void;
    static dumpPropertiesSecured(): void;
    static enableSessionScopeDebug(scopeName?: string): void;
    static endOfCurrentHour(): string;
    static endOfCurrentMinute(): string;
    static endOfDay(o?: any): string;
    static endOfLast120Days(): string;
    static endOfLast12Months(): string;
    static endOfLast15Minutes(): string;
    static endOfLast2Hours(): string;
    static endOfLast2Quarters(): string;
    static endOfLast2Years(): string;
    static endOfLast30Days(): string;
    static endOfLast30Minutes(): string;
    static endOfLast3Months(): string;
    static endOfLast45Minutes(): string;
    static endOfLast60Days(): string;
    static endOfLast6Months(): string;
    static endOfLast7Days(): string;
    static endOfLast90Days(): string;
    static endOfLast9Months(): string;
    static endOfLastHour(): string;
    static endOfLastMinute(): string;
    static endOfLastMonth(): string;
    static endOfLastQuarter(): string;
    static endOfLastSchedulePeriod(scheduleId?: string): string;
    static endOfLastWeek(): string;
    static endOfLastYear(): string;
    static endOfMonth(o?: any): string;
    static endOfNext2Quarters(): string;
    static endOfNextMonth(): string;
    static endOfNextQuarter(): string;
    static endOfNextSchedulePeriod(scheduleId?: string): string;
    static endOfNextWeek(): string;
    static endOfNextYear(): string;
    static endOfOneYearAgo(): string;
    static endOfSchedulePeriodsAgo(periodsAgo?: number, scheduleId?: string): string;
    static endOfThisMonth(): string;
    static endOfThisQuarter(): string;
    static endOfThisSchedulePeriod(scheduleId?: string): string;
    static endOfThisWeek(): string;
    static endOfThisYear(): string;
    static endOfToday(): string;
    static endOfTomorrow(): string;
    static endOfWeek(o?: any): string;
    static endOfYear(o?: any): string;
    static endOfYesterday(): string;
    static ensureCompositeIndex(tableName?: string, sfields?: string, indexName?: string): void;
    static ensureIndex(tableName?: string, elementName?: string): boolean;
    static error(message?: string, parm1?: any, parm2?: any, parm3?: any, parm4?: any, parm5?: any): void;
    static escaper(string?: string): string;
    static eventQueue(name?: string, instance?: any, parm1?: string, parm2?: string, queue?: string): void;
    static eventQueueScheduled(name?: string, instance?: any, parm1?: string, parm2?: string, expiration?: any): void;
    static eventsProcess(): void;
    static executeCondition(condition?: string): boolean;
    static executeNow(current?: any): string;
    static fieldExists(tableName?: string, fieldName?: string): boolean;
    static fileExists(fileName?: string): boolean;
    static flushAccessMessages(): void;
    static flushMessages(): void;
    static flushStatus(): void;
    static generateGUID(o?: any): string;
    static generateURL(table?: string, key?: string, view?: any): string;
    static getAccessMessages(): Array<any>;
    static getBooleanPreference(key?: string, defaultValue?: boolean): boolean;
    static getCallerScopeName(): string;
    static getCannotConfigureScopeReason(scopeID?: string): string;
    static getCssCacheVersionString(theme?: string): string;
    static getCurrentApplicationId(): string;
    static getCurrentApplicationName(): string;
    static getCurrentApplicationScope(): string;
    static getCurrentScopeName(): string;
    static getCustomerPrefix(): string;
    static getDateFormat(): string;
    static getDateTimeFormat(): string;
    static getDictionaryEntryPackage(tableName?: string, fieldName?: string): string;
    static getDictionaryEntryScope(tableName?: string, fieldName?: string): string;
    static getDisplayColumn(tableName?: string): string;
    static getDisplayValueFor(table?: string, key?: string, field?: string): string;
    static getDurationDate(duration?: string): string;
    static getErrorMessages(): Array<any>;
    static getEscapedMessage(id?: string, args?: any): string;
    static getEscapedProperty(key?: string, alt?: any): string;
    static getEscapedPropertySecured(key?: string, alt?: any): string;
    static getGlideHome(): string;
    static getImpersonatingUserDisplayName(): string;
    static getImpersonatingUserID(): string;
    static getImpersonatingUserName(): string;
    static getInScopeDBViews(): Array<string>;
    static getInScopeTables(): Array<string>;
    static getInfoMessages(): Array<any>;
    static getInstanceIP(): string;
    static getJavaVersion(): string;
    static getJellyVariable(name?: string): any;
    static getMaxSchemaNameLength(): number;
    static getMessage(id?: string, args?: any): string;
    static getMessageLang(id?: string, language?: string, args?: any): string;
    static getMessageS(id?: string, args?: any): string;
    static getMessages(type?: string): Array<any>;
    static getNavMessage(): any;
    static getNewAppScopeCompanyPrefix(): string;
    static getNodeID(): string;
    static getNodeName(o?: any, i?: number): string;
    static getNodeValue(o?: any, i?: number): string;
    static getNumericPreference(key?: string, defaultValue?: number): number;
    static getPreference(key?: string, defaultValue?: any): string;
    static getProperty(key?: string, alt?: any): string;
    static getPropertySecured(key?: string, alt?: any): string;
    static getScopeIdByElementName(tableName?: string, elementName?: string): string;
    static getScopeIdByRecordId(sysId?: string): string;
    static getScopeLabelByElementName(tableName?: string, elementName?: string): string;
    static getScopeLabelByRecordId(sysId?: string): string;
    static getScopeNameByElementName(tableName?: string, elementName?: string): string;
    static getScopeNameByRecordId(sysId?: string): string;
    static getScriptError(script?: string): string;
    static getScriptErrorFromScope(script?: string, scopeId?: string): string;
    static getSession(): any;
    static getSessionID(): string;
    static getSessionToken(): string;
    static getStyle(tableName?: string, fieldName?: string, fieldValue?: string): string;
    static getSysTimeZone(): string;
    static getSystemID(): string;
    static getTempDir(): string;
    static getTimeFormat(): string;
    static getTrivialMessages(): Array<any>;
    static getUpgradeDebuggerResult(): UpgradeDebuggerResult;
    static getUrlOnStack(): string;
    static getUser(): GlideUser;
    static getUserDisplayName(): string;
    static getUserID(): string;
    static getUserName(): string;
    static getUserNameByUserID(userID?: string): string;
    static getVendorPrefixPrefix(): string;
    static getXMLNodeList(xml?: string): Array<any>;
    static getXMLText(xml?: string, xpath?: string): string;
    static globalPut(name?: string, g?: any): void;
    static hasMessages(buckets?: any): boolean;
    static hasRightsTo(resourcePath?: string, context?: any): boolean;
    static hasRole(role?: string): boolean;
    static hasRoleInGroup(role?: any, group?: any): boolean;
    static healthCheck(filePattern?: string, reportonly?: boolean): boolean;
    static hoursAgo(hours?: number): string;
    static hoursAgoEnd(hours?: number): string;
    static hoursAgoLocal(hours?: number): string;
    static hoursAgoStart(hours?: number): string;
    static include(name?: string): boolean;
    static indexUpdate(dirName?: string): void;
    static info(message?: string, parm1?: any, parm2?: any, parm3?: any, parm4?: any, parm5?: any): void;
    static installationSetting(spec?: string, ref?: string): string;
    static invalidateCache(): void;
    static isCleaningDemoData(): boolean;
    static isCurrentApplicationCrossScopeProtected(): boolean;
    static isCurrentApplicationCustom(): boolean;
    static isCurrentApplicationInGlobalScope(): boolean;
    static isDatabaseView(table?: string): boolean;
    static isDebugging(): boolean;
    static isESLatest(): boolean;
    static isEdgeEncryptedSession(): boolean;
    static isFirstDayOfMonth(o?: any): boolean;
    static isFirstDayOfWeek(o?: any): boolean;
    static isFirstDayOfYear(o?: any): boolean;
    static isInteractive(): boolean;
    static isInteractiveSession(): boolean;
    static isLastDayOfMonth(o?: any): boolean;
    static isLastDayOfWeek(o?: any): boolean;
    static isLastDayOfYear(o?: any): boolean;
    static isLoggedIn(): boolean;
    static isMobile(): boolean;
    static isPaused(): boolean;
    static isPausedForAtfPerformance(): boolean;
    static isScopeAdminForAnyApp(): boolean;
    static isScopedAdminApp(): boolean;
    static isScopedApp(): boolean;
    static isSessionScopeDebugging(scopeName?: string): boolean;
    static isTableInScope(tableName?: string): boolean;
    static isUpgradeDebuggerEnabled(): boolean;
    static isValidScript(script?: string): boolean;
    static isValidScriptFromScope(script?: string, scopeId?: string): boolean;
    static lastWeek(): string;
    static load(fileName?: string): void;
    static loadBatchScript(fileName?: string): void;
    static loadFixes(o?: any): void;
    static loadResource(pluginName?: string, resourcePath?: string): void;
    static loadUpdates(o?: any): void;
    static log(message?: string, source?: string): void;
    static logError(message?: string, source?: string): void;
    static logWarning(message?: string, source?: string): void;
    static mergeAttribute(tableName?: string, parm1?: string, parm2?: string): void;
    static minutesAgo(minutes?: number): string;
    static minutesAgoEnd(minutes?: number): string;
    static minutesAgoStart(minutes?: number): string;
    static monthsAgo(month?: number): string;
    static monthsAgoEnd(month?: number): string;
    static monthsAgoStart(month?: number): string;
    static nil(o?: any): boolean;
    static now(): string;
    static nowDateTime(): string;
    static nowGlideDateTime(): GlideDateTime;
    static nowNoTZ(): string;
    static pause(): void;
    static print(toPrint?: string): void;
    static processDelegatedEvents(): void;
    static publish(channel?: string, data?: any): void;
    static publishToUser(channel?: string, data?: any, toUser?: string): void;
    static quartersAgo(quarters?: number): string;
    static quartersAgoEnd(quarters?: number): string;
    static quartersAgoStart(quarters?: number): string;
    static rebuildAllIndexes(): void;
    static rebuildIndexes(tableName?: string): void;
    static renameTable(tableName?: string, newTableName?: string, cacheFlush?: boolean): void;
    static reset(): boolean;
    static resetDB(dbName?: string): void;
    static resolveIcon(className?: string): string;
    static resume(): void;
    static scheduleScript(scriptName?: string, currentObj?: any, parmString?: any): void;
    static setCannotCancel(b?: boolean): boolean;
    static setCleaningDemoData(cleaning?: boolean): void;
    static setCurrentApplicationId(appId?: string): string;
    static setProperty(key?: string, value?: string, description?: string): void;
    static setRedirect(o?: any): void;
    static setReturn(o?: any): void;
    static setTrackMetadataDeletes(onOrOff?: boolean): boolean;
    static sleep(i?: number): void;
    static sql(statement?: string): void;
    static sqlItemsByField(table?: string, sfields?: any, fwfield?: string, value?: string, limit?: number): Array<any>;
    static sqlItemsByID(table?: string, sfields?: any, sys_id?: string, limit?: number): Array<any>;
    static statsThisSession(onOff?: boolean): void;
    static statsThisSessionThreshold(threshold?: number): void;
    static suppressTextIndex(suppress?: boolean): boolean;
    static suppressUpdateSynch(suppress?: boolean): boolean;
    static tableCreate(name?: string, label?: any): string;
    static tableDrop(name?: string): void;
    static tableExists(name?: string): boolean;
    static templateExists(templateName?: string): boolean;
    static templateOrMacroExists(templateName?: string): boolean;
    static trace(onOff?: boolean): void;
    static transpile(script?: string, swcOptions?: string): string;
    static truncateTable(name?: string): void;
    static unWrap(url?: string): string;
    static unload(tableName?: string, fileName?: string): void;
    static unloadAll(path?: string): void;
    static unloadChoices(tableName?: string, fieldName?: string, baseline?: string): void;
    static unloadRecordToXML(o?: any, indent?: boolean): string;
    static unloadWithQuery(tableName?: string, fileName?: string, query?: string): void;
    static updateSave(o?: any): void;
    static updateUnload(): void;
    static updateUserRoles(userSysId?: string): void;
    static user(): string;
    static userID(): string;
    static user_id(): string;
    static warn(message?: string, parm1?: any, parm2?: any, parm3?: any, parm4?: any, parm5?: any): void;
    static workflowFlush(o?: any): void;
    static xmlToJSON(xmlString?: string): NativeObject;
    static yearsAgo(year?: number): string;
    static yesterday(): string;
}
export declare const gs: typeof GlideSystem;
export {};
