import { TimeZone } from "../imports/TimeZone";
import { GlideTime } from "./GlideTime";
import { GlideCounter } from "./GlideCounter";
import { GlideDate } from "./GlideDate";
import { GlideDuration } from "./GlideDuration";

export class GlideDateTime {
    constructor();
    constructor(date: Date);
    constructor(g: GlideDateTime);
    constructor(value: string);
    constructor(value: string, isDisplayValue: boolean);
    constructor(...args: any[]) {  }
    add(gd: GlideTime): void;
    add(value: number): void;
    add(...args: any[]): any {
        
    }
    addDays(amount: number): void {
        
    }
    addDaysLocalTime(amount: number): void {
        
    }
    addDaysUTC(amount: number): void {
        
    }
    addMonths(amount: number): void {
        
    }
    addMonthsLocalTime(amount: number): void {
        
    }
    addMonthsUTC(amount: number): void {
        
    }
    addSeconds(value: number): void {
        
    }
    addWeeks(amount: number): void {
        
    }
    addWeeksLocalTime(amount: number): void {
        
    }
    addWeeksUTC(amount: number): void {
        
    }
    addYears(amount: number): void {
        
    }
    addYearsLocalTime(amount: number): void {
        
    }
    addYearsUTC(amount: number): void {
        
    }
    after(gdt: GlideDateTime): boolean {
        return false;
    }
    before(gdt: GlideDateTime): boolean {
        return false;
    }
    compareTo(o: any): number {
        return 0;
    }
    equals(o: any): boolean {
        return false;
    }
    static excludeZFromFormat(format: string): string {
        return "";
    }
    getCalendarInTimeZone(timeZone: string): any {
        return null as any;
    }
    getCounter(): GlideCounter {
        return null as any;
    }
    getDSTOffset(): number {
        return 0;
    }
    getDate(): GlideDate {
        return null as any;
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
    getDisplayValueLang(style: string): string;
    getDisplayValueLang(style: string, language: string): string;
    getDisplayValueLang(...args: any[]): any {
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
    getInternalMidnight(iday: number): GlideDateTime {
        return null as any;
    }
    getLocalDate(): GlideDate {
        return null as any;
    }
    getLocalTime(): GlideTime {
        return null as any;
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
    getSpanTime(dayofweek: number): GlideTime {
        return null as any;
    }
    getTZOffset(): number {
        return 0;
    }
    getTime(): GlideTime {
        return null as any;
    }
    getUTCMidnight(dayofweek: number): GlideDateTime {
        return null as any;
    }
    getUTCValue(): string {
        return "";
    }
    getUserFormattedLocalTime(): string {
        return "";
    }
    getUserTimeZone(): TimeZone {
        return null as any;
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
    onOrAfter(gdt: GlideDateTime): boolean {
        return false;
    }
    onOrBefore(gdt: GlideDateTime): boolean {
        return false;
    }
    setDayOfMonth(day: number): void {
        
    }
    setDayOfMonthLocalTime(day: number): void {
        
    }
    setDayOfMonthUTC(day: number): void {
        
    }
    setDebugTZ(debugTZ: TimeZone): void {
        
    }
    setDisplayValue(asDisplayed: string): void;
    setDisplayValue(value: string, format: string): void;
    setDisplayValue(...args: any[]): any {
        
    }
    setDisplayValueInternal(value: string): void {
        
    }
    setDisplayValueInternalWithAlternates(value: string): void {
        
    }
    setDisplayValueLang(asDisplayed: string, style: string): void;
    setDisplayValueLang(asDisplayed: string, style: string, language: string): void;
    setDisplayValueLang(...args: any[]): any {
        
    }
    setGlideDateTime(g: GlideDateTime): void {
        
    }
    setInitialValue(value: string): void {
        
    }
    setMonth(month: number): void {
        
    }
    setMonthLocalTime(month: number): void {
        
    }
    setMonthUTC(month: number): void {
        
    }
    setNumericValue(l: number): void {
        
    }
    setTZ(tz: TimeZone): void {
        
    }
    setTimeZone(timeZoneAsString: string): boolean {
        return false;
    }
    setValue(o: any): void;
    setValue(number: number): void;
    setValue(...args: any[]): any {
        
    }
    setValueUTC(dt: string, format: string): void {
        
    }
    setXMLValue(xml: string): void {
        
    }
    setYear(year: number): void {
        
    }
    setYearLocalTime(year: number): void {
        
    }
    setYearUTC(year: number): void {
        
    }
    subtract(gd: GlideTime): void;
    subtract(value: number): void;
    subtract(value: number): void;
    subtract(...args: any[]): any {
        
    }
    static subtract(start: GlideDateTime, end: GlideDateTime): GlideDuration {
        return null as any;
    }
    toString(): string {
        return "";
    }
}
