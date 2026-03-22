import { NativeArray } from "../imports/NativeArray";
import { Scriptable } from "../imports/Scriptable";

export class CloudDiscovery {
    constructor() {  }
    associateDatacentersToSchedule(scheduleSysId?: string, datacenterSysIds?: Array<any>): void {
        
    }
    associateServiceAccountToSchedule(scheduleSysId?: string, serviceAccountSysId?: string): void {
        
    }
    static configureMidsByProvider(midServers?: NativeArray, cloudProviderString?: string): void {
        
    }
    discoverAndCreateServiceAccountForAWS(credentialName?: string, accessKey?: string, sercetKey?: string): any {
        return null as any;
    }
    static discoverDatacenters(serviceAccountSysId?: string, triggerNewDiscovery?: boolean, previousOrderId?: string, serviceAccountProvider?: string): Scriptable {
        return null as any;
    }
    getDatacentersForServiceAccount(serviceAccountId?: string, scheduleSysId?: string): Scriptable {
        return null as any;
    }
    static getMidsByProvider(cloudServiceProvider?: string): Scriptable {
        return null as any;
    }
    static getServiceAccountsByProvider(cloudProviderString?: string): Scriptable {
        return null as any;
    }
    isAllInclusiveSchedule(scheduleSysId?: string): boolean {
        return false;
    }
}
