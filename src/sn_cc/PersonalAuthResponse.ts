export class PersonalAuthResponse {
    constructor() {  }
    getCredentialId(): string {
        return "";
    }
    getExpiryInSeconds(): number {
        return 0;
    }
    getResponseStatus(): string {
        return "";
    }
    isAuthenticated(): boolean {
        return false;
    }
}
