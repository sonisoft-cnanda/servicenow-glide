import { GlideRecord } from '@servicenow/glide';
export declare class HostUtilCommon {
    private _ireSources;
    constructor();
    getDiscoveredItemState(ci: GlideRecord): string;
    initializeHostAttributeRecord(host: any, hostAttribTable: string): GlideRecord | null;
    private _cacheIRESources;
    private _addIRESourceToCache;
    type(): string;
}
//# sourceMappingURL=HostUtilCommon.d.ts.map