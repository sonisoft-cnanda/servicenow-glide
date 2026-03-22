import { GlideAggregate } from "../types/GlideAggregate";
import { GlideRecord } from "../types/GlideRecord";

export class DelegationUtil {
    constructor() {  }
    delegateSingleRecord(delegationRecordSysId?: string, target?: GlideRecord): boolean {
        return false;
    }
    getDelegatedApprovalsForUser(userId?: string, includeUsersRecords?: boolean, configurationOptions?: Record<any, any>): GlideAggregate {
        return null as any;
    }
    getDelegatedAssignmentsForUser(userId?: string, includeUsersRecords?: boolean, configurationOptions?: Record<any, any>): GlideAggregate {
        return null as any;
    }
    isRecordDelegatedToUser(userId?: string, record?: GlideRecord): boolean {
        return false;
    }
    notifyNewDelegates(): void {
        
    }
    removeSingleRecordDelegation(delegationRecordSysId?: string, target?: GlideRecord): boolean {
        return false;
    }
    shouldBlockAccessToDelegationRecord(current?: GlideRecord): boolean {
        return false;
    }
    toggleGranularDelegation(shouldEnable?: boolean): void {
        
    }
}
