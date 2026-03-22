export class CertificateEncryption {
    static generateMac(key: string, algorithm: string, data: string): string {
        return "";
    }
    static getThumbPrint(certificateId: string, algorithm: string): string {
        return "";
    }
    static getThumbPrintFromKeyStore(certificateId: string, alias: string, algorithm: string): string {
        return "";
    }
    static sign(certificateId: string, alias: string, aliasPassword: string, algorithm: string, dataToSign: string): string {
        return "";
    }
}
