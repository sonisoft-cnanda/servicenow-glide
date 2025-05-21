import { AuthCredential } from '../imports/AuthCredential';
import { HttpRequestData } from '../imports/HttpRequestData';
import { HttpRequestAuthedData } from '../imports/HttpRequestAuthedData';
export declare class RequestAuthAPI {
    generateAuth(): HttpRequestAuthedData;
    getAuthCredential(): AuthCredential;
    getHttpRequestData(): HttpRequestData;
    resetAuthCredential(): void;
    constructor();
}
