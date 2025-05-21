import { GlideImportSetRun } from '../imports/GlideImportSetRun.js';
import { ImportSetRun } from '../imports/ImportSetRun.js';
import { ImportLog } from '../imports/ImportLog.js';
import { GlideRecord } from '../imports/GlideRecord.js';
export declare class GlideImportSetTransformer {
    constructor();
    getImportSetRun(): GlideImportSetRun;
    getProgressID(): string;
    isError(): boolean;
    setBackground(background?: boolean): void;
    setImportSetID(id?: string): void;
    setImportSetRun(importSetRun?: ImportSetRun): void;
    setLogger(log?: ImportLog): void;
    setMapID(mapID?: string): void;
    setProgressName(name?: string): void;
    setSyncImport(syncImport?: boolean): void;
    start(): void;
    transformAllMaps(importSetGr?: GlideRecord, rowSysId?: string): void;
}
//# sourceMappingURL=GlideImportSetTransformer.d.ts.map