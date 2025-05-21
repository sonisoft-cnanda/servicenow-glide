"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransformResult = void 0;
const NativeObject_1 = require("../imports/NativeObject.js");
const Data_1 = require("../imports/Data.js");
const NativeArray_1 = require("../imports/NativeArray.js");
class TransformResult {
    constructor(cx, args, ctorObj, inNewExpr) { }
    byGroup() {
        return new NativeObject_1.NativeObject();
    }
    getByLabel(label) {
        return new Data_1.Data();
    }
    getData() {
        return new Data_1.Data();
    }
    toArray() {
        return new NativeArray_1.NativeArray();
    }
}
exports.TransformResult = TransformResult;
//# sourceMappingURL=TransformResult.js.map