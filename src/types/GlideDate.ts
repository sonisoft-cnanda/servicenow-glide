import { GlideDuration } from "./GlideDuration";

export class GlideDate {
    constructor();
    constructor(date: Date);
    constructor(date: GlideDate);
    constructor(value: string);
    constructor(value: string, isDisplayValue: boolean);
    constructor(...args: any[]) {  }
    getByFormat(format: string): string {
        return "";
    }
    getDayOfMonthNoTZ(): number {
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
    getMonthNoTZ(): number {
        return 0;
    }
    getYearNoTZ(): number {
        return 0;
    }
    static parseDate(date: string, language: string, country: string): GlideDate {
        return null as any;
    }
    setDisplayValue(asDisplayed: string): void {
        
    }
    setDisplayValueLang(asDisplayed: string, style: string): void;
    setDisplayValueLang(asDisplayed: string, style: string, language: string): void;
    setDisplayValueLang(...args: any[]): any {
        
    }
    setValue(o: any): void {
        
    }
    static subtract(start: GlideDate, end: GlideDate): GlideDuration {
        return null as any;
    }
}
