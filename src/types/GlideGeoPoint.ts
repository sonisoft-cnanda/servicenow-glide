export class GlideGeoPoint {
    constructor();
    constructor(other?: GlideGeoPoint);
    constructor(longitude?: number, latitude?: number);
    constructor(...args: any[]) {  }
    equals(obj?: any): boolean {
        return false;
    }
    getDisplayValue(): string {
        return "";
    }
    getLatitude(): number {
        return 0;
    }
    getLongitude(): number {
        return 0;
    }
    getValue(): string {
        return "";
    }
    hashCode(): number {
        return 0;
    }
    setDisplayValue(value?: string): void {
        
    }
    setValue(value?: any): void;
    setValue(longitude?: any, latitude?: any): GlideGeoPoint;
    setValue(longitude?: number, latitude?: number): GlideGeoPoint;
    setValue(...args: any[]): any {
        
    }
    toString(): string {
        return "";
    }
}
