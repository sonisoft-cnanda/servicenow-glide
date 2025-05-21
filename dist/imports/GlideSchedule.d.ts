import { GlideDateTime } from './GlideDateTime.js';
import { GlideDuration } from './GlideDuration.js';
import { Schedule } from './Schedule.js';
import { GlideRecord } from './GlideRecord.js';
import { ScheduleTimeSpan } from './ScheduleTimeSpan.js';
import { ScheduleTimeMap } from './ScheduleTimeMap.js';
import { TimeZone } from './TimeZone.js';
export declare class GlideSchedule {
    constructor(sysID?: string, timeZone?: string);
    add(startDate?: GlideDateTime, offset?: GlideDuration, timeZone?: string): GlideDateTime;
    addOtherSchedule0(otherSchedule?: Schedule, includeFlag?: boolean): GlideSchedule;
    addTimeSpan(grSpan?: GlideRecord): ScheduleTimeSpan;
    addTimeSpans(grSpans?: GlideRecord): void;
    addTimeSpansExcluded(grSpans?: GlideRecord): void;
    duration(startDate?: GlideDateTime, endDate?: GlideDateTime, timeZone?: string): GlideDuration;
    excludeTimeSpan(grSpan?: GlideRecord, timeZone?: string): void;
    fetchTimeMap(startDate?: GlideDateTime, endDate?: GlideDateTime, timeZone?: string, compressTimeMap?: boolean): ScheduleTimeMap;
    fetchTimeMapWithExcludes(startDate?: GlideDateTime, endDate?: GlideDateTime, timeZone?: string, compressTimeMap?: boolean): ScheduleTimeMap;
    getDaysOfWeek(): string;
    getDaysOfWeekIgnoringExcludedSpans(): string;
    getID(): string;
    getName(): string;
    getSpans(startDate?: GlideDateTime, endDate?: GlideDateTime): Array<any>;
    getTZ(): TimeZone;
    getTimeMap(startDate?: GlideDateTime, endDate?: GlideDateTime, timeZone?: string): ScheduleTimeMap;
    getTimeZone(): string;
    isInSchedule(time?: GlideDateTime, timeZone?: string): boolean;
    isValid(): boolean;
    load(sysID?: string, timeZone?: string, excludeSpanID?: string): void;
    overlapsWith(spanGR?: GlideRecord, timeZone?: string): ScheduleTimeMap;
    overlapsWithAfterStart(spanGR?: GlideRecord, timeZone?: string, startGDT?: GlideDateTime): ScheduleTimeMap;
    setTimeZone(tz?: string): void;
    whenLast(time?: GlideDateTime): number;
    whenNext(time?: GlideDateTime, timeZone?: string): number;
}
//# sourceMappingURL=GlideSchedule.d.ts.map