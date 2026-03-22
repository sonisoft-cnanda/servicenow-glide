export class GlideTokenAuthContext {
    constructor() {  }
    areMultipleTokensAllowed(): boolean {
        return false;
    }
    getAPIKeyName(): string {
        return "";
    }
    getAuthScopeIDs(): Array<any> {
        return [];
    }
    getDescription(): string {
        return "";
    }
    getSource(): string {
        return "";
    }
    setAPIKeyName(apiKeyName?: string): void {
        
    }
    setAuthScopeIDs(authScopeIDs?: Array<any>): void {
        
    }
    setDescription(description?: string): void {
        
    }
    setMultipleTokensAllowed(areMultipleTokensAllowed?: boolean): void {
        
    }
    setSource(source?: string): void {
        
    }
}
