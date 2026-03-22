import { GlideDateTime } from "./GlideDateTime";
import { GlideDuration } from "./GlideDuration";

export class GlideTime {
    constructor();
    constructor(template: GlideTime);
    constructor(ms: number);
    constructor(...args: any[]) {  }
    getByFormat(format: string): string {
        return "";
    }
    getDisplayValue(): string {
        return "";
    }
    getHourLocalTime(): number {
        return 0;
    }
    getHourOfDayLocalTime(): number {
        return 0;
    }
    getHourOfDayUTC(): number {
        return 0;
    }
    getHourUTC(): number {
        return 0;
    }
    getLocalTime(target: GlideDateTime): GlideTime {
        return null as any;
    }
    getMinutesLocalTime(): number {
        return 0;
    }
    getMinutesUTC(): number {
        return 0;
    }
    getSeconds(): number {
        return 0;
    }
    getValue(): string {
        return "";
    }
    getXMLValue(): string {
        return "";
    }
    setDisplayValue(time: string): void {
        
    }
    setValue(o: any): void {
        
    }
    setXMLValue(xml: string): void {
        
    }
    static subtract(start: GlideTime, end: GlideTime): GlideDuration {
        return null as any;
    }
}
