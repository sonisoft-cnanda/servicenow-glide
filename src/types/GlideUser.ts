import { GlideRecord } from '../imports/GlideRecord';
import { GlideMemoryRecord } from '../imports/GlideMemoryRecord';
import { GlideVector } from '../imports/GlideVector';

export class GlideUser {
    constructor() {}
    authenticate(user?: string, password?: string): boolean {
        return false;
    }
    authenticateMutualAuthToken(): string {
        return "";
    }
    authenticateOAuthAccessToken(token?: string): string {
        return "";
    }
    authenticateUser(user?: string, password?: string): string {
        return "";
    }
    exists(): boolean {
        return false;
    }
    getAllGroups(): Array<string> {
        return new Array<string>();
    }
    getAvatar(): string {
        return "";
    }
    getBusinessNumber(): string {
        return "";
    }
    getCompanyID(): string {
        return "";
    }
    getCompanyRecord(): GlideRecord {
        return new GlideRecord("");
    }
    getCountry(): string {
        return "";
    }
    getCurrentUser(): GlideUser {
        return new GlideUser();
    }
    getDateFormat(): string {
        return "";
    }
    getDateFormatEx(style?: string): string {
        return "";
    }
    getDateTimeFormat(): string {
        return "";
    }
    getDepartmentID(): string {
        return "";
    }
    getDisplayName(): string {
        return "";
    }
    getDomainDisplayValue(): string {
        return "";
    }
    getDomainID(): string {
        return "";
    }
    getEmail(): string {
        return "";
    }
    getFirstName(): string {
        return "";
    }
    getFullName(): string {
        return "";
    }
    getID(): string {
        return "";
    }
    getInitials(): string {
        return "";
    }
    getLanguage(): string {
        return "";
    }
    getLastName(): string {
        return "";
    }
    getLocation(): string {
        return "";
    }
    getManagedGroups(): Array<string> {
        return new Array<string>();
    }
    getManagerID(): string {
        return "";
    }
    getManagerName(): string {
        return "";
    }
    getMobileNumber(): string {
        return "";
    }
    getMyExplicitGroups(u?: string): Array<string> {
        return new Array<string>();
    }
    getMyGroups(user?: string): Array<string> {
        return new Array<string>();
    }
    getMyGroupsExcludeAdmin(): Array<string> {
        return new Array<string>();
    }
    getName(): string {
        return "";
    }
    getPreference(name?: string): string {
        return "";
    }
    getRecord(): GlideMemoryRecord {
        return new GlideMemoryRecord();
    }
    getRoles(): GlideVector {
        return new GlideVector();
    }
    getSysId(name?: string, value?: string): string {
        return "";
    }
    getSysIdByEmail(email?: string): string {
        return "";
    }
    getSysTimeZone(): string {
        return "";
    }
    getTZ(): string {
        return "";
    }
    getTimeFormat(): string {
        return "";
    }
    getTitle(): string {
        return "";
    }
    getUser(user?: string): GlideUser {
        return new GlideUser();
    }
    getUserByEmail(email?: string): GlideUser {
        return new GlideUser();
    }
    getUserByID(id?: string): GlideUser {
        return new GlideUser();
    }
    getUserRoles(): GlideVector {
        return new GlideVector();
    }
    getUserType(): string {
        return "";
    }
    hasRole(o?: any): boolean {
        return false;
    }
    hasRoles(): boolean {
        return false;
    }
    isACRUser(): boolean {
        return false;
    }
    isDefault(): boolean {
        return false;
    }
    isExplicitMemberOf(group?: any): boolean {
        return false;
    }
    isLockedOut(userName?: string): boolean {
        return false;
    }
    isMemberOf(group?: any): boolean {
        return false;
    }
    isOpenIDConnect(): boolean {
        return false;
    }
    isReadOnlyUser(): boolean {
        return false;
    }
    isTimeLimitedCredential(): boolean {
        return false;
    }
    isWebSvcAccessOnly(userName?: string): boolean {
        return false;
    }
    isXML(): boolean {
        return false;
    }
    resolveNameFromLoginName(name?: string): string {
        return "";
    }
    resolveNameFromSysID(sysID?: string): string {
        return "";
    }
    resolveSysId(value?: string): string {
        return "";
    }
    savePreference(name?: string, value?: string): void {
        
    }
    savePreferences(): void {
        
    }
    setDateFormat(df?: string): void {
        
    }
    setDomainID(id?: string): void {
        
    }
    setPreference(name?: string, value?: string): void {
        
    }
    setPreferencesLoaded(b?: boolean): void {
        
    }
    setTimeFormat(tf?: string): void {
        
    }
}
