export class PolarisUI {
    canUsePolarisCSS(): boolean {
        return false;
    }
    canUsePolarisTemplates(): boolean {
        return false;
    }
    getBodyClassNames(): string {
        return "";
    }
    getPolarisClassicRoute(): string {
        return "";
    }
    getPolarisContextPath(): string {
        return "";
    }
    getPolarisLandingPath(): string {
        return "";
    }
    getPolarisLandingPathURL(): string {
        return "";
    }
    getPolarisRelativePath(): string {
        return "";
    }
    getSassVariableMap(): Record<any, any> {
        return {};
    }
    getThemeForUser(): Record<any, any> {
        return {};
    }
    getThemeVariableCssCacheKey(): string {
        return "";
    }
    isEnabled(): boolean {
        return false;
    }
    isFollowEnabled(): boolean {
        return false;
    }
}
