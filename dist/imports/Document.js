"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Document = void 0;
const PdfPage_1 = require("./PdfPage.js");
class Document {
    constructor(os, pageSize) { }
    addAndStartNewPage() {
    }
    addAuthor(author) {
    }
    addEvent(event, eventHandler) {
    }
    addImage(image) {
    }
    addNewLine() {
    }
    addNewPage() {
    }
    addNewPageAtIndex(index) {
    }
    addParagraph(paragraph) {
    }
    addTable(table) {
    }
    close() {
    }
    createDocument(pageSize) {
        return new Document();
    }
    getPageCount() {
        return 0;
    }
    getPageSize() {
        return new PdfPage_1.PdfPage();
    }
    initializeDocument(os, pageSize) {
    }
    isClosed() {
        return false;
    }
    saveAsAttachment(tableName, tableSysId, fileName) {
        return "";
    }
    setBaseDirection(direction) {
    }
    setMargins(topMargin, rightMargin, bottomMargin, leftMargin) {
    }
}
exports.Document = Document;
//# sourceMappingURL=Document.js.map