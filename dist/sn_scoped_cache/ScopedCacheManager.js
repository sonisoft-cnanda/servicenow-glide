"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScopedCacheManager = void 0;
const Iterator_1 = require("../imports/Iterator.js");
class ScopedCacheManager {
    static flushScopedCache(cacheName, key) {
    }
    static get(catalog, key) {
        return "";
    }
    static getCacheEntryDetails(cacheName, cacheKey) {
        return "";
    }
    static getScopedCacheKeys(name) {
        return new Iterator_1.Iterator();
    }
    static prefixFlush(cacheName, prefix) {
    }
    static put(catalog, key, value) {
    }
    static putMultiRow(catalog, key, value, ids) {
    }
    static putRow(catalog, key, value, sysId, tableName) {
    }
}
exports.ScopedCacheManager = ScopedCacheManager;
//# sourceMappingURL=ScopedCacheManager.js.map