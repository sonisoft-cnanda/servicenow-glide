export class GlideCounter {
    constructor();
    constructor(fullSequence: string);
    constructor(milliseconds: number);
    constructor(...args: any[]) {  }
    static next(name: string): string {
        return "";
    }
    static getDate(counter: string): Date {
        return new Date();
    }
    static getSequenceFromDate(dt: string): string {
        return "";
    }
    format(time: number): string {
        return "";
    }
    after(c: GlideCounter): boolean {
        return false;
    }
    before(c: GlideCounter): boolean {
        return false;
    }
    onOrAfter(c: GlideCounter): boolean {
        return false;
    }
    onOrBefore(c: GlideCounter): boolean {
        return false;
    }
    compareTo(o: any): number {
        return 0;
    }
    toString(): string {
        return "";
    }
    hashCode(): number {
        return 0;
    }
    equals(o: any): boolean {
        return false;
    }
}
