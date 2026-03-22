import { GlideRecord } from "./GlideRecord";
import { GlideScheduleDateTime } from "./GlideScheduleDateTime";

export class GlideScheduleTimeSpan {
    constructor(gr: GlideRecord, timeZone: string) {  }
    getAllDay(): boolean {
        return false;
    }
    getDuration(): number {
        return 0;
    }
    getID(): string {
        return "";
    }
    getName(): string {
        return "";
    }
    static getRepeatDescription(repeatType: string, repeatCount: number, startDateTimeString: string, daysOfWeek: string, monthlyType: string, yearlyType: string, month: number, floatWeek: string, floatDay: number): string;
    static getRepeatDescription(repeatType: string, repeatCount: number, startDateTimeString: string, daysOfWeek: string, monthlyType: string, yearlyType: string, month: number, floatWeek: string, floatDay: number, tz?: string): string;
    static getRepeatDescription(...args: any[]): any {
        return "";
    }
    static getRepeatDisplayValue(field: string, span: GlideRecord): string {
        return "";
    }
    getSpans(start: GlideScheduleDateTime, end: GlideScheduleDateTime): Array<any> {
        return [];
    }
    getTimeZone(): string {
        return "";
    }
    getType(): string {
        return "";
    }
    isValid(): boolean {
        return false;
    }
    overlapsSelf(start: GlideScheduleDateTime, end: GlideScheduleDateTime): boolean {
        return false;
    }
    toString(): string {
        return "";
    }
}
