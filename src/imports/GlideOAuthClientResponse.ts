import { GlideOAuthToken } from './GlideOAuthToken';

export class GlideOAuthClientResponse {
    constructor() {}
    getBody(): string {
        return "";
    }
    getContentType(): string {
        return "";
    }
    getErrorMessage(): string {
        return "";
    }
    getResponseCode(): number {
        return 0;
    }
    getResponseParameters(): Record<any, any> {
        return {};
    }
    getToken(): GlideOAuthToken {
        return new GlideOAuthToken();
    }
}
