import { GlideRecord } from "../types/GlideRecord";

export class EdgeSigningAlgoVersionUtil {
    constructor() {  }
    edgeProxySignatureVersionChange(current: GlideRecord, previous: GlideRecord): void {
        
    }
    getAdjustedProxySignatureAlgorithmVersion(unadjustedSignatureVersion: number, isProxyFIPSModeEnabled: boolean): number {
        return 0;
    }
    getMinimumRequiredSignatureAlgorithmVersion(): number {
        return 0;
    }
    getOtherSupportedOnlineSignatureAlgoVersion(excludeThisProxyGuid: string): number {
        return 0;
    }
}
