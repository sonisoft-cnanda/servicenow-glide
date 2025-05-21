import { GlideRecord } from './GlideRecord.js';
import { GlideDateTime } from './GlideDateTime.js';
import { NativeArray } from './NativeArray.js';
import { NativeObject } from './NativeObject.js';
export declare class Client {
    constructor();
    accumulate(dataBuilder?: any, defaultValue?: number): void;
    deleteMetric(tableName?: string, metricName?: string): void;
    deleteSeries(gr?: GlideRecord, metricName?: string): void;
    getSeries(gr?: GlideRecord, metricName?: string, lastUpdated?: GlideDateTime): NativeArray;
    put(dataBuilder?: any): void;
    transform(o1?: any, o2?: any, o3?: any): NativeObject;
}
//# sourceMappingURL=Client.d.ts.map