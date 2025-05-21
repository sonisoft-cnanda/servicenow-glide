import { JSONObject } from '../imports/JSONObject.js';
import { PdfMergeSignRequestor } from '../imports/PdfMergeSignRequestor.js';
export declare class PDFGenerationAPI {
    constructor();
    cleanUpPdfResources(): void;
    convertToPDF(html?: string, tableName?: string, sysId?: string, name?: string, customFontSysId?: string, documentConfiguration?: Record<any, any>): JSONObject;
    convertToPDFWithHeaderFooter(html?: string, tableName?: string, sysId?: string, name?: string, headerFooterInfo?: Record<any, any>, fontFamilySysId?: string, documentConfiguration?: Record<any, any>): JSONObject;
    fillDocumentFields(fieldsMap?: Record<any, any>, sysId?: string, tableName?: string, tableSysId?: string, pdfName?: string): JSONObject;
    fillDocumentFieldsAndFlatten(fieldsMap?: Record<any, any>, sysId?: string, tableName?: string, tableSysId?: string, pdfName?: string, paramMap?: Record<any, any>): JSONObject;
    fillFieldsAndMergeSignature(fieldsMap?: Record<any, any>, sysId?: string, tableName?: string, tableSysId?: string, pdfMergeSignRequestor?: PdfMergeSignRequestor, pdfName?: string, paramMap?: Record<any, any>): JSONObject;
    getDocumentFields(sysId?: string): JSONObject;
    getDocumentFieldsType(sysId?: string): Record<any, any>;
    getFilledDocumentWithSignatureAsBase64(fieldsMap?: Record<any, any>, sysId?: string, pdfMergeSignRequestor?: PdfMergeSignRequestor, paramMap?: Record<any, any>): JSONObject;
    getPdfPageSizes(sysId?: string): JSONObject;
    isDocumentFillable(sysId?: string): JSONObject;
}
//# sourceMappingURL=PDFGenerationAPI.d.ts.map