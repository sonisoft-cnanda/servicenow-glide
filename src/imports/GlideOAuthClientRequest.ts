import { GlideOAuthJWTConfig } from './GlideOAuthJWTConfig';

export class GlideOAuthClientRequest {
    constructor() {}
    getGrantType(): string {
        return "";
    }
    getHeader(name?: string): string {
        return "";
    }
    getHeaders(): Record<any, any> {
        return {};
    }
    getMIDServer(): string {
        return "";
    }
    getParameter(name?: string): string {
        return "";
    }
    getParameters(): Record<any, any> {
        return {};
    }
    getPassword(): string {
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
    setGlideOAuthJWTConfig(glideOAuthJWTConfig?: GlideOAuthJWTConfig): void {
        
    }
    setGrantType(grantType?: string): void {
        
    }
    setHead(name?: string, value?: string): void {
        
    }
    setMIDServer(midServer?: string): void {
        
    }
    setParameter(name?: string, value?: string): void {
        
    }
    setParameters(map?: Record<any, any>): void {
        
    }
    setPassword(password?: string): void {
        
    }
    setRefreshToken(refreshToken?: string): void {
        
    }
    setScope(scope?: string): void {
        
    }
    setUserName(userName?: string): void {
        
    }
}
