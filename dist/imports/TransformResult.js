"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransformResult = void 0;
const NativeObject_1 = require("./NativeObject.js");
const Data_1 = require("./Data.js");
const NativeArray_1 = require("./NativeArray.js");
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