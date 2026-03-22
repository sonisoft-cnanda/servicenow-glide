import { GlideRecord } from "./GlideRecord";

export class GlideFilter {
    constructor(filter: string, title: string) {  }
    getFilter(): string {
        return "";
    }
    match(gr: GlideRecord, bMatchAll: boolean): boolean {
        return false;
    }
    getScript(filterString: string, targetTableName: string): string {
        return "";
    }
    getTitle(): string {
        return "";
    }
    getDisplayTitle(): string {
        return "";
    }
    setDisplayTitle(title: string): void {
        
    }
    static checkRecord(gr: GlideRecord, filter: string, match?: boolean): boolean {
        return false;
    }
    setCaseSensitive(caseSensitive: boolean): void {
        
    }
    setEnforceSecurity(enforceSecurity: boolean): void {
        
    }
}
