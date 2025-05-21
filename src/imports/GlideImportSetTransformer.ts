import { GlideImportSetRun } from './GlideImportSetRun';
import { ImportSetRun } from './ImportSetRun';
import { ImportLog } from './ImportLog';
import { GlideRecord } from './GlideRecord';

export class GlideImportSetTransformer {
    constructor() {}
    getImportSetRun(): GlideImportSetRun {
        return new GlideImportSetRun();
    }
    getProgressID(): string {
        return "";
    }
    isError(): boolean {
        return false;
    }
    setBackground(background?: boolean): void {
        
    }
    setImportSetID(id?: string): void {
        
    }
    setImportSetRun(importSetRun?: ImportSetRun): void {
        
    }
    setLogger(log?: ImportLog): void {
        
    }
    setMapID(mapID?: string): void {
        
    }
    setProgressName(name?: string): void {
        
    }
    setSyncImport(syncImport?: boolean): void {
        
    }
    start(): void {
        
    }
    transformAllMaps(importSetGr?: GlideRecord, rowSysId?: string): void {
        
    }
}
