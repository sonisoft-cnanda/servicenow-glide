import { GlideDateTime } from '../imports/GlideDateTime';
import { GlideDuration } from '../imports/GlideDuration';
import { Schedule } from '../imports/Schedule';
import { GlideRecord } from '../imports/GlideRecord';
import { ScheduleTimeSpan } from '../imports/ScheduleTimeSpan';
import { ScheduleTimeMap } from '../imports/ScheduleTimeMap';
import { TimeZone } from '../imports/TimeZone';

export class GlideSchedule {
    constructor(sysID?: string, timeZone?: string) {}
    add(startDate?: GlideDateTime, offset?: GlideDuration, timeZone?: string): GlideDateTime {
        return new GlideDateTime();
    }
    addOtherSchedule0(otherSchedule?: Schedule, includeFlag?: boolean): GlideSchedule {
        return new GlideSchedule();
    }
    addTimeSpan(grSpan?: GlideRecord): ScheduleTimeSpan {
        return new ScheduleTimeSpan();
    }
    addTimeSpans(grSpans?: GlideRecord): void {
        
    }
    addTimeSpansExcluded(grSpans?: GlideRecord): void {
        
    }
    duration(startDate?: GlideDateTime, endDate?: GlideDateTime, timeZone?: string): GlideDuration {
        return new GlideDuration();
    }
    excludeTimeSpan(grSpan?: GlideRecord, timeZone?: string): void {
        
    }
    fetchTimeMap(startDate?: GlideDateTime, endDate?: GlideDateTime, timeZone?: string, compressTimeMap?: boolean): ScheduleTimeMap {
        return new ScheduleTimeMap();
    }
    fetchTimeMapWithExcludes(startDate?: GlideDateTime, endDate?: GlideDateTime, timeZone?: string, compressTimeMap?: boolean): ScheduleTimeMap {
        return new ScheduleTimeMap();
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
    getSpans(startDate?: GlideDateTime, endDate?: GlideDateTime): Array<any> {
        return new Array();
    }
    getTZ(): TimeZone {
        return new TimeZone();
    }
    getTimeMap(startDate?: GlideDateTime, endDate?: GlideDateTime, timeZone?: string): ScheduleTimeMap {
        return new ScheduleTimeMap();
    }
    getTimeZone(): string {
        return "";
    }
    isInSchedule(time?: GlideDateTime, timeZone?: string): boolean {
        return false;
    }
    isValid(): boolean {
        return false;
    }
    load(sysID?: string, timeZone?: string, excludeSpanID?: string): void {
        
    }
    overlapsWith(spanGR?: GlideRecord, timeZone?: string): ScheduleTimeMap {
        return new ScheduleTimeMap();
    }
    overlapsWithAfterStart(spanGR?: GlideRecord, timeZone?: string, startGDT?: GlideDateTime): ScheduleTimeMap {
        return new ScheduleTimeMap();
    }
    setTimeZone(tz?: string): void {
        
    }
    whenLast(time?: GlideDateTime): number {
        return 0;
    }
    whenNext(time?: GlideDateTime, timeZone?: string): number {
        return 0;
    }
}
