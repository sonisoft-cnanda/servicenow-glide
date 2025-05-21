export declare class GlideCertificateEncryption {
    generateMac(key?: string, algorithm?: string, data?: string): string;
    getThumbPrint(certificateId?: string, algorithm?: string): string;
    getThumbPrintFromKeyStore(certificateId?: string, alias?: string, algorithm?: string): string;
    sign(certificateId?: string, alias?: string, aliasPassword?: string, algorithm?: string, dataToSign?: string): string;
}
//# sourceMappingURL=GlideCertificateEncryption.d.ts.map