import { InputStream } from '../imports/InputStream.js';
export declare class GlideExcelParser {
    constructor();
    close(): void;
    getColumnHeaders(): Array<any>;
    getErrorMessage(): string;
    getRow(): Record<any, any>;
    getSheetNames(): Array<any>;
    getTableInfo(): Record<any, any>;
    next(): boolean;
    parse(is?: InputStream): boolean;
    parseFormData(inStream?: InputStream): boolean;
    setHeaderRowNumber(headerRowNumber?: number): void;
    setNullToEmpty(flag?: boolean): void;
    setSheetName(sheetName?: string): void;
    setSheetNumber(sheetNumber?: number): void;
    setSource(is?: InputStream): boolean;
    setSourceFormData(inStream?: InputStream): boolean;
}
//# sourceMappingURL=GlideExcelParser.d.ts.map