import { AJAXScheduleItem } from "./AJAXScheduleItem";
import { GlideRecord } from "./GlideRecord";
import { GlideSchedule } from "./GlideSchedule";
import { GlideScheduleDateTime } from "./GlideScheduleDateTime";

export class AJAXSchedulePage {
    constructor();
    constructor(start: GlideScheduleDateTime, end: GlideScheduleDateTime, timeZone: string);
    constructor(...args: any[]) {  }
    clear(): void {
        
    }
    setReadOnly(readOnly: boolean): void {
        
    }
    setTimeZone(timeZone: string): void {
        
    }
    setCompressTimeMap(compressTimeMap: boolean): void {
        
    }
    getCompressTimeMap(): boolean {
        return false;
    }
    setDateRange(start: GlideScheduleDateTime, end: GlideScheduleDateTime): void {
        
    }
    getStart(): GlideScheduleDateTime {
        return null as any;
    }
    getEnd(): GlideScheduleDateTime {
        return null as any;
    }
    getParameter(name: string): string {
        return "";
    }
    getColor(id: string): string {
        return "";
    }
    isLegacy(): boolean {
        return false;
    }
    setLegacy(legacy: boolean): void {
        
    }
    static colorValue(index: number): void {
        
    }
    darkenColor(color: string): string {
        return "";
    }
    shortHexToLong(shortHex: string): string {
        return "";
    }
    colorToHex(color: string): string {
        return "";
    }
    addSchedule(sysId: string, color: string, query: string): Array<AJAXScheduleItem>;
    addSchedule(sysId: string, color: string, query: string, editable: boolean): Array<AJAXScheduleItem>;
    addSchedule(...args: any[]): any {
        return [];
    }
    addScheduleObject(schedule: GlideSchedule, altName: string, color: string, ignoreEmpty: boolean): AJAXScheduleItem {
        return null as any;
    }
    addScheduleSpan(gr: GlideRecord, timeZone: string, altName: string, color: string): AJAXScheduleItem {
        return null as any;
    }
    addItem(gr: GlideRecord, start: string, end: string, altName: string, color: string): AJAXScheduleItem {
        return null as any;
    }
    getItems(): Array<AJAXScheduleItem> {
        return [];
    }
}
