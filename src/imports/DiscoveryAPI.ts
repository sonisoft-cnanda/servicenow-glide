import { Scriptable } from './Scriptable';

export class DiscoveryAPI {
    createPageCountRecordForPatternExecution(outputEccId?: string, discoveryStatus?: string): string {
        return "";
    }
    discoverIpAddress(ipAddress?: any, application?: any, source?: any): Scriptable {
        return new Scriptable();
    }
    getMidServerFromSchedule(scheduler?: string): string {
        return "";
    }
    reportCiIpAddressStatus(ipAddress?: any, discoveryStatusSysId?: any): Scriptable {
        return new Scriptable();
    }
    reportCiStatus(discoveryStatusSysId?: any): Scriptable {
        return new Scriptable();
    }
}
