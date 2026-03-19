import { GlideRecord } from '../imports/GlideRecord';

export class GlideFilter {
    constructor(filter?: string, title?: string) {}
    checkRecord(gr?: GlideRecord, filter?: string, match?: boolean): boolean {
        return false;
    }
    getDisplayTitle(): string {
        return "";
    }
    getFilter(): string {
        return "";
    }
    getTitle(): string {
        return "";
    }
    match(gr?: GlideRecord, bMatchAll?: boolean): boolean {
        return false;
    }
    setCaseSensitive(caseSensitive?: boolean): void {
        
    }
    setDisplayTitle(title?: string): void {
        
    }
    setEnforceSecurity(enforceSecurity?: boolean): void {
        
    }
}
