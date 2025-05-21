"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PDFGenerationAPI = void 0;
const JSONObject_1 = require("../imports/JSONObject.js");
class PDFGenerationAPI {
    constructor() { }
    cleanUpPdfResources() {
    }
    convertToPDF(html, tableName, sysId, name, customFontSysId, documentConfiguration) {
        return new JSONObject_1.JSONObject();
    }
    convertToPDFWithHeaderFooter(html, tableName, sysId, name, headerFooterInfo, fontFamilySysId, documentConfiguration) {
        return new JSONObject_1.JSONObject();
    }
    fillDocumentFields(fieldsMap, sysId, tableName, tableSysId, pdfName) {
        return new JSONObject_1.JSONObject();
    }
    fillDocumentFieldsAndFlatten(fieldsMap, sysId, tableName, tableSysId, pdfName, paramMap) {
        return new JSONObject_1.JSONObject();
    }
    fillFieldsAndMergeSignature(fieldsMap, sysId, tableName, tableSysId, pdfMergeSignRequestor, pdfName, paramMap) {
        return new JSONObject_1.JSONObject();
    }
    getDocumentFields(sysId) {
        return new JSONObject_1.JSONObject();
    }
    getDocumentFieldsType(sysId) {
        return {};
    }
    getFilledDocumentWithSignatureAsBase64(fieldsMap, sysId, pdfMergeSignRequestor, paramMap) {
        return new JSONObject_1.JSONObject();
    }
    getPdfPageSizes(sysId) {
        return new JSONObject_1.JSONObject();
    }
    isDocumentFillable(sysId) {
        return new JSONObject_1.JSONObject();
    }
}
exports.PDFGenerationAPI = PDFGenerationAPI;
//# sourceMappingURL=PDFGenerationAPI.js.map