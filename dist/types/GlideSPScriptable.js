"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlideSPScriptable = void 0;
const GlideRecord_1 = require("../imports/GlideRecord.js");
const Scriptable_1 = require("../imports/Scriptable.js");
const SPScriptArray_1 = require("../imports/SPScriptArray.js");
const NativeArray_1 = require("../imports/NativeArray.js");
const JSONArray_1 = require("../imports/JSONArray.js");
const JSONObject_1 = require("../imports/JSONObject.js");
class GlideSPScriptable {
    constructor(portalID) { }
    addQueryString(gr, queryString) {
        return new GlideRecord_1.GlideRecord("");
    }
    buildThemeVariableModel(portalId, names) {
        return new Scriptable_1.Scriptable();
    }
    canReadRecord(table, id) {
        return false;
    }
    canSeePage(pageID) {
        return false;
    }
    getAISearchResultsActionConfig(searchConfigContextId, portalId) {
        return "";
    }
    getAllKBRecords(kbIDs) {
        return new GlideRecord_1.GlideRecord("");
    }
    getAllowedItems() {
        return new Scriptable_1.Scriptable();
    }
    getAnnouncementConsumerType(typeIds) {
        return {};
    }
    getAssessmentRecord(assessmentId, typeId, data) {
        return new Scriptable_1.Scriptable();
    }
    getCatalogItem(itemID, isOrdering, tableName) {
        return new Scriptable_1.Scriptable();
    }
    getCatalogs() {
        return new Scriptable_1.Scriptable();
    }
    getDisplayValue(name) {
        return "";
    }
    getField(gr, name) {
        return new Scriptable_1.Scriptable();
    }
    getFields(gr, names) {
        return new Scriptable_1.Scriptable();
    }
    getFieldsObject(gr, names) {
        return new Scriptable_1.Scriptable();
    }
    getFilterBreadcrumbs(table, query, fixedQuery) {
        return new SPScriptArray_1.SPScriptArray();
    }
    getForm(table, sys_id, encodedQuery, view, isPopup, includeScripts) {
        return new Scriptable_1.Scriptable();
    }
    getGuide(itemID, isOrdering, addIncludedItems) {
        return new Scriptable_1.Scriptable();
    }
    getHTTPS(httpsURL) {
        return new Scriptable_1.Scriptable();
    }
    getInstanceRecord() {
        return new GlideRecord_1.GlideRecord("");
    }
    getItemDisplayPrice(itemID, tableName, quantity) {
        return new Scriptable_1.Scriptable();
    }
    getKBCategoryArticleSummaries(category, limit, maxChars) {
        return new Scriptable_1.Scriptable();
    }
    getKBCategoryArticleSummary(category, limit, maxChars) {
        return new Scriptable_1.Scriptable();
    }
    getKBCategoryArticles(category, limit) {
        return new Scriptable_1.Scriptable();
    }
    getKBCount(kbIDs) {
        return 0;
    }
    getKBRecord() {
        return new GlideRecord_1.GlideRecord("");
    }
    getKBSiblingCategories(catID) {
        return new GlideRecord_1.GlideRecord("");
    }
    getKBTopCategoryID(catId) {
        return "";
    }
    getKnowledgeBases() {
        return "";
    }
    getListColumns(tableName, view) {
        return new Scriptable_1.Scriptable();
    }
    getMenuHREF(gr) {
        return new Scriptable_1.Scriptable();
    }
    getMenuItems(sys_id) {
        return new Scriptable_1.Scriptable();
    }
    getPageRecord(pageID, pageSysId) {
        return new GlideRecord_1.GlideRecord("");
    }
    getParameter(name) {
        return null;
    }
    getPortalRecord() {
        return new GlideRecord_1.GlideRecord("");
    }
    getRecord(table, sys_id) {
        return new GlideRecord_1.GlideRecord("");
    }
    getRecordDisplayValues(data, from, names) {
    }
    getRecordElements(data, from, names) {
    }
    getRecordValues(data, from, names) {
    }
    getRecordVariables(gr, includeNilResponses) {
        return "";
    }
    getRecordVariablesArray(gr, includeNilResponses) {
        return new Scriptable_1.Scriptable();
    }
    getRectangleRecord() {
        return new GlideRecord_1.GlideRecord("");
    }
    getRelatedList(tableName, foreignKey) {
        return new NativeArray_1.NativeArray();
    }
    getSCRecord() {
        return new GlideRecord_1.GlideRecord("");
    }
    getSPVlistActions(sysId) {
        return new JSONArray_1.JSONArray();
    }
    getSearchSources(portalID, commaSeparatedSourceIDs) {
        return new NativeArray_1.NativeArray();
    }
    getStream(table, sys_id) {
        return new Scriptable_1.Scriptable();
    }
    getStreamEntries() {
        return "";
    }
    getSubCategories(catId) {
        return new GlideRecord_1.GlideRecord("");
    }
    getTableVariableRow(data) {
        return new Scriptable_1.Scriptable();
    }
    getTaxonomies() {
        return "";
    }
    getUserInitials() {
        return "";
    }
    getUserTrackingDetails() {
        return new JSONObject_1.JSONObject();
    }
    getValue(name) {
        return null;
    }
    getValues(data, names) {
    }
    getVariables(includeNilResponses) {
        return "";
    }
    getVariablesArray(includeNilResponses) {
        return new Scriptable_1.Scriptable();
    }
    getWidget(widgetID, widgetParams) {
        return new Scriptable_1.Scriptable();
    }
    getWidgetFromInstance(instanceID) {
        return new Scriptable_1.Scriptable();
    }
    getWidgetFromRectangle(instanceID) {
        return new Scriptable_1.Scriptable();
    }
    getWidgetParameters() {
        return new Scriptable_1.Scriptable();
    }
    getWidgetScope(instanceID) {
        return new Scriptable_1.Scriptable();
    }
    getWidgetSysId() {
        return "";
    }
    hasPublicAccessToTable(table, widgetOptions, widgetInput) {
        return false;
    }
    hasTextIndex(tableName) {
        return false;
    }
    isAISearchEnabled() {
        return false;
    }
    isDarkThemeEnabledInPortal() {
        return false;
    }
    isRTLEnabled() {
        return false;
    }
    isServicePortalURL(inputURL) {
        return false;
    }
    isUserCriteriaEnabled() {
        return false;
    }
    log(message) {
    }
    logSearch(table, terms, count, searchType, portal, page) {
    }
    logStat(type, table, id, text, portalId) {
    }
    mapUrlToSPUrl(url) {
        return "";
    }
    portalHasChatConfig(portalId) {
        return false;
    }
    publishSearchAnalytics(payloadString) {
    }
    saveRecord(table, sys_id, model) {
        return new Scriptable_1.Scriptable();
    }
    saveVariables(table, sys_id, model) {
        return new Scriptable_1.Scriptable();
    }
    showCatalogPrices() {
        return false;
    }
    showPrice(price) {
        return false;
    }
    showRecurringPrice(price, freq) {
        return false;
    }
    stripHTML(html) {
        return new Scriptable_1.Scriptable();
    }
    translateTemplate(input) {
        return "";
    }
    userCanSeeSearchSourceByCriteria(searchSourceID) {
        return false;
    }
}
exports.GlideSPScriptable = GlideSPScriptable;
//# sourceMappingURL=GlideSPScriptable.js.map