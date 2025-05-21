"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HostUtilCommon = void 0;
class HostUtilCommon {
    constructor() {
        this._ireSources = [];
        if (this._ireSources.length === 0) {
            this._cacheIRESources();
        }
    }
    getDiscoveredItemState(ci) {
        return '';
    }
    initializeHostAttributeRecord(host, hostAttribTable) {
        return null;
    }
    _cacheIRESources() { }
    _addIRESourceToCache(name) {
        this._ireSources.push(name);
    }
    type() {
        return 'HostUtilCommon';
    }
}
exports.HostUtilCommon = HostUtilCommon;
//# sourceMappingURL=HostUtilCommon.js.map