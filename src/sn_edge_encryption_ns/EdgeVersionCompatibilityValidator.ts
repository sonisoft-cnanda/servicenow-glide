export class EdgeVersionCompatibilityValidator {
    constructor() {  }
    getOldestRegisteredProxyVersion(): number {
        return 0;
    }
    getOldestRunningProxyVersion(): number {
        return 0;
    }
    isFeatureSupported(feature: string): boolean {
        return false;
    }
    isGlideObjectSupported(internalType: string): boolean {
        return false;
    }
}
