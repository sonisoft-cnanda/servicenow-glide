"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlideQueryString = void 0;
const Query_1 = require("./Query.js");
class GlideQueryString {
    constructor(tableName, query) { }
    deserialize() {
        return new Query_1.Query();
    }
    getTerms() {
        return new Array();
    }
    init(tableName, query) {
    }
    removeGroupBy() {
        return "";
    }
    serialize(q) {
        return "";
    }
    setOmitInactive(b) {
    }
    toXML(root) {
    }
}
exports.GlideQueryString = GlideQueryString;
//# sourceMappingURL=GlideQueryString.js.map