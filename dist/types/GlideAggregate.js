"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlideAggregate = void 0;
const GlideQueryCondition_1 = require("../imports/GlideQueryCondition.js");
const GlideElementDescriptor_1 = require("../imports/GlideElementDescriptor.js");
const GlideElement_1 = require("../imports/GlideElement.js");
const GlideRecord_1 = require("../imports/GlideRecord.js");
class GlideAggregate {
    constructor(tableName) { }
    _next() {
        return false;
    }
    _operation() {
        return "";
    }
    _query(field, value) {
    }
    addActiveQuery() {
        return new GlideQueryCondition_1.GlideQueryCondition();
    }
    addAggregate(agg, name) {
    }
    addBizCalendarTrend(fieldName, bizCalendarSysId) {
    }
    addBizCalendarTrendBase(fieldName, bizCalendarSysId) {
    }
    addBizCalendarTrendIntersect(anotherCalendarSysId, overlapMode) {
    }
    addDomainQuery(o) {
    }
    addEncodedQuery(query, enforceFieldACLs) {
    }
    addExtraField(field) {
    }
    addFunction(func) {
    }
    addHaving(arg1, arg2, arg3, arg4) {
    }
    addInactiveQuery() {
        return new GlideQueryCondition_1.GlideQueryCondition();
    }
    addJoinQuery(joinTable, primaryField, joinTableField) {
        return new GlideQueryCondition_1.GlideQueryCondition();
        ;
    }
    addNotNullQuery(fieldName) {
        return new GlideQueryCondition_1.GlideQueryCondition();
    }
    addNullQuery(fieldName) {
        return new GlideQueryCondition_1.GlideQueryCondition();
    }
    addQuery(name, operator, value) {
        return new GlideQueryCondition_1.GlideQueryCondition();
        ;
    }
    addTrend(fieldName, timeInterval, numUnits) {
    }
    addValue(field, value) {
    }
    appendOrQuery(condition, name, operator, value) {
    }
    applyEncodedQuery(queryString) {
    }
    applyRowSecurity() {
    }
    applyTemplate(template) {
    }
    attachGlideListener(className, insert, update, del, fields, foreign, foreign2, details) {
    }
    autoSysFields(b) {
    }
    canCreate() {
        return false;
    }
    canDelete() {
        return false;
    }
    canRead() {
        return false;
    }
    canWrite() {
        return false;
    }
    changes() {
        return false;
    }
    chooseWindow(f, l, forceCount) {
    }
    close() {
    }
    createElement() {
        return false;
    }
    createIndex() {
        return false;
    }
    deleteMultiple() {
    }
    deleteRecord() {
        return false;
    }
    disableSysIdInOptimization() {
    }
    dropIndex() {
        return false;
    }
    enableSessionLanguageJoin() {
    }
    evaluateAsDefault(fieldName) {
        return "";
    }
    find(columnName, value) {
        return false;
    }
    findForeignKey(collection) {
        return "";
    }
    get(name, value) {
        return false;
    }
    getAggregate(agg, name) {
        return "";
    }
    getAggregateEncodedQuery() {
        return "";
    }
    getAttribute(attribute) {
        return "";
    }
    getBooleanAttribute(attribute) {
        return false;
    }
    getCategory() {
        return "";
    }
    getClassDisplayValue() {
        return "";
    }
    getCount() {
        return 0;
    }
    getDisplayName() {
        return "";
    }
    getDisplayValue(name) {
        return "";
    }
    getED() {
        return new GlideElementDescriptor_1.GlideElementDescriptor();
    }
    getElement(columnName) {
        return new GlideElement_1.GlideElement();
    }
    getElements() {
        return new Array();
    }
    getEncodedQuery() {
        return "";
    }
    getEngineParameter(name) {
        return "";
    }
    getEscapedDisplayValue() {
        return "";
    }
    getFields() {
        return new Array();
    }
    getLabel() {
        return "";
    }
    getLastErrorMessage() {
        return "";
    }
    getLink(noStack) {
        return "";
    }
    getLocation() {
        return 0;
    }
    getPlural() {
        return "";
    }
    getQuery() {
        return "";
    }
    getRecordClassName() {
        return "";
    }
    getRelatedLists() {
        return {};
    }
    getRelatedRecords(foreignKey, collectionID) {
    }
    getRelatedTables() {
        return {};
    }
    getRowCount() {
        return 0;
    }
    getRowNumber() {
        return 0;
    }
    getSetRowCount() {
        return 0;
    }
    getTableName() {
        return "";
    }
    getTableScope() {
        return "";
    }
    getTableScopeId() {
        return "";
    }
    getTableScopeName() {
        return "";
    }
    getTotal(agg, name) {
        return 0;
    }
    getUniqueValue() {
        return "";
    }
    getValue(name) {
        return "";
    }
    groupBy(name) {
    }
    hasAttachments() {
        return false;
    }
    hasNext() {
        return false;
    }
    hasRightsTo(operation) {
        return false;
    }
    incrementViewCount() {
    }
    initialize() {
    }
    insert() {
        return "";
    }
    insertLazy() {
        return "";
    }
    insertOrUpdate(keyField) {
        return "";
    }
    insertWithReferences() {
        return "";
    }
    instanceOf(className) {
        return false;
    }
    isActionAborted() {
        return false;
    }
    isBizCalendarTrendFillGap() {
        return false;
    }
    isEncodedQueryValid(query) {
        return false;
    }
    isForeignTable() {
        return false;
    }
    isInGlobalScope() {
        return false;
    }
    isInSelectedScope() {
        return false;
    }
    isInStoreScope() {
        return false;
    }
    isMetadata() {
        return false;
    }
    isNewRecord() {
        return false;
    }
    isReadonly() {
        return false;
    }
    isValid() {
        return false;
    }
    isValidEncodedQuery(query) {
        return false;
    }
    isValidField(columnName) {
        return false;
    }
    isValidMetadataRecord() {
        return false;
    }
    isValidRecord() {
        return false;
    }
    isView() {
        return false;
    }
    isWorkflow() {
        return false;
    }
    largeResultExpected() {
    }
    makeReadonly() {
    }
    moreEncodedQuery(query) {
    }
    newGlideRecordNamed(tableName) {
        return new GlideRecord_1.GlideRecord("");
    }
    newRecord() {
    }
    next() {
        return false;
    }
    nextRecord() {
        return false;
    }
    notifyUser() {
    }
    onePassQuery() {
    }
    operation() {
        return "";
    }
    orderBy(name) {
    }
    orderByAggregate(agg, name) {
    }
    orderByDesc(name) {
    }
    popCurrent() {
    }
    putCurrent() {
    }
    putOptimizers(o) {
    }
    query(field, value) {
    }
    queryNoDomain() {
    }
    restoreLocation() {
    }
    saveLocation() {
    }
    scheduleScript(name) {
    }
    setAbortAction(b) {
    }
    setAggregateWindow(firstRowWanted, lastRowWanted) {
    }
    setBizCalendarTrendFillGap(b) {
    }
    setCategory(category) {
    }
    setDisplayValue(name, value) {
    }
    setEngineParameter(name, value) {
    }
    setForceUpdate(e) {
    }
    setGroup(b) {
    }
    setGroupByFollowRef(b) {
    }
    setIntervalYearIncluded(b) {
    }
    setLimit(limit) {
    }
    setLocation(rowNumber) {
    }
    setNewGuid() {
        return "";
    }
    setNewGuidValue(guid) {
    }
    setNoCount() {
    }
    setOrder(b) {
    }
    setOrderByFollowRef(b) {
    }
    setQueryReferences(queryReferences) {
    }
    setSystem(isSystem) {
    }
    setUseEngines(e) {
    }
    setValue(name, value) {
    }
    setWorkflow(e) {
    }
    targetExtension(tableName) {
    }
    update(reason) {
        return "";
    }
    updateElement() {
        return false;
    }
    updateLazy() {
        return false;
    }
    updateMultiple() {
    }
    updateNoDomain(reason) {
        return "";
    }
    updateWithReferences(reason) {
        return "";
    }
}
exports.GlideAggregate = GlideAggregate;
//# sourceMappingURL=GlideAggregate.js.map