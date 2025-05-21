import { HttpRequestAuthedData } from '../imports/HttpRequestAuthedData.js';
import { AuthCredential } from '../imports/AuthCredential.js';
import { HttpRequestData } from '../imports/HttpRequestData.js';
export declare class RequestAuthAPI {
    constructor();
    generateAuth(): HttpRequestAuthedData;
    getAuthCredential(): AuthCredential;
    getHttpRequestData(): HttpRequestData;
    resetAuthCredential(): void;
}
//# sourceMappingURL=RequestAuthAPI.d.ts.map