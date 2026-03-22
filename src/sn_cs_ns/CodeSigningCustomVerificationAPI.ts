export class CodeSigningCustomVerificationAPI {
    constructor() {  }
    verify(signature: string): boolean {
        return false;
    }
    withBroadcastVerificationError(broadcastVerificationError: boolean): CodeSigningCustomVerificationAPI {
        return null as any;
    }
    withCertificate(certificateSysId: string): CodeSigningCustomVerificationAPI {
        return null as any;
    }
    withCodeSigningRecord(recordSysId: string, purposeId: string, tableName: string): CodeSigningCustomVerificationAPI {
        return null as any;
    }
    withRecordBasedVerification(isRecordBasedVerification: boolean): CodeSigningCustomVerificationAPI {
        return null as any;
    }
    withSerializer(serializerType: string, fieldsToSerialize: string): CodeSigningCustomVerificationAPI {
        return null as any;
    }
    withSignatureAlgorithm(signatureAlgorithm: string): CodeSigningCustomVerificationAPI {
        return null as any;
    }
}
