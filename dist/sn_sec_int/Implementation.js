"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Implementation = void 0;
const GlideRecord_1 = require("../imports/GlideRecord.js");
class Implementation {
    constructor() { }
    setConfiguration(implementationID, configs) {
    }
    getConfiguration(implementationID, getEncryptedValue, fullConfig) {
        const config = {};
        return config;
    }
    _processImplConfigData(implConfigGR, getEncryptedValue) {
        return this._processData("", "", new GlideRecord_1.GlideRecord(""));
    }
    _processData(value, dataType, config) {
        return {
            value: "",
            order: 1,
            mandatory: false,
            label: "",
            type: ""
        };
    }
    _processConfigData(configGR, getEncryptedValue) {
        return this._processData("", "", new GlideRecord_1.GlideRecord(""));
    }
    getImplementationId(integrationID, domain) {
        const implementation = [];
        return implementation;
    }
    createImplementation(integrationID, config) {
        return "record_sys_id";
    }
    deleteImplementation(implId) {
        return true;
    }
}
exports.Implementation = Implementation;
//# sourceMappingURL=Implementation.js.map