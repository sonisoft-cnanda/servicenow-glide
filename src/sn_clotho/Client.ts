import { NativeObject } from "../imports/NativeObject";
import { NativeArray } from "../imports/NativeArray";
import { GlideRecord } from "../types/GlideRecord";
import { GlideDateTime } from "../types/GlideDateTime";

export class Client {
    constructor() {  }
    accumulate(dataBuilder?: any, defaultValue?: number): void {
        
    }
    deleteMetric(tableName?: string, metricName?: string): void {
        
    }
    deleteSeries(gr?: GlideRecord, metricName?: string): void {
        
    }
    getSeries(gr?: GlideRecord, metricName?: string, lastUpdated?: GlideDateTime): NativeArray {
        return null as any;
    }
    put(dataBuilder?: any): void {
        
    }
    transform(o1?: any, o2?: any, o3?: any): NativeObject {
        return null as any;
    }
}
