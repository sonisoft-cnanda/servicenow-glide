"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlideFilter = void 0;
class GlideFilter {
    constructor(filter, title) { }
    checkRecord(gr, filter, match) {
        return false;
    }
    getDisplayTitle() {
        return "";
    }
    getFilter() {
        return "";
    }
    getTitle() {
        return "";
    }
    match(gr, bMatchAll) {
        return false;
    }
    setCaseSensitive(caseSensitive) {
    }
    setDisplayTitle(title) {
    }
    setEnforceSecurity(enforceSecurity) {
    }
}
exports.GlideFilter = GlideFilter;
//# sourceMappingURL=GlideFilter.js.map