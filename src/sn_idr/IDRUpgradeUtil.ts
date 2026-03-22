import { GlideRecord } from "../types/GlideRecord";

export class IDRUpgradeUtil {
    static allowDeleteUpgradeConsumerSet(current?: GlideRecord): boolean {
        return false;
    }
    static canActivateConsumerSet(current?: GlideRecord): boolean {
        return false;
    }
    static canUpgradeActivateConsumerSet(current?: GlideRecord): boolean {
        return false;
    }
    static dryRun(current?: GlideRecord): void {
        
    }
    static hasProducerUpgradeStarted(current?: GlideRecord): boolean {
        return false;
    }
    static isConsumerSetUpgraded(current?: GlideRecord): boolean {
        return false;
    }
    static isDryRunAvailableForConsumerSet(current?: GlideRecord): boolean {
        return false;
    }
    static isProducerUpgradeInProgress(current?: GlideRecord): boolean {
        return false;
    }
    static isReplicationSetUpgradeable(current?: GlideRecord): boolean {
        return false;
    }
    static isResendMetadataAvailable(current?: GlideRecord): boolean {
        return false;
    }
    static resendMetadata(current?: GlideRecord, consumerInstanceId?: string): boolean {
        return false;
    }
    static upgradeActivate(current?: GlideRecord): void {
        
    }
}
