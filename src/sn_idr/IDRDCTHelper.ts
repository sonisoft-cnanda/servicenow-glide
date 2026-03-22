import { GlideRecord } from "../types/GlideRecord";

export class IDRDCTHelper {
    static canHideAutoSeed(replicationSetSysId?: string, subscriberInstanceName?: string): boolean {
        return false;
    }
    static cancelComparisonRequest(current?: GlideRecord): void {
        
    }
    static getEntryNamesFromReplicationSetId(replicationSetId?: string): string[] {
        return [];
    }
    static getSourceAndTargetRecordXMLPayload(requestId?: string, selectedRecordSysId?: string): any {
        return null as any;
    }
    static getTargetInstanceInfo(replicationSetId?: string, targetInstanceName?: string): any {
        return null as any;
    }
    static getTargetInstancesInfoFromSetId(replicationSetId?: string): string {
        return "";
    }
    static isDctEnabledOnTargetInstance(replicationSetSysId?: string, subscriberInstanceName?: string): boolean {
        return false;
    }
    static shouldHideDCTReseed(current?: GlideRecord): boolean {
        return false;
    }
    static shouldShowNewComparisonRequest(current?: GlideRecord): string[] {
        return [];
    }
}
