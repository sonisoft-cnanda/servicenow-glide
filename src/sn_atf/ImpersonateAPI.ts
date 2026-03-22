export class ImpersonateAPI {
    static canRunTestInSession(): boolean {
        return false;
    }
    static canRunTestsWhileImpersonated(): boolean {
        return false;
    }
    static teardownImpersonation(expectedUserID?: string): string {
        return "";
    }
}
