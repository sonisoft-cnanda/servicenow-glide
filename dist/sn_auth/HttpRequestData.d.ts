export declare class HttpRequestData {
    constructor();
    addHeader(key?: string, value?: string): void;
    addQueryParam(key?: string, value?: string): void;
    deleteHeader(key?: string): void;
    getConnectionAliasID(name?: string): string;
    getConnectionExtendedAttribute(name?: string): string;
    getContent(): string;
    getDate(): number;
    getDirective(): string;
    getEndpoint(): string;
    getExpiry(): number;
    getHeader(key?: string): string;
    getHeaderMap(): Record<any, any>;
    getHost(): string;
    getHttpMethod(): string;
    getQueryParam(key?: string): string;
    getQueryParamMap(): Record<any, any>;
    getRegion(): string;
    getService(): string;
    setContent(content?: string): void;
    setDate(date?: number): void;
    setDirective(directive?: string): void;
    setEndpoint(endpoint?: string): void;
    setExpiry(expiry?: number): void;
    setHost(host?: string): void;
    setHttpMethod(httpMethod?: string): void;
    setRegion(region?: string): void;
    setService(service?: string): void;
}
//# sourceMappingURL=HttpRequestData.d.ts.map