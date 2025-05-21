"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlideElementDescriptor = void 0;
const GlideAttributes_1 = require("../imports/GlideAttributes.js");
class GlideElementDescriptor {
    constructor(name, type, length) { }
    canAvg() {
        return false;
    }
    canMax() {
        return false;
    }
    canMin() {
        return false;
    }
    canSum() {
        return false;
    }
    getAttachmentEncryptionType() {
        return "";
    }
    getAttribute(name) {
        return "";
    }
    getBooleanAttribute(attribute, def) {
        return false;
    }
    getChoice() {
        return 0;
    }
    getChoiceTable() {
        return "";
    }
    getColumnName() {
        return "";
    }
    getDefault() {
        return "";
    }
    getDependent() {
        return "";
    }
    getDirectAttribute(name) {
        return "";
    }
    getEncryptionType() {
        return "";
    }
    getFirstTableName() {
        return "";
    }
    getHint() {
        return "";
    }
    getInternalType() {
        return "";
    }
    getLabel() {
        return "";
    }
    getLength() {
        return 0;
    }
    getName() {
        return "";
    }
    getPlural() {
        return "";
    }
    getReference() {
        return "";
    }
    getReferenceKey() {
        return "";
    }
    getReferenceQualifier() {
        return "";
    }
    getSchemaTableName() {
        return "";
    }
    getScopeID() {
        return "";
    }
    getSqlLength() {
        return 0;
    }
    getTableName() {
        return "";
    }
    getType() {
        return 0;
    }
    getUniqueID() {
        return "";
    }
    hasAttachmentsEncrypted() {
        return false;
    }
    hasAttribute(attribute) {
        return false;
    }
    isActive() {
        return false;
    }
    isAdpEncrypted() {
        return false;
    }
    isAdpEncryptedDataAllowed() {
        return false;
    }
    isAutoOrSysID() {
        return false;
    }
    isBoolean() {
        return false;
    }
    isChoiceTable() {
        return false;
    }
    isDateOnly() {
        return false;
    }
    isDateType() {
        return false;
    }
    isDisplay() {
        return false;
    }
    isDuration() {
        return false;
    }
    isEdgeEncryptable() {
        return false;
    }
    isEdgeEncrypted() {
        return false;
    }
    isEncrypted() {
        return false;
    }
    isFirstTableName() {
        return false;
    }
    isInDatabase() {
        return false;
    }
    isJournal() {
        return false;
    }
    isJournalList() {
        return false;
    }
    isList() {
        return false;
    }
    isMandatory() {
        return false;
    }
    isMetricType() {
        return false;
    }
    isMultiText() {
        return false;
    }
    isNumber() {
        return false;
    }
    isObject() {
        return false;
    }
    isReadOnly() {
        return false;
    }
    isReference() {
        return false;
    }
    isString() {
        return false;
    }
    isTime() {
        return false;
    }
    isTimeType() {
        return false;
    }
    isTrulyNumber() {
        return false;
    }
    isVirtual() {
        return false;
    }
    mergeAttributesWithTables() {
        return new GlideAttributes_1.GlideAttributes();
    }
    serializeAttributes() {
        return "";
    }
    setInternalType(s) {
    }
    setIsReference(b) {
    }
    setName(name) {
    }
    toSQLType(dbi) {
        return "";
    }
    toString() {
        return "";
    }
    toXML() {
        return new Element();
    }
}
exports.GlideElementDescriptor = GlideElementDescriptor;
//# sourceMappingURL=GlideElementDescriptor.js.map