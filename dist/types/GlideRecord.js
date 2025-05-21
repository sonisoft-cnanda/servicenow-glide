"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlideRecord = void 0;
const GlideQueryCondition_1 = require("../imports/GlideQueryCondition.js");
const GlideElementDescriptor_1 = require("../imports/GlideElementDescriptor.js");
const GlideElement_1 = require("../imports/GlideElement.js");
class GlideRecord {
    constructor(tableName) { }
    addActiveQuery() {
        return new GlideQueryCondition_1.GlideQueryCondition();
    }
    addEncodedQuery(query, enforceFieldACLs) { }
    addFunction(func) { }
    addJoinQuery(joinTable, primaryField, joinTableField) {
        return new GlideQueryCondition_1.GlideQueryCondition();
    }
    addNotNullQuery(fieldName) {
        return new GlideQueryCondition_1.GlideQueryCondition();
    }
    addNullQuery(fieldName) {
        return new GlideQueryCondition_1.GlideQueryCondition();
    }
    addQuery(...args) {
        return new GlideQueryCondition_1.GlideQueryCondition();
    }
    addValue(field, value) { }
    applyEncodedQuery(queryString) { }
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
    chooseWindow(firstRow, lastRow, forceCount) { }
    deleteMultiple() { }
    deleteRecord() {
        return false;
    }
    disableSysIdInOptimization() { }
    get(name, value) {
        return false;
    }
    getAttribute(fieldName) {
        return "";
    }
    getClassDisplayValue() {
        return "";
    }
    getDisplayValue(fieldName) {
        return "";
    }
    getED() {
        return new GlideElementDescriptor_1.GlideElementDescriptor();
    }
    getElement(fieldName) {
        return new GlideElement_1.GlideElement();
    }
    getElements() {
        return [];
    }
    getEncodedQuery() {
        return "";
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
    getRecordClassName() {
        return "";
    }
    getRowCount() {
        return 0;
    }
    getTableName() {
        return "";
    }
    getUniqueValue() {
        return "";
    }
    getValue(fieldName) {
        return "";
    }
    hasNext() {
        return false;
    }
    initialize() { }
    insert() {
        return "";
    }
    isActionAborted() {
        return false;
    }
    isEncodedQueryValid(query) {
        return false;
    }
    isNewRecord() {
        return false;
    }
    isValid() {
        return false;
    }
    isValidRecord() {
        return false;
    }
    isValidField(fieldName) {
        return false;
    }
    next() {
        return false;
    }
    orderBy(fieldName) { }
    orderByDesc(fieldName) { }
    operation() {
        return null;
    }
    query() { }
    setLimit(limit) { }
    setValue(fieldName, value) { }
    update() {
        return "";
    }
    updateMultiple() { }
}
exports.GlideRecord = GlideRecord;
//# sourceMappingURL=GlideRecord.js.map