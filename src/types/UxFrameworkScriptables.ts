import { GlideRecord } from "./GlideRecord";

export class UxFrameworkScriptables {
    constructor() {  }
    static getEligibleDataResourceIds(macroponentSysId?: string, pageRegistrySysId?: string, routeFieldsAndParams?: Record<any, any>, macroponentConfig?: Record<any, any>): Array<any> {
        return [];
    }
    findUXFSnapshot(testSysId?: string, currentStepOrder?: string): string {
        return "";
    }
    getAvailableActions(componentId?: string): Array<any> {
        return [];
    }
    getUXFSeismicComponents(snapshotId?: string): Array<any> {
        return [];
    }
    static buildUxAssetBundleCache(): void {
        
    }
    static buildUxAssetCache(): void {
        
    }
    static buildUxAssetDeduplicatorCache(): void {
        
    }
    static buildUxComponentCache(): void {
        
    }
    static buildUxControllerCache(): void {
        
    }
    static buildUxDataBrokerCache(): void {
        
    }
    static buildUxRuntimeDataBrokerCache(): void {
        
    }
    static evaluateRoutePermission(routeId?: string, parentMacroponentId?: string, operation?: string): boolean {
        return false;
    }
    static extractTranslations(input?: string): string {
        return "";
    }
    static getAssetBundleManifest(bundleName?: string): Array<any> {
        return [];
    }
    static getAssetCacheBuster(): number {
        return 0;
    }
    static getAssetPublicPath(): string {
        return "";
    }
    static getFlushTimestamp(): string {
        return "";
    }
    static getFullPathByRelativeUrl(relativeUrl?: string, scopeName?: string): string {
        return "";
    }
    static getLandingPagePlaceholderSysId(workspaceMasterConfigSysId?: string): string {
        return "";
    }
    static getLoginPagePreloadAssetBundleURLsForMacroponents(): string {
        return "";
    }
    static getLoginPagePreloadURLsForMacroponents(): string {
        return "";
    }
    static getLoginPagePreloadUrlForStaticUxGlobals(uxAppSysId?: string): string {
        return "";
    }
    static getLoginPagePreloadUrlForUxspAsset(): string {
        return "";
    }
    static getLoginPagePreloadUrlsForAssets(): string {
        return "";
    }
    static getManagedServiceWorkerDisabled(): boolean {
        return false;
    }
    static getManagedServiceWorkerLoaderPath(): string {
        return "";
    }
    static getManagedServiceWorkersConfig(): string {
        return "";
    }
    static getMaxDepthForBaseURLPath(): number {
        return 0;
    }
    static getReservedRoutes(): string[] {
        return [];
    }
    static getThemeFontsToPreloadOnLoginPage(): string {
        return "";
    }
    static isCBComponent(macropnentSysId?: string): boolean {
        return false;
    }
    static isDDUserWithUIBuilderPermission(): boolean {
        return false;
    }
    static isLoggedIn(request?: any): boolean {
        return false;
    }
    static markMacroponentRelatedRecordsAsDirty(gr?: GlideRecord): void {
        
    }
    static validateMacroponent(gr?: GlideRecord): Array<any> {
        return [];
    }
}
