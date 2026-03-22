export class AuthenticationProcessorAPI {
    static addCSR(guid?: string, csrBytes?: number[]): string {
        return "";
    }
    static generateSignedCertificate(guid?: string): string {
        return "";
    }
    static isTransactionTrusted(): boolean {
        return false;
    }
    static validateMessage(guid?: string, message?: string, messageSignature?: string): boolean {
        return false;
    }
    static validateSignature(guid?: string, signature?: number[], data?: number[]): boolean {
        return false;
    }
}
