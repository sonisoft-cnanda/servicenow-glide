"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlideElement = void 0;
const GlideElementDescriptor_1 = require("../imports/GlideElementDescriptor.js");
const SysStyleResult_1 = require("../imports/SysStyleResult.js");
const AGlideObject_1 = require("../imports/AGlideObject.js");
const GlideRecord_1 = require("../imports/GlideRecord.js");
const MappingLookupSourceDescriptor_1 = require("../imports/MappingLookupSourceDescriptor.js");
class GlideElement {
    constructor() { }
    canCreate() {
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
    changesFrom(o) {
        return false;
    }
    changesFromNotEmpty() {
        return false;
    }
    changesTo(o) {
        return false;
    }
    changesToNotEmpty() {
        return false;
    }
    debug(msg) {
    }
    elementSupportsMapping() {
        return false;
    }
    explainLock() {
        return "";
    }
    getAttribute(attribute) {
        return "";
    }
    getBaseTableName() {
        return "";
    }
    getBooleanAttribute(attribute) {
        return false;
    }
    getChoiceValue() {
        return "";
    }
    getChoiceValueLang(language) {
        return "";
    }
    getChoices(dependent) {
        return new Array();
    }
    getContextID() {
        return "";
    }
    getContextName() {
        return "";
    }
    getDebugCount() {
        return 0;
    }
    getDecryptedValue() {
        return "";
    }
    getDependent() {
        return "";
    }
    getDependentTable() {
        return "";
    }
    getDisplayValue(maxCharacters) {
        return "";
    }
    getDisplayValueExt(maxCharacters, nullsub) {
        return "";
    }
    getDisplayValueLang(language) {
        return "";
    }
    getED() {
        return new GlideElementDescriptor_1.GlideElementDescriptor();
    }
    getElementValue(name) {
        return "";
    }
    getError() {
        return "";
    }
    getEscapedValue() {
        return "";
    }
    getFieldStyle() {
        return "";
    }
    getFullStyle() {
        return new SysStyleResult_1.SysStyleResult();
    }
    getGlideObject() {
        return new AGlideObject_1.AGlideObject();
    }
    getGlideRecord() {
        return new GlideRecord_1.GlideRecord("");
    }
    getHTMLValue(maxChars) {
        return "";
    }
    getHTMLValueExt(maxCharacters, nullsub) {
        return "";
    }
    getHint() {
        return "";
    }
    getInitialValue() {
        return "";
    }
    getLabel() {
        return "";
    }
    getLabelLang(language) {
        return "";
    }
    getMappingConfig() {
        return new MappingLookupSourceDescriptor_1.MappingLookupSourceDescriptor();
    }
    getModifiedBy() {
        return "";
    }
    getName() {
        return "";
    }
    getReferenceKey() {
        return "";
    }
    getRefRecord() {
        return new GlideRecord_1.GlideRecord("");
    }
    getStyle() {
        return "";
    }
    getTableName() {
        return "";
    }
    getTextAreaDisplayValue() {
        return "";
    }
    getValue() {
        return "";
    }
    getValueMapping() {
        return "";
    }
    getXHTMLValue() {
        return "";
    }
    getXMLValue() {
        return "";
    }
    hasAttribute(attribute) {
        return false;
    }
    hasMapping() {
        return false;
    }
    hasRightsTo(operation) {
        return false;
    }
    hasValue() {
        return false;
    }
    isArray() {
        return false;
    }
    isDynamicCreate() {
        return false;
    }
    isNil() {
        return false;
    }
    isObject() {
        return false;
    }
    nil() {
        return false;
    }
    setDisplayValue(value) {
    }
    setError(error) {
    }
    setInitialValue(value) {
    }
    setJournalEntry(value, userName) {
    }
    setValue(value) {
    }
    setValueMapping(mapping) {
    }
    size() {
        return 0;
    }
    toString() {
        return "";
    }
}
exports.GlideElement = GlideElement;
//# sourceMappingURL=GlideElement.js.map