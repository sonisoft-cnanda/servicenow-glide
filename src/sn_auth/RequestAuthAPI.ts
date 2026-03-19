import { HttpRequestAuthedData } from '../imports/HttpRequestAuthedData';
import { AuthCredential } from '../imports/AuthCredential';
import { HttpRequestData } from '../imports/HttpRequestData';

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
