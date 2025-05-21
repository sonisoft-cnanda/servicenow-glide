"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Table = void 0;
const Style_1 = require("../imports/Style.js");
const Color_1 = require("../imports/Color.js");
class Table {
    constructor(ltr, columnWidths, largeTable) { }
    addCell(cell) {
    }
    addCellWithStyle(cell, style) {
    }
    addHeaderCell(cell) {
    }
    addImageCell(image) {
    }
    addParagraphCell(p) {
    }
    addTextCell(text) {
    }
    complete() {
    }
    donotSplitRowOnPageBreak(value) {
    }
    flush() {
    }
    getDefaultStyle() {
        return new Style_1.Style();
    }
    getDefaultbackGroundColor() {
        return new Color_1.Color();
    }
    getHeaderStyle() {
        return new Style_1.Style();
    }
    setBackGroundColor(color) {
    }
    setBorder(width) {
    }
    setDefaultStyle(defaultStyle) {
    }
    setDefaultbackGroundColor(color) {
    }
    setFixedPosition(pageNumber, left, bottom, width) {
    }
    setHeaderStyle(headerStyle) {
    }
    setHorizontalAlignment(alignment) {
    }
    setKeepTogether(val) {
    }
    setMargin(margin) {
    }
    setMarginBottom(margin) {
    }
    setMarginLeft(margin) {
    }
    setMarginRight(margin) {
    }
    setMarginTop(margin) {
    }
    setRunDirection(direction) {
    }
    setSkipFirstHeader(skipFirstHeader) {
    }
    setWidth(width) {
    }
    useAllAvailableWidth() {
    }
}
exports.Table = Table;
//# sourceMappingURL=Table.js.map