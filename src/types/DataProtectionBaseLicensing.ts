export class DataProtectionBaseLicensing {
    constructor() {  }
    beginTrialPeriod(): boolean {
        return false;
    }
    getInstanceEligibility(pluginName: string): boolean {
        return false;
    }
    getInstanceType(): string {
        return "";
    }
    getTrialDetails(): string {
        return "";
    }
    hasLicense(licenseApiResponse: string): boolean {
        return false;
    }
    isTrialActivated(): boolean {
        return false;
    }
    isTrialPeriodActive(): boolean {
        return false;
    }
}
