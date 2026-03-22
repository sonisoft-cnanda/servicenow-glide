import { NativeArray } from '../imports/NativeArray'

export class DiscoveryServiceScript {
    constructor() {  }
    discover(ldcIds?: NativeArray, resTypes?: NativeArray, discoveryStatusId?: string): boolean {
        return false;
    }
    discoverDatacenter(datacenterId?: string, resourceType?: string): string {
        return "";
    }
    getLdcIds(serviceAccountId?: string): Array<any> {
        return [];
    }
    getLdcs(serviceAccountId?: string): string[] {
        return [];
    }
}
