import { GlideRecord } from '../imports/GlideRecord.js';
export declare class GlideFilter {
    constructor(filter?: string, title?: string);
    checkRecord(gr?: GlideRecord, filter?: string, match?: boolean): boolean;
    getDisplayTitle(): string;
    getFilter(): string;
    getTitle(): string;
    match(gr?: GlideRecord, bMatchAll?: boolean): boolean;
    setCaseSensitive(caseSensitive?: boolean): void;
    setDisplayTitle(title?: string): void;
    setEnforceSecurity(enforceSecurity?: boolean): void;
}
//# sourceMappingURL=GlideFilter.d.ts.map