"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImportHost = void 0;
const sn_sec_cmn_1 = require("../sn_sec_cmn/index.js");
// @ts-ignore
class ImportHost extends sn_sec_cmn_1.ImportHostCmn {
    constructor(unmatchedCIIREUtil) {
        super(unmatchedCIIREUtil);
    }
    _lookupSourceCI(source, sourceID) {
        return null;
    }
    _checkSourceDataUpdated(incomingPayload, discItemSrcData, hostInfoGR, integrationRun) {
        return false;
    }
    isArray(value) {
        return false;
    }
    _isHostTagsImportEnabled() {
        return false;
    }
    type() {
        return 'ImportHost';
    }
}
exports.ImportHost = ImportHost;
//# sourceMappingURL=ImportHost.js.map