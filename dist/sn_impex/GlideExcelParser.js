"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlideExcelParser = void 0;
class GlideExcelParser {
    constructor() { }
    close() {
    }
    getColumnHeaders() {
        return new Array();
    }
    getErrorMessage() {
        return "";
    }
    getRow() {
        return {};
    }
    getSheetNames() {
        return new Array();
    }
    getTableInfo() {
        return {};
    }
    next() {
        return false;
    }
    parse(is) {
        return false;
    }
    parseFormData(inStream) {
        return false;
    }
    setHeaderRowNumber(headerRowNumber) {
    }
    setNullToEmpty(flag) {
    }
    setSheetName(sheetName) {
    }
    setSheetNumber(sheetNumber) {
    }
    setSource(is) {
        return false;
    }
    setSourceFormData(inStream) {
        return false;
    }
}
exports.GlideExcelParser = GlideExcelParser;
//# sourceMappingURL=GlideExcelParser.js.map