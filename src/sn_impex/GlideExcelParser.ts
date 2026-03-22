export class GlideExcelParser {
    constructor() {  }
    close(): void {
        
    }
    getColumnHeaders(): Array<any> {
        return [];
    }
    getErrorMessage(): string {
        return "";
    }
    getRow(): Record<any, any> {
        return {} as any;
    }
    getSheetNames(): Array<any> {
        return [];
    }
    getTableInfo(): Record<any, any> {
        return {} as any;
    }
    next(): boolean {
        return false;
    }
    parse(is?: any): boolean {
        return false;
    }
    parseFormData(inStream?: any): boolean {
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
    setSource(is?: any): boolean {
        return false;
    }
    setSourceFormData(inStream?: any): boolean {
        return false;
    }
}
