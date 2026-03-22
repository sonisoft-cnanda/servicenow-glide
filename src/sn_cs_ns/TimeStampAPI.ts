export class TimeStampAPI {
    constructor() {  }
    checkValidity(serializedResponse: string, certificateName: string): boolean {
        return false;
    }
    validateResponseForRecordSignature(signatureRecordSysId: string, serializedResponse: string): boolean {
        return false;
    }
}
