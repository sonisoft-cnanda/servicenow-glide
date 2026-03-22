import { PersonalAuthResponse } from "./PersonalAuthResponse";

export class PersonalAuthAPI {
    constructor() {  }
    getInitiatorURL(aliasId?: string): string {
        return "";
    }
    isTokenValid(aliasId?: string): boolean {
        return false;
    }
    revokeToken(aliasId?: string): PersonalAuthResponse {
        return null as any;
    }
}
