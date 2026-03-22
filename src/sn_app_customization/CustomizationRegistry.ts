export class CustomizationRegistry {
    static flush(): void {
        
    }
    static getContent(): string {
        return "";
    }
    static isCustomizationSupported(appIdOrScope?: string): boolean {
        return false;
    }
    static isCustomizationSupportedByName(scopeName?: string): boolean {
        return false;
    }
    static isCustomizedApp(appIdOrScope?: string): boolean {
        return false;
    }
}
