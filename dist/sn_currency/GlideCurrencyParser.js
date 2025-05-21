"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlideCurrencyParser = void 0;
const GlideCurrencyValue_1 = require("../imports/GlideCurrencyValue.js");
class GlideCurrencyParser {
    constructor() { }
    parse(value) {
        return new GlideCurrencyValue_1.GlideCurrencyValue();
    }
    setDefaultCurrencyCode(currencyCode) {
        return new GlideCurrencyParser();
    }
    setLocale(language, country) {
        return new GlideCurrencyParser();
    }
}
exports.GlideCurrencyParser = GlideCurrencyParser;
//# sourceMappingURL=GlideCurrencyParser.js.map