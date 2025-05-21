import { JSONObject } from '../imports/JSONObject.js';
export declare class PdfMergeSignRequestor {
    constructor();
    addSignatureMapping(pageNumber?: number, leftMargin?: number, topMargin?: number, boxWidth?: number, boxHeight?: number, signatureImgSysId?: string): void;
    createRequest(srcDocumentSysId?: string, targetTableName?: string, targetTableSysId?: string, targetFileName?: string): void;
    processRequest(): JSONObject;
}
//# sourceMappingURL=PdfMergeSignRequestor.d.ts.map