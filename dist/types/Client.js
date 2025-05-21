"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const NativeArray_1 = require("../imports/NativeArray.js");
const NativeObject_1 = require("../imports/NativeObject.js");
class Client {
    constructor() { }
    accumulate(dataBuilder, defaultValue) {
    }
    deleteMetric(tableName, metricName) {
    }
    deleteSeries(gr, metricName) {
    }
    getSeries(gr, metricName, lastUpdated) {
        return new NativeArray_1.NativeArray();
    }
    put(dataBuilder) {
    }
    transform(o1, o2, o3) {
        return new NativeObject_1.NativeObject();
    }
}
exports.Client = Client;
//# sourceMappingURL=Client.js.map