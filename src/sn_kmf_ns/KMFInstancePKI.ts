import { GlideScriptableInputStream } from "../types/GlideScriptableInputStream";

export class KMFInstancePKI {
    constructor() {  }
    downloadCertificate(sysId: string, format: string): string {
        return "";
    }
    flushCRLCache(): void {
        
    }
    generateCRL(): GlideScriptableInputStream {
        return null as any;
    }
    generateCRLUsingSerialNumber(certSerialNumber: string): GlideScriptableInputStream {
        return null as any;
    }
    isEnabled(): boolean {
        return false;
    }
    revoke(certSysId: string, reason: string): string {
        return "";
    }
    revokeFromEndpoint(certSysId: string, reason: string, endpoint: string): string {
        return "";
    }
    runDiagnostics(): string {
        return "";
    }
    signCertificate(endpointId: string, csr: string): string {
        return "";
    }
    signCertificateFromAttachment(endpointId: string): string {
        return "";
    }
}
