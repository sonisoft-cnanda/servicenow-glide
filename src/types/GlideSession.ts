import { Stack } from '../imports/Stack';
import { ChoiceList } from '../imports/ChoiceList';
import { IPAddress } from '../imports/IPAddress';
import { CryptoModulePicker } from '../imports/CryptoModulePicker';
import { EncryptionContext } from '../imports/EncryptionContext';
import { HttpSession } from '../imports/HttpSession';
import { ScopedKMFKaaProfile } from '../imports/ScopedKMFKaaProfile';
import { GlideStack } from '../imports/GlideStack';
import { TimeZone } from '../imports/TimeZone';
import { GlideUser } from '../imports/GlideUser';
import { GlideRecord } from '../imports/GlideRecord';

export class GlideSession {
    constructor() {}
    addErrorMessage(message?: string): void {
        
    }
    addInfoMessage(message?: string): void {
        
    }
    addTrivialMessage(message?: string): void {
        
    }
    checkActiveDBs(): void {
        
    }
    clearClientData(name?: string): void {
        
    }
    clearProperty(key?: string): void {
        
    }
    clearWatchField(): void {
        
    }
    disableQueryCategoryPool(poolName?: string): void {
        
    }
    disableSeparation(): void {
        
    }
    disconnect(releaseMutexes?: boolean): void {
        
    }
    enableSeparation(): void {
        
    }
    get(): GlideSession {
        return new GlideSession();
    }
    getActivatedElevatedRoles(): string {
        return "";
    }
    getAvailableElevatedRoles(): string {
        return "";
    }
    getBooleanProperty(key?: string, bDefault?: boolean): boolean {
        return false;
    }
    getBusinessRuleStack(): Stack {
        return new Stack();
    }
    getClientData(name?: string): string {
        return "";
    }
    getClientDataMap(): ChoiceList {
        return new ChoiceList();
    }
    getClientIP(): IPAddress {
        return new IPAddress();
    }
    getContextualMode(): string {
        return "";
    }
    getCryptoModulePicker(): CryptoModulePicker {
        return new CryptoModulePicker();
    }
    getCryptoModulePickerForTableWithSingleModule(tableName?: string): CryptoModulePicker {
        return new CryptoModulePicker();
    }
    getCurrentDomainID(): string {
        return "";
    }
    getDateFormat(style?: string): string {
        return "";
    }
    getDateTimeFormat(dateStyle?: string): string {
        return "";
    }
    getEncryptionContext(): EncryptionContext {
        return new EncryptionContext();
    }
    getFullName(): string {
        return "";
    }
    getHttpSession(): HttpSession {
        return new HttpSession();
    }
    getIntProperty(key?: string, iDefault?: number): number {
        return 0;
    }
    getKaaProfile(): ScopedKMFKaaProfile {
        return new ScopedKMFKaaProfile();
    }
    getLanguage(): string {
        return "";
    }
    getLoginHome(direct?: boolean): string {
        return "";
    }
    getNumberOfWaiters(): number {
        return 0;
    }
    getProperty(key?: string): any {
        return null;
    }
    getRoles(includeDefaultRoles?: boolean): string {
        return "";
    }
    getRunEngines(): boolean {
        return false;
    }
    getSeparationValue(): string {
        return "";
    }
    getSessionID(): string {
        return "";
    }
    getSessionKey(): string {
        return "";
    }
    getStack(stackName?: string): GlideStack {
        return new GlideStack();
    }
    getStackName(): string {
        return "";
    }
    getTimeFormat(): string {
        return "";
    }
    getTimeZone(): TimeZone {
        return new TimeZone();
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
    getUser(): GlideUser {
        return new GlideUser();
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
    hasRole(appRoles?: string): boolean {
        return false;
    }
    impersonate(userSysId?: string): string {
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
    isOverridingQueryRoute(poolGR?: GlideRecord): boolean {
        return false;
    }
    isQueryCategoryPoolDisabled(poolName?: string): boolean {
        return false;
    }
    loadUserByID(userSysId?: string): GlideUser {
        return new GlideUser();
    }
    onlineImpersonate(userSysId?: string): string {
        return "";
    }
    onlineUnimpersonate(): string {
        return "";
    }
    putClientData(name?: string, value?: string): void {
        
    }
    putProperty(key?: string, value?: any): void {
        
    }
    resetDisabledQueryCategoryPool(poolName?: string): void {
        
    }
    resetOverrideQueryCategoryPool(): void {
        
    }
    resetURI(): string {
        return "";
    }
    setCacheFlush(onOrOff?: boolean): boolean {
        return false;
    }
    setCacheIgnoreFlushTable(table?: string): string {
        return "";
    }
    setContextualMode(mode?: string): void {
        
    }
    setDateFormat(dateFormat?: string): void {
        
    }
    setDomainID(domainID?: string): void {
        
    }
    setInteractive(b?: boolean): void {
        
    }
    setLanguage(language?: string): void {
        
    }
    setOverrideQueryCategoryPool(poolGR?: GlideRecord): void {
        
    }
    setRunEngines(onOrOff?: boolean): boolean {
        return false;
    }
    setStrictQuery(b?: boolean): boolean {
        return false;
    }
    setTimeFormat(timeFormat?: string): void {
        
    }
    setTimeZoneName(timezoneName?: string): void {
        
    }
    setURI(uri?: string): void {
        
    }
    setWatchField(id?: string): void {
        
    }
    setWorkflow(onOrOff?: boolean): boolean {
        return false;
    }
}
