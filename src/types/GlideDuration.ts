import { GlideTime } from "./GlideTime";

export class GlideDuration extends GlideTime {
    constructor();
    constructor(template: GlideDuration);
    constructor(asDisplayed: string);
    constructor(ms: number);
    constructor(...args: any[]) { super(); }
    add(value: GlideDuration): GlideDuration {
        return null as any;
    }
    getDayPart(): number {
        return 0;
    }
    getDisplayValue(): string {
        return "";
    }
    getDurationValue(): string {
        return "";
    }
    getRoundedDayPart(): number {
        return 0;
    }
    isShowTimerAlert(): boolean {
        return false;
    }
    setDisplayValue(asDisplayed: string): void {
        
    }
    setValue(o: any): void {
        
    }
    subtract(value: GlideDuration): GlideDuration {
        return null as any;
    }
}
