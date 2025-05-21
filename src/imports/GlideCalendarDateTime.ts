import { GlideTime } from './GlideTime';
import { GlideDateTime } from './GlideDateTime';
import { Calendar } from './Calendar';
import { Counter } from './Counter';
import { GlideDate } from './GlideDate';
import { TimeZone } from './TimeZone';
import { GlideDuration } from './GlideDuration';

export class GlideCalendarDateTime {
    add(value?: number): void {
        
    }
    addDays(amount?: number): void {
        
    }
    addDaysLocalTime(amount?: number): void {
        
    }
    addDaysUTC(amount?: number): void {
        
    }
    addMonths(amount?: number): void {
        
    }
    addMonthsLocalTime(amount?: number): void {
        
    }
    addMonthsUTC(amount?: number): void {
        
    }
    addSeconds(value?: number): void {
        
    }
    addWeeks(amount?: number): void {
        
    }
    addWeeksLocalTime(amount?: number): void {
        
    }
    addWeeksUTC(amount?: number): void {
        
    }
    addYears(amount?: number): void {
        
    }
    addYearsLocalTime(amount?: number): void {
        
    }
    addYearsUTC(amount?: number): void {
        
    }
    after(gdt?: GlideDateTime): boolean {
        return false;
    }
    before(gdt?: GlideDateTime): boolean {
        return false;
    }
    compareTo(o?: any): number {
        return 0;
    }
    equals(o?: any): boolean {
        return false;
    }
    excludeZFromFormat(format?: string): string {
        return "";
    }
    getCalendarInTimeZone(timeZone?: string): Calendar {
        return new Calendar();
    }
    getCounter(): Counter {
        return new Counter();
    }
    getDSTOffset(): number {
        return 0;
    }
    getDate(): GlideDate {
        return new GlideDate();
    }
    getDayOfMonth(): number {
        return 0;
    }
    getDayOfMonthLocalTime(): number {
        return 0;
    }
    getDayOfMonthUTC(): number {
        return 0;
    }
    getDayOfWeek(): number {
        return 0;
    }
    getDayOfWeekLocalTime(): number {
        return 0;
    }
    getDayOfWeekUTC(): number {
        return 0;
    }
    getDaysInMonth(): number {
        return 0;
    }
    getDaysInMonthLocalTime(): number {
        return 0;
    }
    getDaysInMonthUTC(): number {
        return 0;
    }
    getDisplayValue(): string {
        return "";
    }
    getDisplayValueInternal(): string {
        return "";
    }
    getDisplayValueLang(style?: string, language?: string): string {
        return "";
    }
    getDisplayValueWithoutTZ(): string {
        return "";
    }
    getErrorMsg(): string {
        return "";
    }
    getInternalFormattedLocalTime(): string {
        return "";
    }
    getInternalMidnight(iday?: number): GlideDateTime {
        return new GlideDateTime();
    }
    getLocalDate(): GlideDate {
        return new GlideDate();
    }
    getLocalTime(): GlideTime {
        return new GlideTime();
    }
    getMonth(): number {
        return 0;
    }
    getMonthLocalTime(): number {
        return 0;
    }
    getMonthUTC(): number {
        return 0;
    }
    getNumericValue(): number {
        return 0;
    }
    getRaw(): Date {
        return new Date();
    }
    getSpanTime(dayofweek?: number): GlideTime {
        return new GlideTime();
    }
    getTZOffset(): number {
        return 0;
    }
    getTime(): GlideTime {
        return new GlideTime();
    }
    getUTCMidnight(dayofweek?: number): GlideDateTime {
        return new GlideDateTime();
    }
    getUTCValue(): string {
        return "";
    }
    getUserFormattedLocalTime(): string {
        return "";
    }
    getUserTimeZone(): TimeZone {
        return new TimeZone();
    }
    getValue(): string {
        return "";
    }
    getWeekOfYearLocalTime(): number {
        return 0;
    }
    getWeekOfYearUTC(): number {
        return 0;
    }
    getXMLValue(): string {
        return "";
    }
    getYear(): number {
        return 0;
    }
    getYearLocalTime(): number {
        return 0;
    }
    getYearUTC(): number {
        return 0;
    }
    hasDate(): boolean {
        return false;
    }
    hashCode(): number {
        return 0;
    }
    isDST(): boolean {
        return false;
    }
    isValid(): boolean {
        return false;
    }
    onOrAfter(gdt?: GlideDateTime): boolean {
        return false;
    }
    onOrBefore(gdt?: GlideDateTime): boolean {
        return false;
    }
    setDayOfMonth(day?: number): void {
        
    }
    setDayOfMonthLocalTime(day?: number): void {
        
    }
    setDayOfMonthUTC(day?: number): void {
        
    }
    setDebugTZ(debugTZ?: TimeZone): void {
        
    }
    setDisplayValue(value?: string, format?: string): void {
        
    }
    setDisplayValueInternal(value?: string): void {
        
    }
    setDisplayValueInternalWithAlternates(value?: string): void {
        
    }
    setDisplayValueLang(asDisplayed?: string, style?: string, language?: string): void {
        
    }
    setGlideDateTime(g?: GlideDateTime): void {
        
    }
    setInitialValue(value?: string): void {
        
    }
    setMonth(month?: number): void {
        
    }
    setMonthLocalTime(month?: number): void {
        
    }
    setMonthUTC(month?: number): void {
        
    }
    setNumericValue(l?: number): void {
        
    }
    setTZ(tz?: TimeZone): void {
        
    }
    setTimeZone(timeZoneAsString?: string): boolean {
        return false;
    }
    setValue(number?: number): void {
        
    }
    setValueUTC(dt?: string, format?: string): void {
        
    }
    setXMLValue(xml?: string): void {
        
    }
    setYear(year?: number): void {
        
    }
    setYearLocalTime(year?: number): void {
        
    }
    setYearUTC(year?: number): void {
        
    }
    subtract(start?: GlideDateTime, end?: GlideDateTime): GlideDuration {
        return new GlideDuration();
    }
    toString(): string {
        return "";
    }
}
