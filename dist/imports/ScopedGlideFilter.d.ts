import { GlideRecord } from './GlideRecord.js';
export declare class ScopedGlideFilter {
    constructor(filter?: string, title?: string);
    checkRecord(gr?: GlideRecord, filter?: string, match?: any): boolean;
    match(gr?: GlideRecord, bMatchAll?: any): boolean;
    setCaseSensitive(caseSensitive?: boolean): void;
}
//# sourceMappingURL=ScopedGlideFilter.d.ts.map