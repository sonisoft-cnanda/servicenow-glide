export class PolarisUI {
    static canUsePolarisCSS(): boolean {
        return false;
    }
    static canUsePolarisTemplates(): boolean {
        return false;
    }
    static getBodyClassNames(): string {
        return "";
    }
    static getPolarisClassicRoute(): string {
        return "";
    }
    static getPolarisContextPath(): string {
        return "";
    }
    static getPolarisLandingPath(): string {
        return "";
    }
    static getPolarisLandingPathURL(): string {
        return "";
    }
    static getPolarisRelativePath(): string {
        return "";
    }
    static getSassVariableMap(): Record<any, any> {
        return {} as any;
    }
    static getThemeForUser(): Record<any, any> {
        return {} as any;
    }
    static getThemeVariableCssCacheKey(): string {
        return "";
    }
    static getUxfThemePath(): string {
        return "";
    }
    static isEnabled(): boolean {
        return false;
    }
    static isFollowEnabled(): boolean {
        return false;
    }
}
