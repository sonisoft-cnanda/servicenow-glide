import { GlideScheduleDateTimeSpan } from "./GlideScheduleDateTimeSpan";

export class GlideScheduleTimeMap {
    constructor() {  }
    addExclude(span: GlideScheduleDateTimeSpan): void {
        
    }
    addInclude(span: GlideScheduleDateTimeSpan): void {
        
    }
    addIncludeSpans(spans: Array<GlideScheduleDateTimeSpan>): void {
        
    }
    buildMap(timeZone: string): void {
        
    }
    dumpTimeMapTZ(): void {
        
    }
    hasNext(): boolean {
        return false;
    }
    isEmpty(): boolean {
        return false;
    }
    next(): GlideScheduleDateTimeSpan {
        return null as any;
    }
    overlapsWith(otherTimeMap: GlideScheduleTimeMap, timeZone: string): GlideScheduleTimeMap;
    overlapsWith(otherTimeMap: GlideScheduleTimeMap, timeZone: string, compressTimeMap: boolean): GlideScheduleTimeMap;
    overlapsWith(...args: any[]): any {
        return null as any;
    }
}
