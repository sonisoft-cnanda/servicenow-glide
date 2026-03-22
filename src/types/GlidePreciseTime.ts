import { GlideDateTime } from "./GlideDateTime";

export class GlidePreciseTime extends GlideDateTime {
    constructor();
    constructor(g: GlideDateTime);
    constructor(value: string);
    constructor(...args: any[]) { super(); }
    getDisplayValue(): string {
        return "";
    }
    getDisplayValueInternal(): string {
        return "";
    }
    getDisplayValueWithoutTZ(): string {
        return "";
    }
    setDisplayValue(value: string): void;
    setDisplayValue(value: string, format: string): void;
    setDisplayValue(...args: any[]): any {
        
    }
    setDisplayValueInternal(value: string): void {
        
    }
    setValue(o: any): void {
        
    }
}
