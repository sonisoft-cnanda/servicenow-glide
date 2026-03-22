import { ScriptableObject } from "../imports/ScriptableObject";
import { GlideRecord } from "../types/GlideRecord";

export class KMFCryptoModule {
    asymmetricDecryptData(data: string, additionalData: ScriptableObject): string {
        return "";
    }
    asymmetricEncryptData(data: string, additionalData: ScriptableObject): any {
        return null as any;
    }
    asymmetricUnwrapKey(data: string): string {
        return "";
    }
    asymmetricUnwrapKeyForAlgorithm(data: string, algo: string): string {
        return "";
    }
    asymmetricWrapKeyFromBytes(base64KeyBytes: string): string {
        return "";
    }
    asymmetricWrapKeyFromBytesForAlgorithm(base64KeyBytes: string, algo: string): string {
        return "";
    }
    asymmetricWrapKeyFromSysId(keySysId: string): string {
        return "";
    }
    static cleanUpCryptoModuleCaches(): void {
        
    }
    static cleanUpInstanceKeyCaches(): void {
        
    }
    decryptData(data: string): string {
        return "";
    }
    discard(): void {
        
    }
    encryptData(data: string): string {
        return "";
    }
    static flushCryptoModuleCaches(): void {
        
    }
    generateMac(data: string): string {
        return "";
    }
    static generatePayloadHash(gr: GlideRecord): string {
        return "";
    }
    static get(): KMFCryptoModule {
        return null as any;
    }
    static getModule(cryptoModuleName: string): KMFCryptoModule {
        return null as any;
    }
    static getModuleFromColumn(tableName: string, fieldName: string): KMFCryptoModule {
        return null as any;
    }
    static isKMFCryptoModuleAccessible(cryptoModuleSysId: string): boolean {
        return false;
    }
    sign(data: string): string {
        return "";
    }
    unwrapKey(formattedWrappedKey: string): string {
        return "";
    }
    unwrapKeyForAlgorithm(formattedWrappedKey: string, algorithm: string): string {
        return "";
    }
    verifyMac(data: string, expectedMac: string): boolean {
        return false;
    }
    verifySignature(signature: string, data: string): boolean {
        return false;
    }
    wrapKeyFromBytes(base64KeyBytes: string): string {
        return "";
    }
    wrapKeyFromBytesForAlgorithm(base64KeyBytes: string, algorithm: string): string {
        return "";
    }
    wrapKeyFromSysId(keySysId: string): string {
        return "";
    }
}
