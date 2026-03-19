import { GlideRecord } from './GlideRecord';
import { Scriptable } from './Scriptable';
import { SPScriptArray } from './SPScriptArray';
import { GlideElement } from './GlideElement';
import { SPScriptObject } from './SPScriptObject';
import { NativeArray } from './NativeArray';
import { JSONArray } from './JSONArray';
import { NativeObject } from './NativeObject';
import { JSONObject } from './JSONObject';

export class GlideSPScriptable {
    constructor(portalID?: string) {}
    addQueryString(gr?: GlideRecord, queryString?: string): GlideRecord {
        return new GlideRecord("");
    }
    buildThemeVariableModel(portalId?: string, names?: string): Scriptable {
        return new Scriptable();
    }
    canReadRecord(table?: string, id?: string): boolean {
        return false;
    }
    canSeePage(pageID?: string): boolean {
        return false;
    }
    getAISearchResultsActionConfig(searchConfigContextId?: string, portalId?: string): string {
        return "";
    }
    getAllKBRecords(kbIDs?: string): GlideRecord {
        return new GlideRecord("");
    }
    getAllowedItems(): Scriptable {
        return new Scriptable();
    }
    getAnnouncementConsumerType(typeIds?: Array<any>): Record<any, any> {
        return {};
    }
    getAssessmentRecord(assessmentId?: string, typeId?: string, data?: Scriptable): Scriptable {
        return new Scriptable();
    }
    getCatalogItem(itemID?: string, isOrdering?: boolean, tableName?: string): Scriptable {
        return new Scriptable();
    }
    getCatalogs(): Scriptable {
        return new Scriptable();
    }
    getDisplayValue(name?: string): string {
        return "";
    }
    getField(gr?: GlideRecord, name?: string): Scriptable {
        return new Scriptable();
    }
    getFields(gr?: GlideRecord, names?: string): Scriptable {
        return new Scriptable();
    }
    getFieldsObject(gr?: GlideRecord, names?: string): Scriptable {
        return new Scriptable();
    }
    getFilterBreadcrumbs(table?: string, query?: string, fixedQuery?: string): SPScriptArray {
        return new SPScriptArray();
    }
    getForm(table?: string, sys_id?: string, encodedQuery?: string, view?: string, isPopup?: boolean, includeScripts?: boolean): Scriptable {
        return new Scriptable();
    }
    getGuide(itemID?: string, isOrdering?: boolean, addIncludedItems?: boolean): Scriptable {
        return new Scriptable();
    }
    getHTTPS(httpsURL?: string): Scriptable {
        return new Scriptable();
    }
    getInstanceRecord(): GlideRecord {
        return new GlideRecord("");
    }
    getItemDisplayPrice(itemID?: string, tableName?: string, quantity?: number): Scriptable {
        return new Scriptable();
    }
    getKBCategoryArticleSummaries(category?: string, limit?: number, maxChars?: number): Scriptable {
        return new Scriptable();
    }
    getKBCategoryArticleSummary(category?: string, limit?: number, maxChars?: number): Scriptable {
        return new Scriptable();
    }
    getKBCategoryArticles(category?: string, limit?: number): Scriptable {
        return new Scriptable();
    }
    getKBCount(kbIDs?: string): number {
        return 0;
    }
    getKBRecord(): GlideRecord {
        return new GlideRecord("");
    }
    getKBSiblingCategories(catID?: string): GlideRecord {
        return new GlideRecord("");
    }
    getKBTopCategoryID(catId?: string): string {
        return "";
    }
    getKnowledgeBases(): string {
        return "";
    }
    getListColumns(tableName?: string, view?: string): Scriptable {
        return new Scriptable();
    }
    getMenuHREF(gr?: GlideRecord): Scriptable {
        return new Scriptable();
    }
    getMenuItems(sys_id?: string): Scriptable {
        return new Scriptable();
    }
    getPageRecord(pageID?: string, pageSysId?: string): GlideRecord {
        return new GlideRecord("");
    }
    getParameter(name?: string): any {
        return null;
    }
    getPortalRecord(): GlideRecord {
        return new GlideRecord("");
    }
    getRecord(table?: string, sys_id?: string): GlideRecord {
        return new GlideRecord("");
    }
    getRecordDisplayValues(data?: Scriptable, from?: GlideRecord, names?: string): void {
        
    }
    getRecordElements(data?: Scriptable, from?: GlideRecord, names?: string): void {
        
    }
    getRecordValues(data?: Scriptable, from?: GlideRecord, names?: string): void {
        
    }
    getRecordVariables(gr?: GlideRecord, includeNilResponses?: boolean): string {
        return "";
    }
    getRecordVariablesArray(gr?: GlideRecord, includeNilResponses?: boolean): Scriptable {
        return new Scriptable();
    }
    getRectangleRecord(): GlideRecord {
        return new GlideRecord("");
    }
    getRelatedList(tableName?: string, foreignKey?: string): NativeArray {
        return new NativeArray();
    }
    getSCRecord(): GlideRecord {
        return new GlideRecord("");
    }
    getSPVlistActions(sysId?: string): JSONArray {
        return new JSONArray();
    }
    getSearchSources(portalID?: string, commaSeparatedSourceIDs?: string): NativeArray {
        return new NativeArray();
    }
    getStream(table?: string, sys_id?: string): Scriptable {
        return new Scriptable();
    }
    getStreamEntries(): string {
        return "";
    }
    getSubCategories(catId?: string): GlideRecord {
        return new GlideRecord("");
    }
    getTableVariableRow(data?: NativeObject): Scriptable {
        return new Scriptable();
    }
    getTaxonomies(): string {
        return "";
    }
    getUserInitials(): string {
        return "";
    }
    getUserTrackingDetails(): JSONObject {
        return new JSONObject();
    }
    getValue(name?: string): any {
        return null;
    }
    getValues(data?: Scriptable, names?: string): void {
        
    }
    getVariables(includeNilResponses?: boolean): string {
        return "";
    }
    getVariablesArray(includeNilResponses?: boolean): Scriptable {
        return new Scriptable();
    }
    getWidget(widgetID?: string, widgetParams?: any): Scriptable {
        return new Scriptable();
    }
    getWidgetFromInstance(instanceID?: string): Scriptable {
        return new Scriptable();
    }
    getWidgetFromRectangle(instanceID?: string): Scriptable {
        return new Scriptable();
    }
    getWidgetParameters(): Scriptable {
        return new Scriptable();
    }
    getWidgetScope(instanceID?: string): Scriptable {
        return new Scriptable();
    }
    getWidgetSysId(): string {
        return "";
    }
    hasPublicAccessToTable(table?: string, widgetOptions?: any, widgetInput?: any): boolean {
        return false;
    }
    hasTextIndex(tableName?: string): boolean {
        return false;
    }
    isAISearchEnabled(): boolean {
        return false;
    }
    isDarkThemeEnabledInPortal(): boolean {
        return false;
    }
    isRTLEnabled(): boolean {
        return false;
    }
    isServicePortalURL(inputURL?: string): boolean {
        return false;
    }
    isUserCriteriaEnabled(): boolean {
        return false;
    }
    log(message?: any): void {
        
    }
    logSearch(table?: string, terms?: string, count?: number, searchType?: string, portal?: string, page?: string): void {
        
    }
    logStat(type?: string, table?: string, id?: string, text?: string, portalId?: string): void {
        
    }
    mapUrlToSPUrl(url?: string): string {
        return "";
    }
    portalHasChatConfig(portalId?: string): boolean {
        return false;
    }
    publishSearchAnalytics(payloadString?: string): void {
        
    }
    saveRecord(table?: string, sys_id?: string, model?: Scriptable): Scriptable {
        return new Scriptable();
    }
    saveVariables(table?: string, sys_id?: string, model?: Scriptable): Scriptable {
        return new Scriptable();
    }
    showCatalogPrices(): boolean {
        return false;
    }
    showPrice(price?: number): boolean {
        return false;
    }
    showRecurringPrice(price?: number, freq?: string): boolean {
        return false;
    }
    stripHTML(html?: string): Scriptable {
        return new Scriptable();
    }
    translateTemplate(input?: string): string {
        return "";
    }
    userCanSeeSearchSourceByCriteria(searchSourceID?: string): boolean {
        return false;
    }
}
