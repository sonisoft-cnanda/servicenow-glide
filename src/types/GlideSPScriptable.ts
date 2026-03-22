import { NativeArray } from "../imports/NativeArray";
import { NativeObject } from "../imports/NativeObject";
import { Scriptable } from "../imports/Scriptable";
import { GlideElement } from "./GlideElement";
import { GlideRecord } from "./GlideRecord";

export class GlideSPScriptable {
    constructor();
    constructor(portalID: string);
    constructor(...args: any[]) {  }
    getPortalRecord(): GlideRecord {
        return null as any;
    }
    getRecord(): GlideRecord;
    getRecord(table: string, sys_id: string, applyDataFilters?: boolean): GlideRecord;
    getRecord(table: string, ge: GlideElement): GlideRecord;
    getRecord(...args: any[]): any {
        return null as any;
    }
    getWidgetParameters(): Scriptable {
        return null as any;
    }
    getValue(name: string): any {
        return null as any;
    }
    getDisplayValue(name: string): string {
        return "";
    }
    getValues(data: Scriptable, names?: string): void {
        
    }
    getRecordValues(data: Scriptable, from: GlideRecord, names: string): void {
        
    }
    getRecordDisplayValues(data: Scriptable, from: GlideRecord, names: string): void {
        
    }
    getRecordElements(from: GlideRecord, names: string): NativeObject;
    getRecordElements(data: Scriptable, from: GlideRecord, names: string): void;
    getRecordElements(...args: any[]): any {
        return null as any;
    }
    getWidgetScope(instanceID: string): Scriptable {
        return null as any;
    }
    getWidgetFromInstance(instanceID: string): Scriptable {
        return null as any;
    }
    getWidgetFromRectangle(instanceID: string): Scriptable {
        return null as any;
    }
    getWidget(widgetID: string, widgetParams?: any): Scriptable {
        return null as any;
    }
    getRelatedList(tableName: string, foreignKey: string): NativeArray {
        return null as any;
    }
    getParameter(name: string): any {
        return null as any;
    }
    getVariables(includeNilResponses?: boolean): string {
        return "";
    }
    getRecordVariables(gr: GlideRecord, includeNilResponses?: boolean): string {
        return "";
    }
    getVariablesArray(includeNilResponses?: boolean): Scriptable {
        return null as any;
    }
    getRecordVariablesArray(gr: GlideRecord, includeNilResponses?: boolean): Scriptable {
        return null as any;
    }
    getStreamEntries(): string {
        return "";
    }
    getStream(): Scriptable;
    getStream(table: string, sys_id: string): Scriptable;
    getStream(...args: any[]): any {
        return null as any;
    }
    getListColumns(tableName: string, view?: string): Scriptable {
        return null as any;
    }
    getUserInitials(): string {
        return "";
    }
    getField(gr: GlideRecord, name: string): Scriptable {
        return null as any;
    }
    getFields(gr: GlideRecord, names: string): Scriptable {
        return null as any;
    }
    getFieldsObject(gr: GlideRecord, names: string): Scriptable {
        return null as any;
    }
    getFilterBreadcrumbs(table: string, query: string, fixedQuery: string): NativeArray {
        return null as any;
    }
    static logStat(type: string, table: string, id: string, text?: string, portalId?: string): void {
        
    }
    static logSearch(table: string, terms: string, count: number, searchType?: string, portal?: string, page?: string): void {
        
    }
    static canSeePage(pageID: string): boolean {
        return false;
    }
    canReadRecord(gr: GlideRecord): boolean;
    canReadRecord(table: string, id: string): boolean;
    canReadRecord(...args: any[]): any {
        return false;
    }
    getCatalogItem(data: Scriptable): Scriptable;
    getCatalogItem(itemID: string, isOrdering?: boolean, tableName?: string): Scriptable;
    getCatalogItem(...args: any[]): any {
        return null as any;
    }
    getGuide(itemID: string, isOrdering: boolean, addIncludedItems: boolean): Scriptable {
        return null as any;
    }
    getForm(table: string, sys_id: string, encodedQuery?: string, view?: string, isPopup?: boolean, includeScripts?: boolean): Scriptable {
        return null as any;
    }
    saveRecord(table: string, sys_id: string, model: Scriptable): Scriptable {
        return null as any;
    }
    saveVariables(table: string, sys_id: string, model: Scriptable): Scriptable {
        return null as any;
    }
    getKBCategoryArticles(category: string, limit?: number): Scriptable {
        return null as any;
    }
    getKBCategoryArticleSummaries(category: string, limit: number, maxChars: number): Scriptable {
        return null as any;
    }
    getKBCategoryArticleSummary(category: string, limit: number, maxChars: number): Scriptable {
        return null as any;
    }
    getKBSiblingCategories(catID: string): GlideRecord {
        return null as any;
    }
    getKBCount(kbIDs: string): number {
        return 0;
    }
    getSubCategories(catId: string): GlideRecord {
        return null as any;
    }
    getKBTopCategoryID(catId: string): string {
        return "";
    }
    getKBRecord(): GlideRecord {
        return null as any;
    }
    getAllKBRecords(kbIDs: string): GlideRecord {
        return null as any;
    }
    getSCRecord(): GlideRecord {
        return null as any;
    }
    stripHTML(html: string): Scriptable {
        return null as any;
    }
    getMenuItems(sys_id: string): Scriptable {
        return null as any;
    }
    getMenuHREF(gr: GlideRecord): Scriptable {
        return null as any;
    }
    getInstanceRecord(): GlideRecord {
        return null as any;
    }
    buildThemeVariableModel(portalId: string, names: string): Scriptable {
        return null as any;
    }
    getWidgetSysId(): string {
        return "";
    }
    getTaxonomies(): string {
        return "";
    }
    getAssessmentRecord(assessmentId: string, typeId: string, data: Scriptable): Scriptable {
        return null as any;
    }
    getSPVlistActions(sysId: string): Array<any> {
        return [];
    }
    getAnnouncementConsumerType(typeIds: string[]): Record<string, string> {
        return {} as any;
    }
    getUserTrackingDetails(): any {
        return null as any;
    }
    hasPublicAccessToTable(table: string, widgetOptions: any, widgetInput: any): boolean {
        return false;
    }
    getUiScriptsVersionMap(): string {
        return "";
    }
    getSearchApplicationConfigForNASSEnabledPortal(): string {
        return "";
    }
    shouldUseESLatest(tableName: string, sysId: string): boolean {
        return false;
    }
    getUserPreferredChannels(): string {
        return "";
    }
    hasTextIndex(tableName: string): boolean {
        return false;
    }
    isAISearchEnabled(): boolean {
        return false;
    }
    isChatAssistantEnabled(): boolean {
        return false;
    }
    isDarkThemeEnabledInPortal(): boolean {
        return false;
    }
    isDynamicChatAssistantEnabled(): boolean {
        return false;
    }
    isNowAssistEnabled(): boolean {
        return false;
    }
    isRTLEnabled(): boolean {
        return false;
    }
    isServicePortalURL(inputURL: string): boolean {
        return false;
    }
    isUserCriteriaEnabled(): boolean {
        return false;
    }
    log(message: any): void {
        
    }
    mapUrlToSPUrl(url: string): string {
        return "";
    }
    portalHasChatConfig(portalId: string): boolean {
        return false;
    }
    publishSearchAnalytics(payloadString: string): void {
        
    }
    showCatalogPrices(): boolean {
        return false;
    }
    showPrice(price: number): boolean {
        return false;
    }
    showRecurringPrice(price: number, freq: string): boolean {
        return false;
    }
    translateTemplate(input: string): string {
        return "";
    }
    userCanSeeSearchSourceByCriteria(searchSourceID: string): boolean {
        return false;
    }
}
