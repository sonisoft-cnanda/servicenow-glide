import { SncIPAddress } from "./SncIPAddress";

export class GlideSession {
    constructor() {  }
    addErrorMessage(message: string): void {
        
    }
    addHighMessage(message: string): void {
        
    }
    addInfoMessage(message: string): void {
        
    }
    addLowMessage(message: string): void {
        
    }
    addModerateMessage(message: string): void {
        
    }
    addSuggestionMessage(message: string): void {
        
    }
    addSuccessMessage(message: string): void {
        
    }
    addTrivialMessage(message: string): void {
        
    }
    addWarningMessage(message: string): void {
        
    }
    clearClientData(name: string): void {
        
    }
    clearProperty(key: string): void {
        
    }
    clearWatchField(): void {
        
    }
    disableQueryCategoryPool(poolName: string): void {
        
    }
    static disableSeparation(): void {
        
    }
    static disconnect(): void;
    static disconnect(releaseMutexes: boolean): void;
    static disconnect(...args: any[]): any {
        
    }
    enableSeparation(): void {
        
    }
    getActivatedElevatedRoles(): string {
        return "";
    }
    getAvailableElevatedRoles(): string {
        return "";
    }
    getBooleanProperty(name: string): boolean;
    getBooleanProperty(key: string, bDefault: boolean): boolean;
    getBooleanProperty(...args: any[]): any {
        return false;
    }
    getBusinessRuleStack(): any {
        return null as any;
    }
    getClientDataMap(): any {
        return null as any;
    }
    getCurrentDomainID(): string {
        return "";
    }
    getCryptoModulePicker(): any {
        return null as any;
    }
    getCryptoModulePickerForTableWithSingleModule(tableName: string): any {
        return null as any;
    }
    getDateFormat(): string;
    getDateFormat(style: string): string;
    getDateFormat(...args: any[]): any {
        return "";
    }
    getDateTimeFormat(): string;
    getDateTimeFormat(dateStyle: string): string;
    getDateTimeFormat(...args: any[]): any {
        return "";
    }
    getEncryptionContext(): any {
        return null as any;
    }
    getFullName(): string {
        return "";
    }
    getHighMessage(): void {
        
    }
    getKaaProfile(): any {
        return null as any;
    }
    getLoginHome(direct: boolean): string {
        return "";
    }
    getRoles(): string;
    getRoles(includeDefaultRoles: boolean): string;
    getRoles(...args: any[]): any {
        return "";
    }
    getRunEngines(): boolean {
        return false;
    }
    getSessionID(): string {
        return "";
    }
    getSessionKey(): string {
        return "";
    }
    getStack(): any {
        return null as any;
    }
    getStackName(): string {
        return "";
    }
    getTimeFormat(): string {
        return "";
    }
    getTimeZone(): any {
        return null as any;
    }
    getTimeZoneName(): string {
        return "";
    }
    getTimeZoneShortName(): string {
        return "";
    }
    getUID(): string {
        return "";
    }
    getURI(): string {
        return "";
    }
    getUser(): any {
        return null as any;
    }
    getUserName(): string {
        return "";
    }
    getWatchField(): string {
        return "";
    }
    getWorkflow(): boolean {
        return false;
    }
    hasRole(appRoles: string): boolean {
        return false;
    }
    impersonate(userSysId: string): string {
        return "";
    }
    isInteractive(): boolean {
        return false;
    }
    isLockedOut(): boolean {
        return false;
    }
    isLoggedIn(): boolean {
        return false;
    }
    isOverridingQueryRoute(poolGR: any): boolean {
        return false;
    }
    isQueryCategoryPoolDisabled(poolName: string): boolean {
        return false;
    }
    loadUserByID(userSysId: string): any {
        return null as any;
    }
    getHttpSession(): any {
        return null as any;
    }
    onlineImpersonate(userSysId: string): string {
        return "";
    }
    onlineUnimpersonate(): string {
        return "";
    }
    putClientData(name: string, value: string): void {
        
    }
    putProperty(key: string, value: any): void {
        
    }
    resetDisabledQueryCategoryPool(poolName: string): void {
        
    }
    resetOverrideQueryCategoryPool(): void {
        
    }
    resetURI(): string {
        return "";
    }
    setCacheFlush(onOrOff: boolean): boolean {
        return false;
    }
    setCacheIgnoreFlushTable(table: string): string {
        return "";
    }
    setCurrentDomainID(domainID: string): void {
        
    }
    setDateFormat(dateFormat: string): void {
        
    }
    setDomainID(domainID: string): void {
        
    }
    setInteractive(b: boolean): void {
        
    }
    setLanguage(language: string): void {
        
    }
    setOverrideQueryCategoryPool(poolGR: any): void {
        
    }
    setRunEngines(onOrOff: boolean): boolean {
        return false;
    }
    setSessionID(string: string): void {
        
    }
    setStack(s: any): void;
    setStack(stackName: string, s: any): void;
    setStack(...args: any[]): any {
        
    }
    setTimeFormat(timeFormat: string): void {
        
    }
    setTimeZoneName(timezoneName: string): void {
        
    }
    setURI(uri: string): void {
        
    }
    setWatchField(id: string): void {
        
    }
    setWorkflow(onOrOff: boolean): boolean {
        return false;
    }
    static enableSeparation(): void {
        
    }
    static get(): GlideSession {
        return null as any;
    }
    static getSeparationValue(): string {
        return "";
    }
    getClientData(name: string): string {
        return "";
    }
    getClientIP(): SncIPAddress {
        return null as any;
    }
    getLanguage(): string {
        return "";
    }
    getUrlOnStack(): string {
        return "";
    }
    getSessionToken(): string {
        return "";
    }
    getCurrentApplicationId(): string {
        return "";
    }
    isImpersonating(): boolean {
        return false;
    }
    getApplicationPickerList(): Array<Record<any, any>> {
        return [];
    }
}
