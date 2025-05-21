"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlideLocale = void 0;
const Locale_1 = require("../imports/Locale.js");
class GlideLocale {
    constructor() { }
    get() {
        return new GlideLocale();
    }
    getCurrencyCode() {
        return "";
    }
    getCurrent() {
        return new Locale_1.Locale();
    }
    getDecimalSeparator() {
        return "";
    }
    getGroupingSeparator() {
        return "";
    }
    getSystemLocale() {
        return new Locale_1.Locale();
    }
}
exports.GlideLocale = GlideLocale;
//# sourceMappingURL=GlideLocale.js.map