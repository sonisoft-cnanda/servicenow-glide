export class KMFVaultAPI {
    constructor() {  }
    deactivateVaultResourcesIfEJBCAEnabled(): void {
        
    }
    disableVaultCredCertRenewJobIfEJBCAEnabled(): boolean {
        return false;
    }
    registerAuthCert(vaultResponseBody: string, vaultResponseCode: number): boolean {
        return false;
    }
    sendAuthCertRequestForVault(vaultResponseBody: string): boolean {
        return false;
    }
    sendIssueAuthCertRequest(): string {
        return "";
    }
}
