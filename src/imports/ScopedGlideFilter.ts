import { GlideRecord } from './GlideRecord';

export class ScopedGlideFilter {
    constructor(filter?: string, title?: string) {}
    checkRecord(gr?: GlideRecord, filter?: string, match?: any): boolean {
        return false;
    }
    match(gr?: GlideRecord, bMatchAll?: any): boolean {
        return false;
    }
    setCaseSensitive(caseSensitive?: boolean): void {
        
    }
}
