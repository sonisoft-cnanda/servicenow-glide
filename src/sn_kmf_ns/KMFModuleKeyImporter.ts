export class KMFModuleKeyImporter {
    constructor() {  }
    createAutoKeyExchangeRequest(cryptoModuleSysId?: string, cryptoSpecSysId?: string): string {
        return "";
    }
    createRequest(keySpecId?: string, keySourceHost?: string, keySourceInstanceId?: string, targetInstanceHost?: string, exchangeFrequency?: string, enableRekeying?: string): string {
        return "";
    }
    getInstanceId(): string {
        return "";
    }
    importKey(responseStr?: string, sourceInstanceId?: string): string {
        return "";
    }
    insertNewKeyExchangeRequestWithoutNonce(exchangeFrequency?: string, keySpecSysId?: string, targetInstanceHost?: string, targetInstanceId?: string, enableRekeying?: string): string {
        return "";
    }
    isResourceExchangeInitialized(): boolean {
        return false;
    }
    rekeyImportedData(cryptoModuleSysId?: string): string {
        return "";
    }
    rotateImportedKey(cryptoModuleSysId?: string): string {
        return "";
    }
}
