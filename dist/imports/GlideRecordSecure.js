"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlideRecordSecure = void 0;
const GlideQueryCondition_1 = require("./GlideQueryCondition.js");
const GlideElementDescriptor_1 = require("./GlideElementDescriptor.js");
const GlideElement_1 = require("./GlideElement.js");
const GlideRecord_1 = require("./GlideRecord.js");
class GlideRecordSecure {
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
    addDomainQuery(o) {
    }
    addEncodedQuery(query, enforceFieldACLs) {
    }
    addExtraField(field) {
    }
    addFunction(func) {
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
    getUniqueValue() {
        return "";
    }
    getValue(name) {
        return "";
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
    setCategory(category) {
    }
    setDisplayValue(name, value) {
    }
    setEngineParameter(name, value) {
    }
    setForceUpdate(e) {
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
exports.GlideRecordSecure = GlideRecordSecure;
//# sourceMappingURL=GlideRecordSecure.js.map