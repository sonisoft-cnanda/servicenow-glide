import { GlideRecord } from "../types/GlideRecord";

export class KMFModuleKeyAPI {
    constructor() {  }
    cancelCDEKUpload(cryptoSpecSysId: string): boolean {
        return false;
    }
    copyParentSpecToChildModule(parentModule: string, parentSpec: GlideRecord): void {
        
    }
    copySpecfromParentToChildModule(spec: GlideRecord, module: GlideRecord, scopeName: string): string {
        return "";
    }
    exportPublicKeyToCertificate(publicKeyID: string, exportType: string): void {
        
    }
    fetchCertByName(certName: string): string {
        return "";
    }
    fetchRecordSignatureCertificates(): string {
        return "";
    }
    generateKey(cryptoSpecSysId: string): boolean {
        return false;
    }
    getCDEKWrappingKey(cryptoSpecSysId: string): string {
        return "";
    }
    importKeyFromKeystore(keystorePassword: string, recordSysId: string): string {
        return "";
    }
    importKeyFromWebService(wrappedKey: any, cryptoModuleSpecSysId: string): string {
        return "";
    }
    reEncryptAllModuleKeysWithNewIKEK(): string {
        return "";
    }
    reEncryptModuleKeysWithNewIKEKUsingCryptoSpec(cryptoSpecSysId: string): string {
        return "";
    }
    startCDEKUpload(cryptoSpecSysId: string): boolean {
        return false;
    }
    uploadWrappedCDEK(cryptoSpecSysId: string): string {
        return "";
    }
}
