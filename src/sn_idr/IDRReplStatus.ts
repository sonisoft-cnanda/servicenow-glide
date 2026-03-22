import { GlideRecord } from "../types/GlideRecord";

export class IDRReplStatus {
    status: string = "";
    statusLable: string = "";
    statusMessage: string = "";
    static connectionErrorsPresent(parentSetGr?: GlideRecord, infoTable?: string): boolean {
        return false;
    }
    static inboundStatus(replicationSetId?: string): IDRReplStatus {
        return null as any;
    }
    static outboundStatus(replicationSetId?: string): IDRReplStatus {
        return null as any;
    }
    static resetTopicStatus(infoSysId?: string): void {
        
    }
    static resolvedStatus(replicationSetId?: string): IDRReplStatus {
        return null as any;
    }
    static status(replicationSetId?: string): IDRReplStatus {
        return null as any;
    }
}
