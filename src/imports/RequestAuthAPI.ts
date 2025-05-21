import { HttpRequestAuthedData } from './HttpRequestAuthedData';
import { AuthCredential } from './AuthCredential';
import { HttpRequestData } from './HttpRequestData';

export class RequestAuthAPI {
    constructor() {}
    generateAuth(): HttpRequestAuthedData {
        return new HttpRequestAuthedData();
    }
    getAuthCredential(): AuthCredential {
        return new AuthCredential();
    }
    getHttpRequestData(): HttpRequestData {
        return new HttpRequestData();
    }
    resetAuthCredential(): void {
        
    }
}
