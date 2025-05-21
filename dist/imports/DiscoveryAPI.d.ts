import { Scriptable } from './Scriptable.js';
export declare class DiscoveryAPI {
    createPageCountRecordForPatternExecution(outputEccId?: string, discoveryStatus?: string): string;
    discoverIpAddress(ipAddress?: any, application?: any, source?: any): Scriptable;
    getMidServerFromSchedule(scheduler?: string): string;
    reportCiIpAddressStatus(ipAddress?: any, discoveryStatusSysId?: any): Scriptable;
    reportCiStatus(discoveryStatusSysId?: any): Scriptable;
}
//# sourceMappingURL=DiscoveryAPI.d.ts.map