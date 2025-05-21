"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImportHostCmn = void 0;
const glide_1 = require("@servicenow/glide");
const _1 = require("./index.js");
class ImportHostCmn {
    constructor(unmatchedCIIREUtil) {
        this.ciInsert = false;
        this.ciUpdate = false;
        this.ciIgnore = false;
        this.ciCreationScriptCache = {};
        this.hostTagsImportEnabled = this._isHostTagsImportEnabled();
        this.unmatchedCIIREUtil = !glide_1.gs.nil(unmatchedCIIREUtil) ? unmatchedCIIREUtil : new _1.UnmatchedCIItemUtilCmn();
        this.hostUtil = new _1.HostUtilCommon();
        this.ciIdentify = new _1.CIIdentify();
    }
    hostImport(sourceImplement, payload, idField, integrationRun, updateCI, notLookupSrc, lastScanDate, lastAuthScanDate, lastCompScanDate, hostInfoGR, updateSrcData, ignoreCICreation, customDiscoveredItemFields) {
        return null;
    }
    evaluateScriptFromHostImportMaps(payload, integration) { }
    createCI(discoveredItem, payload) {
        return null;
    }
    _getCICreationScript(assetCategory, integrationAssetType) {
        return null;
    }
    _lookupSource(source, sourceID, tags, pendingRetry) {
        return null;
    }
    _checkSourceDataUpdated(incomingPayload, sourceData, hostInfoGR, integrationRun) {
        return false;
    }
    _isHostTagsImportEnabled() {
        return false;
    }
    _addFieldsToSrcCI(srcCI, fieldMap, updateOtherFields) {
        return {
            srcCI: srcCI,
            updated: false
        };
    }
    _checkUpdate(integration, payload, updateCI) { }
    _createSrc(ci, source, sourceID, payload, integrationRun, state, lookupRule, lastScanDate, lastAuthScanDate, lastCompScanDate, ciList, integration, customDiscoveredItemFields, matchingType, additionalInformation) {
        return '';
    }
    _createCI(source, sourceID, payload, integrationRun, notLookupSrc, lastScanDate, lastAuthScanDate, lastCompScanDate, customDiscoveredItemFields, assetCategory) {
        return null;
    }
    getMappedValue(key, integration, payload) {
        return '';
    }
    updateFieldsforDiscoveredItem(discoveredItem, ci, payload) { }
    type() {
        return 'ImportHostCmn';
    }
}
exports.ImportHostCmn = ImportHostCmn;
//# sourceMappingURL=ImportHostCmn.js.map