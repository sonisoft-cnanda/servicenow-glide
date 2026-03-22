import { PdfMergeSignRequestor } from "./PdfMergeSignRequestor";

export class PDFGenerationAPI {
    constructor() {  }
    static canExecuteOnService(): boolean {
        return false;
    }
    static cleanUpPdfResources(): void {
        
    }
    convertToPDF(html: string, tableName: string, sysId: string, name: string, customFontSysId: string, documentConfiguration: Map<string, string>): any {
        return null as any;
    }
    convertToPDFAsync(html: string, tableName: string, sysId: string, name: string, customFontSysId: string, documentConfiguration: Map<string, string>): any {
        return null as any;
    }
    convertToPDFWithHeaderFooter(html: string, tableName: string, sysId: string, name: string, headerFooterInfo: Map<string, string>, fontFamilySysId: string, documentConfiguration: Map<string, string>): any {
        return null as any;
    }
    convertToPDFWithHeaderFooterAsync(html: string, tableName: string, sysId: string, name: string, headerFooterInfo: Map<string, string>, fontFamilySysId: string, documentConfiguration: Map<string, string>): any {
        return null as any;
    }
    fillDocumentFields(fieldsMap: Map<string, any>, sysId: string, tableName: string, tableSysId: string, pdfName: string): any {
        return null as any;
    }
    fillDocumentFieldsAndFlatten(fieldsMap: Map<string, any>, sysId: string, tableName: string, tableSysId: string, pdfName: string, paramMap: Map<string, string>): any {
        return null as any;
    }
    fillFieldsAndMergeSignature(fieldsMap: Map<string, any>, sysId: string, tableName: string, tableSysId: string, pdfMergeSignRequestor: PdfMergeSignRequestor, pdfName: string, paramMap: Map<string, string>): any {
        return null as any;
    }
    getDocumentFields(sysId: string): any {
        return null as any;
    }
    getDocumentFieldsType(sysId: string): Map<string, string[]> {
        return {} as any;
    }
    getFilledDocumentWithSignatureAsBase64(fieldsMap: Map<string, any>, sysId: string, pdfMergeSignRequestor: PdfMergeSignRequestor, paramMap: Map<string, string>): any {
        return null as any;
    }
    getPdfPageSizes(sysId: string): any {
        return null as any;
    }
    isDocumentFillable(sysId: string): any {
        return null as any;
    }
    redact(inputJson: string): any {
        return null as any;
    }
}
