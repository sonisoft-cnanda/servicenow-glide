export declare class HttpRequestAuthedData {
    constructor();
    addHeader(key?: string, value?: string): void;
    addQueryParam(key?: string, value?: string): void;
    getCredentialValue(): string;
    getDirective(): string;
    getHeaderMap(): Record<any, any>;
    getQueryMap(): Record<any, any>;
    getStatus(): string;
    getStatusMessage(): string;
    setCredentialValue(credentialValue?: string): void;
    setDirective(directive?: string): void;
    setStatus(status?: string): void;
    setStatusMessage(statusMessage?: string): void;
}
//# sourceMappingURL=HttpRequestAuthedData.d.ts.map