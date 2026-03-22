import { GlideRecord } from "../types/GlideRecord";

export class IDRReplConsumerActionsUtil {
    static fetchReplEntries(consumerSetName?: string, producerInstanceId?: string): boolean {
        return false;
    }
    static getConsumerStatus(current?: GlideRecord): string {
        return "";
    }
    static pause(consumerSetName?: string, producerInstanceId?: string): void {
        
    }
    static resume(consumerSetName?: string, producerInstanceId?: string): void {
        
    }
    static subscribe(consumerSetName?: string, producerInstanceId?: string): boolean {
        return false;
    }
    static validateReplEntries(replSetID?: string, isSeedingRqst?: boolean): void {
        
    }
}
