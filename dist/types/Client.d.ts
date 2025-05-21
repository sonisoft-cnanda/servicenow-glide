import { GlideRecord } from '../imports/GlideRecord.js';
import { GlideDateTime } from '../imports/GlideDateTime.js';
import { NativeArray } from '../imports/NativeArray.js';
import { NativeObject } from '../imports/NativeObject.js';
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