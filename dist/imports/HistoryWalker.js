"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HistoryWalker = void 0;
const ScriptableObject_1 = require("./ScriptableObject.js");
class HistoryWalker {
    constructor(cx, args, ctorObj, inNewExpr) { }
    getUpdateNumber() {
        return 0;
    }
    getWalkedRecord() {
        return new ScriptableObject_1.ScriptableObject();
    }
    getWalkedRecordCopy() {
        return new ScriptableObject_1.ScriptableObject();
    }
    isFieldLevelSecurity() {
        return false;
    }
    isRecordLevelSecurity() {
        return false;
    }
    isWithChanges() {
        return false;
    }
    isWithJournalFields() {
        return false;
    }
    isWithSysFields() {
        return false;
    }
    isWithVariables() {
        return false;
    }
    printTimings() {
    }
    setFieldLevelSecurity(cx, thisObj, args, funObj) {
    }
    setRecordLevelSecurity(cx, thisObj, args, funObj) {
    }
    setWithChanges(cx, thisObj, args, funObj) {
    }
    setWithJournalFields(cx, thisObj, args, funObj) {
    }
    setWithSysFields(cx, thisObj, args, funObj) {
    }
    setWithVariables(cx, thisObj, args, funObj) {
    }
    walkBackward() {
        return false;
    }
    walkForward() {
        return false;
    }
    walkTo(cx, thisObj, args, funObj) {
        return false;
    }
}
exports.HistoryWalker = HistoryWalker;
//# sourceMappingURL=HistoryWalker.js.map