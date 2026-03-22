import { NativeObject } from "../imports/NativeObject";

export class GlideExecutionTracker {
    constructor(sys_id: string) {  }
    createChildIfAbsent(name: string): GlideExecutionTracker {
        return null as any;
    }
    fail(message: string): void {
        
    }
    static getLastRunning(): GlideExecutionTracker {
        return null as any;
    }
    getSource(): string {
        return "";
    }
    getSourceTable(): string {
        return "";
    }
    getSysID(): string {
        return "";
    }
    incrementPercentComplete(step: number): void {
        
    }
    run(): void {
        
    }
    setSource(source: string): void {
        
    }
    setSourceTable(sourceTable: string): void {
        
    }
    success(message: string): void {
        
    }
    updateResult(result: NativeObject): void {
        
    }
}
