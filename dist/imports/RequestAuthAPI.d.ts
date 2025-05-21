import { HttpRequestAuthedData } from './HttpRequestAuthedData.js';
import { AuthCredential } from './AuthCredential.js';
import { HttpRequestData } from './HttpRequestData.js';
export declare class RequestAuthAPI {
    constructor();
    generateAuth(): HttpRequestAuthedData;
    getAuthCredential(): AuthCredential;
    getHttpRequestData(): HttpRequestData;
    resetAuthCredential(): void;
}
//# sourceMappingURL=RequestAuthAPI.d.ts.map