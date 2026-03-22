import { TimeZone } from "../imports/TimeZone";
import { GlideDateTime } from "./GlideDateTime";
import { GlideDuration } from "./GlideDuration";
import { GlideRecord } from "./GlideRecord";
import { GlideScheduleDateTimeSpan } from "./GlideScheduleDateTimeSpan";
import { GlideScheduleTimeMap } from "./GlideScheduleTimeMap";
import { GlideScheduleTimeSpan } from "./GlideScheduleTimeSpan";

export class GlideSchedule {
    constructor();
    constructor(s: GlideSchedule);
    constructor(sysID: string);
    constructor(sysID: string, timeZone: string);
    constructor(sysID: string, adjustForLastSecondOfDay: boolean);
    constructor(...args: any[]) {  }
    add(startDate: GlideDateTime, offset: GlideDuration): GlideDateTime;
    add(startDate: GlideDateTime, offset: GlideDuration, timeZone: string): GlideDateTime;
    add(...args: any[]): any {
        return null as any;
    }
    addOtherSchedule0(otherSchedule: GlideSchedule, includeFlag: boolean): GlideSchedule {
        return null as any;
    }
    addTimeSpan(grSpan: GlideRecord): GlideScheduleTimeSpan {
        return null as any;
    }
    addTimeSpans(grSpans: GlideRecord): void {
        
    }
    addTimeSpansExcluded(grSpans: GlideRecord): void {
        
    }
    duration(startDate: GlideDateTime, endDate: GlideDateTime): GlideDuration;
    duration(startDate: GlideDateTime, endDate: GlideDateTime, timeZone: string): GlideDuration;
    duration(...args: any[]): any {
        return null as any;
    }
    excludeTimeSpan(grSpan: GlideRecord, timeZone: string): void {
        
    }
    fetchTimeMap(startDate: GlideDateTime, endDate: GlideDateTime, timeZone: string, compressTimeMap: boolean): GlideScheduleTimeMap {
        return null as any;
    }
    fetchTimeMapWithExcludes(startDate: GlideDateTime, endDate: GlideDateTime, timeZone: string, compressTimeMap: boolean): GlideScheduleTimeMap {
        return null as any;
    }
    getDaysOfWeek(): string {
        return "";
    }
    getDaysOfWeekIgnoringExcludedSpans(): string {
        return "";
    }
    getID(): string {
        return "";
    }
    getName(): string {
        return "";
    }
    getSpans(startDate: GlideDateTime, endDate: GlideDateTime): Array<GlideScheduleDateTimeSpan> {
        return [];
    }
    getTZ(): TimeZone {
        return null as any;
    }
    getTimeMap(startDate: GlideDateTime, endDate: GlideDateTime): GlideScheduleTimeMap;
    getTimeMap(startDate: GlideDateTime, endDate: GlideDateTime, timeZone: string): GlideScheduleTimeMap;
    getTimeMap(...args: any[]): any {
        return null as any;
    }
    getTimeZone(): string {
        return "";
    }
    isInSchedule(time: GlideDateTime): boolean;
    isInSchedule(time: GlideDateTime, timeZone: string): boolean;
    isInSchedule(...args: any[]): any {
        return false;
    }
    isValid(): boolean {
        return false;
    }
    load(sysID: string): void;
    load(sysID: string, timeZone: string): void;
    load(sysID: string, timeZone: string, excludeSpanID: string): void;
    load(...args: any[]): any {
        
    }
    overlapsWith(spanGR: GlideRecord, timeZone: string): GlideScheduleTimeMap {
        return null as any;
    }
    overlapsWithAfterStart(spanGR: GlideRecord, timeZone: string, startGDT: GlideDateTime): GlideScheduleTimeMap {
        return null as any;
    }
    setTimeZone(tz: string): void {
        
    }
    whenLast(time: GlideDateTime): number {
        return 0;
    }
    whenNext(): number;
    whenNext(time: GlideDateTime): number;
    whenNext(time: GlideDateTime, timeZone: string): number;
    whenNext(...args: any[]): any {
        return 0;
    }
}
