"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdentificationEngineScriptableApi = void 0;
const StringSet_1 = require("../imports/StringSet.js");
class IdentificationEngineScriptableApi {
    compactIREMutexTable() {
    }
    compareIREStaticToDynamic(source, json, options) {
        return "";
    }
    createOrUpdateCI(source, json) {
        return "";
    }
    createOrUpdateCIEnhanced(source, json, options) {
        return "";
    }
    getIdentifierEntryInfo(sysId) {
        return "";
    }
    getLookupRuleTablesForClass(className) {
        return new StringSet_1.StringSet();
    }
    identifyCI(json) {
        return "";
    }
    identifyCIEnhanced(source, json, options) {
        return "";
    }
    runIdentificationAudit(gr) {
    }
    runIdentificationContext(contextId, ieLevelString, serviceCacheLevelString) {
        return "";
    }
    validateExcludedFields(fields, isIndependent) {
        return new Array();
    }
}
exports.IdentificationEngineScriptableApi = IdentificationEngineScriptableApi;
//# sourceMappingURL=IdentificationEngineScriptableApi.js.map