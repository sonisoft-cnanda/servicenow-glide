"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Data = void 0;
const GlideDateTime_1 = require("./GlideDateTime.js");
class Data {
    constructor(cx, args, ctorObj, inNewExpr) { }
    fromModelString(model) {
        return new Data();
    }
    getEnd() {
        return new GlideDateTime_1.GlideDateTime();
    }
    getLabel() {
        return "";
    }
    getMetricName() {
        return "";
    }
    getPeriod() {
        return 0;
    }
    getStart() {
        return new GlideDateTime_1.GlideDateTime();
    }
    getSubject() {
        return "";
    }
    getTableName() {
        return "";
    }
    getValues() {
        return new Array();
    }
    size() {
        return 0;
    }
    toModelString() {
        return "";
    }
    validateModelParams(obj1) {
        return new Array();
    }
}
exports.Data = Data;
//# sourceMappingURL=Data.js.map