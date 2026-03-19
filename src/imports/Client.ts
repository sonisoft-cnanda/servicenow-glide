import { GlideRecord } from './GlideRecord';
import { GlideDateTime } from './GlideDateTime';
import { NativeArray } from './NativeArray';
import { NativeObject } from './NativeObject';

export class Client {
    constructor() {}
    accumulate(dataBuilder?: any, defaultValue?: number): void {
        
    }
    deleteMetric(tableName?: string, metricName?: string): void {
        
    }
    deleteSeries(gr?: GlideRecord, metricName?: string): void {
        
    }
    getSeries(gr?: GlideRecord, metricName?: string, lastUpdated?: GlideDateTime): NativeArray {
        return new NativeArray();
    }
    put(dataBuilder?: any): void {
        
    }
    transform(o1?: any, o2?: any, o3?: any): NativeObject {
        return new NativeObject();
    }
}
