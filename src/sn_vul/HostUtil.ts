import { GlideRecord, gs } from '@servicenow/glide';
import { HostUtilCommon } from '../sn_sec_cmn';

export class HostUtil {
    private HostUtilCommon: HostUtilCommon;

    constructor() {
        this.HostUtilCommon = new HostUtilCommon();
    }

    public getNetworkMappings(
        networkInterfaces: any[],
        topIPs: string[],
        topMacs: string[],
        ignoredIPs: string[],
        ignoredMacs: string[]
    ): any[] {
        return [];
    }

    public getValidValues(sourceValues: string[], ignoreValues: string[]): string[] {
        return [];
    }

    public getDiscoveredItemState(ci: GlideRecord): string {
        return '';
    }

    public isUnmatchedCI(ci: GlideRecord): boolean {
        return false;
    }

    public initializeHostAttributeRecord(host: any, hostAttribTable: string): GlideRecord | null {
        return null;
    }

    public type(): string {
        return 'HostUtil';
    }
}