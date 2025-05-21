import { InputStream } from './InputStream';

export class GlideExcelParser {
    constructor() {}
    close(): void {
        
    }
    getColumnHeaders(): Array<any> {
        return new Array();
    }
    getErrorMessage(): string {
        return "";
    }
    getRow(): Record<any, any> {
        return {};
    }
    getSheetNames(): Array<any> {
        return new Array();
    }
    getTableInfo(): Record<any, any> {
        return {};
    }
    next(): boolean {
        return false;
    }
    parse(is?: InputStream): boolean {
        return false;
    }
    parseFormData(inStream?: InputStream): boolean {
        return false;
    }
    setHeaderRowNumber(headerRowNumber?: number): void {
        
    }
    setNullToEmpty(flag?: boolean): void {
        
    }
    setSheetName(sheetName?: string): void {
        
    }
    setSheetNumber(sheetNumber?: number): void {
        
    }
    setSource(is?: InputStream): boolean {
        return false;
    }
    setSourceFormData(inStream?: InputStream): boolean {
        return false;
    }
}
