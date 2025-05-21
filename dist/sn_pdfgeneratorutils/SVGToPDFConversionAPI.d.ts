import { JSONObject } from '../imports/JSONObject.js';
export declare class SVGToPDFConversionAPI {
    constructor();
    addSVGToPDF(svg?: string, inputPdfSysId?: string, targetTable?: string, targetSysId?: string, nameForPdf?: string, pageNo?: number, x?: number, y?: number, svgImgWidth?: number, svgImgHeight?: number): JSONObject;
    convertSVGToPDF(svg?: string, nameForPDF?: string, targetTable?: string, targetSysId?: string): JSONObject;
    convertSVGToPDFWithSize(svg?: string, nameForPDF?: string, targetTable?: string, targetSysId?: string, svgImgWidth?: number, svgImgHeight?: number): JSONObject;
}
//# sourceMappingURL=SVGToPDFConversionAPI.d.ts.map