import { JSONObject } from './JSONObject';
import { PdfMergeSignRequestor } from './PdfMergeSignRequestor';

export class PDFGenerationAPI {
    constructor() {}
    cleanUpPdfResources(): void {
        
    }
    convertToPDF(html?: string, tableName?: string, sysId?: string, name?: string, customFontSysId?: string, documentConfiguration?: Record<any, any>): JSONObject {
        return new JSONObject();
    }
    convertToPDFWithHeaderFooter(html?: string, tableName?: string, sysId?: string, name?: string, headerFooterInfo?: Record<any, any>, fontFamilySysId?: string, documentConfiguration?: Record<any, any>): JSONObject {
        return new JSONObject();
    }
    fillDocumentFields(fieldsMap?: Record<any, any>, sysId?: string, tableName?: string, tableSysId?: string, pdfName?: string): JSONObject {
        return new JSONObject();
    }
    fillDocumentFieldsAndFlatten(fieldsMap?: Record<any, any>, sysId?: string, tableName?: string, tableSysId?: string, pdfName?: string, paramMap?: Record<any, any>): JSONObject {
        return new JSONObject();
    }
    fillFieldsAndMergeSignature(fieldsMap?: Record<any, any>, sysId?: string, tableName?: string, tableSysId?: string, pdfMergeSignRequestor?: PdfMergeSignRequestor, pdfName?: string, paramMap?: Record<any, any>): JSONObject {
        return new JSONObject();
    }
    getDocumentFields(sysId?: string): JSONObject {
        return new JSONObject();
    }
    getDocumentFieldsType(sysId?: string): Record<any, any> {
        return {};
    }
    getFilledDocumentWithSignatureAsBase64(fieldsMap?: Record<any, any>, sysId?: string, pdfMergeSignRequestor?: PdfMergeSignRequestor, paramMap?: Record<any, any>): JSONObject {
        return new JSONObject();
    }
    getPdfPageSizes(sysId?: string): JSONObject {
        return new JSONObject();
    }
    isDocumentFillable(sysId?: string): JSONObject {
        return new JSONObject();
    }
}
