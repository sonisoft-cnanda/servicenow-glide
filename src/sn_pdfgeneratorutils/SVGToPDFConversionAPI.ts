import { JSONObject } from '../imports/JSONObject';

export class SVGToPDFConversionAPI {
    constructor() {}
    addSVGToPDF(svg?: string, inputPdfSysId?: string, targetTable?: string, targetSysId?: string, nameForPdf?: string, pageNo?: number, x?: number, y?: number, svgImgWidth?: number, svgImgHeight?: number): JSONObject {
        return new JSONObject();
    }
    convertSVGToPDF(svg?: string, nameForPDF?: string, targetTable?: string, targetSysId?: string): JSONObject {
        return new JSONObject();
    }
    convertSVGToPDFWithSize(svg?: string, nameForPDF?: string, targetTable?: string, targetSysId?: string, svgImgWidth?: number, svgImgHeight?: number): JSONObject {
        return new JSONObject();
    }
}
