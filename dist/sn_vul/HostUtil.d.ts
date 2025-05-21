import { GlideRecord } from '@servicenow/glide';
export declare class HostUtil {
    private HostUtilCommon;
    constructor();
    getNetworkMappings(networkInterfaces: any[], topIPs: string[], topMacs: string[], ignoredIPs: string[], ignoredMacs: string[]): any[];
    getValidValues(sourceValues: string[], ignoreValues: string[]): string[];
    getDiscoveredItemState(ci: GlideRecord): string;
    isUnmatchedCI(ci: GlideRecord): boolean;
    initializeHostAttributeRecord(host: any, hostAttribTable: string): GlideRecord | null;
    type(): string;
}
//# sourceMappingURL=HostUtil.d.ts.map