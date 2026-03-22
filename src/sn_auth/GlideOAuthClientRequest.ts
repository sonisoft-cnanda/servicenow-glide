import { GlideOAuthJWTConfig } from "./GlideOAuthJWTConfig";

export class GlideOAuthClientRequest {
    constructor() {  }
    getGrantType(): string {
        return "";
    }
    getHeader(name?: string): string {
        return "";
    }
    getHeaders(): Record<any, any> {
        return {} as any;
    }
    getMIDServer(): string {
        return "";
    }
    getParameter(name?: string): string {
        return "";
    }
    getPassword(): string {
        return "";
    }
    getProviderName(): string {
        return "";
    }
    getRefreshToken(): string {
        return "";
    }
    getScope(): string {
        return "";
    }
    getUserName(): string {
        return "";
    }
    setGlideOAuthJWTConfig(scopedGlideOAuthJWTConfig?: GlideOAuthJWTConfig): void {
        
    }
    setGrantType(grantType?: string): void {
        
    }
    setHeader(name?: string, value?: string): void {
        
    }
    setMIDServer(midServer?: string): void {
        
    }
    setParameter(name?: string, value?: string): void {
        
    }
    setPassword(password?: string): void {
        
    }
    setProviderName(name?: string): void {
        
    }
    setRefreshToken(refreshToken?: string): void {
        
    }
    setScope(scope?: string): void {
        
    }
    setUserName(userName?: string): void {
        
    }
}
