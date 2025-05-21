import { Iterator } from './Iterator.js';
export declare class ScopedCacheManager {
    flushScopedCache(cacheName?: any, key?: any): void;
    get(catalog?: any, key?: any): string;
    getCacheEntryDetails(cacheName?: string, cacheKey?: string): string;
    getScopedCacheKeys(name?: string): Iterator;
    prefixFlush(cacheName?: any, prefix?: any): void;
    put(catalog?: any, key?: any, value?: any): void;
    putMultiRow(catalog?: any, key?: any, value?: any, ids?: any): void;
    putRow(catalog?: any, key?: any, value?: any, sysId?: any, tableName?: any): void;
}
//# sourceMappingURL=ScopedCacheManager.d.ts.map