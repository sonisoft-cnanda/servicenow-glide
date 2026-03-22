import { Calendar } from "../imports/Calendar";
import { TimeZone } from "../imports/TimeZone";
import { GlideDateTime } from "./GlideDateTime";
import { GlideIntegerDate } from "./GlideIntegerDate";
import { GlideIntegerTime } from "./GlideIntegerTime";

export class GlideScheduleDateTime {
    constructor();
    constructor(gdt: GlideDateTime);
    constructor(sdt: GlideScheduleDateTime);
    constructor(userDateTime: string);
    constructor(ms: number, timeZone: string);
    constructor(...args: any[]) {  }
    addDays(days: number): void {
        
    }
    addSeconds(seconds: number): void {
        
    }
    compareTo(o: any): number {
        return 0;
    }
    convertTimeZone(fromTZ: string, toTZ: string): string {
        return "";
    }
    equals(idt: GlideScheduleDateTime): boolean {
        return false;
    }
    getCal(): Calendar {
        return null as any;
    }
    getDisplayValue(): string {
        return "";
    }
    getDisplayValueInternal(): string {
        return "";
    }
    getGlideDateTime(): GlideDateTime {
        return null as any;
    }
    getIntegerDate(): GlideIntegerDate {
        return null as any;
    }
    getIntegerTime(): GlideIntegerTime {
        return null as any;
    }
    getMS(): number {
        return 0;
    }
    getTimeZone(): TimeZone {
        return null as any;
    }
    getTimeZoneID(): string {
        return "";
    }
    getValue(): string {
        return "";
    }
    getValueInternal(): string {
        return "";
    }
    isDST(): boolean {
        return false;
    }
    isFloating(): boolean {
        return false;
    }
    setBeginningOfDay(): void {
        
    }
    setCal(cal: Calendar): void {
        
    }
    setEndOfDay(): void {
        
    }
    setIncludeZFormat(value: boolean): void {
        
    }
    setMS(ms: number): void {
        
    }
    setTimeZone(tz: string): void {
        
    }
    setValue(o: any): void {
        
    }
    toString(): string {
        return "";
    }
}
