import { GlideRecord } from "../types/GlideRecord";

export class KmfLifecyclePolicyAPI {
    constructor() {  }
    enforceActivationState(cryptoKeyGR: GlideRecord): string {
        return "";
    }
    enforceKeyLifecycleStatesOnModulePublish(cryptoModuleGR: GlideRecord): void {
        
    }
    enforceRenewalState(cryptoKeyGR: GlideRecord): string {
        return "";
    }
    enforceResumeState(cryptoKeyGR: GlideRecord): string {
        return "";
    }
    enforceRevocationState(cryptoKeySysId: string, revocationState: string, revocationReason: string): string {
        return "";
    }
    enforceRotationState(cryptoKeyGR: GlideRecord): string {
        return "";
    }
    enforceRotationStateOnInstanceKey(cryptoKeyGR: GlideRecord): string {
        return "";
    }
    enforceRotationToTargetKey(cryptoKeyGR: GlideRecord, targetKeyRecord: GlideRecord): string {
        return "";
    }
    enforceSuspendState(cryptoKeyGR: GlideRecord): string {
        return "";
    }
    evaluateKeyLifecyclePolicies(keyGr: GlideRecord): string {
        return "";
    }
    hasNoActiveKeyInModuleForKeyType(grCryptoKey: GlideRecord): boolean {
        return false;
    }
    hasRightsToLifecycleOperation(cryptoKeyGR: GlideRecord, operationName: string): boolean {
        return false;
    }
    queueKeyRevocationJob(): void {
        
    }
}
