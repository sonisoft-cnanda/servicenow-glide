import { GlideRecord } from '../imports/GlideRecord';
import { ImportSetRun } from '../imports/ImportSetRun';
import { GlideImportSetRun } from '../imports/GlideImportSetRun';
import { ImportLog } from '../imports/ImportLog';
export declare class GlideImportSetTransformer {
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
    constructor();
}
