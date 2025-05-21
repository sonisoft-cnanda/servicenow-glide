"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JSONStreamingBuilder = void 0;
const JSONStreamingAPI_1 = require("./JSONStreamingAPI.js");
class JSONStreamingBuilder {
    constructor(cx, args, ctorObj, inNewExpr) { }
    build() {
        return new JSONStreamingAPI_1.JSONStreamingAPI();
    }
    expiresAt(expireAt) {
        return new JSONStreamingBuilder();
    }
    withAttachment() {
        return new JSONStreamingBuilder();
    }
}
exports.JSONStreamingBuilder = JSONStreamingBuilder;
//# sourceMappingURL=JSONStreamingBuilder.js.map