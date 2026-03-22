export class ScopedKMFKaaProfile {
    constructor() {  }
    getCustomerId(): string {
        return "";
    }
    getInstanceGroup(): string {
        return "";
    }
    getInstanceId(): string {
        return "";
    }
    getInstanceName(): string {
        return "";
    }
    getServiceUrl(): string {
        return "";
    }
    isServiceType(serviceType: string): boolean {
        return false;
    }
    isSubIdentity(key: string, value: string): boolean {
        return false;
    }
}
