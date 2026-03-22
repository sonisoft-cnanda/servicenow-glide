export class DataPrivacyApi {
    constructor(channel: string) {  }
    anonymize(input: string): string {
        return "";
    }
    anonymizeByChannel(apiRequestJson: string): string {
        return "";
    }
    deAnonymize(apiResponseStr: string): string {
        return "";
    }
    getMaxInputLength(): number {
        return 0;
    }
    setAnonymizeTimeout(timeoutInMillis: number): void {
        
    }
    setTelemetryEnabled(enabled: boolean): void {
        
    }
}
