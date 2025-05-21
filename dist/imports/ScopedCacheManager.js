"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScopedCacheManager = void 0;
const Iterator_1 = require("./Iterator.js");
class ScopedCacheManager {
    flushScopedCache(cacheName, key) {
    }
    get(catalog, key) {
        return "";
    }
    getCacheEntryDetails(cacheName, cacheKey) {
        return "";
    }
    getScopedCacheKeys(name) {
        return new Iterator_1.Iterator();
    }
    prefixFlush(cacheName, prefix) {
    }
    put(catalog, key, value) {
    }
    putMultiRow(catalog, key, value, ids) {
    }
    putRow(catalog, key, value, sysId, tableName) {
    }
}
exports.ScopedCacheManager = ScopedCacheManager;
//# sourceMappingURL=ScopedCacheManager.js.map