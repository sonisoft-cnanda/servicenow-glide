import { GlideTransformLog } from "./GlideTransformLog";

export class GlideImportLog extends GlideTransformLog {
    constructor(...args: any[]) { super(); }
    error(message: string, source?: string): void {
        
    }
    info(message: string, source?: string): void {
        
    }
    warn(message?: string, source?: string): void {
        
    }
    getImportRunHistory(): string {
        return "";
    }
    setImportRunHistory(importRunHistory: string): void {
        
    }
}
