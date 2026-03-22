import { HermesTopicSharingMetadata } from "./HermesTopicSharingMetadata";
import { HermesSharedTopicACL } from "./HermesSharedTopicACL";
import { GlideRecord } from "../types/GlideRecord";

export class HermesTopicManager {
    constructor() {  }
    createTopic(topicRecord?: GlideRecord): boolean {
        return false;
    }
    deleteTopic(topicRecord?: GlideRecord): boolean {
        return false;
    }
    getTopicSharingMetadata(appId?: string, ownerInstanceName?: string, sharedInstanceName?: string): HermesTopicSharingMetadata {
        return null as any;
    }
    increaseTopicPartitions(previousTopicRecord?: GlideRecord, topicRecord?: GlideRecord): void {
        
    }
    initTopicShare(sharedInstanceName?: string, appId?: string, tokenTtl?: number): void {
        
    }
    lastTopicRefreshMessage(): void {
        
    }
    registerTopicShare(shareMetadata?: string): void {
        
    }
    revokeTopic(topicSysId?: string): void {
        
    }
    revokeTopicForInstance(topicSysId?: string, instanceConnectionSysId?: string): void {
        
    }
    shareTopic(topicSysId?: string, acl?: HermesSharedTopicACL, sharedInstanceName?: string): void {
        
    }
    syncTopicPartitionsAcrossClusters(topicRecord?: GlideRecord): void {
        
    }
    updateSharedTopicACL(oldAclRecord?: GlideRecord, newAcl?: HermesSharedTopicACL): void {
        
    }
    updateSharedTopicDefaultTTL(sysId?: string, ttl?: number): void {
        
    }
    updateTopicShareState(appId?: string, sharedInstanceName?: string, ownerInstanceName?: string, sharedTopicApprovalState?: string): void {
        
    }
}
