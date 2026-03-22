import { GlideMemoryRecord } from "./GlideMemoryRecord";
import { GlideRecord } from "./GlideRecord";
import { GlideVector } from "./GlideVector";

export class GlideUser {
    constructor() {  }
    static getUser(user: string): GlideUser {
        return null as any;
    }
    static getUserByID(id: string): GlideUser {
        return null as any;
    }
    static getUserByEmail(email: string): GlideUser {
        return null as any;
    }
    static getSysIdByEmail(email: string): string {
        return "";
    }
    static authenticateMutualAuthToken(): string {
        return "";
    }
    static authenticateOAuthAccessToken(token: string): string {
        return "";
    }
    static authenticateUser(user: string, password: string): string {
        return "";
    }
    static authenticate(user: string, password: string): boolean {
        return false;
    }
    static getCurrentUser(): GlideUser {
        return null as any;
    }
    static getSysTimeZone(): string {
        return "";
    }
    static isLockedOut(userName: string): boolean {
        return false;
    }
    static isWebSvcAccessOnly(userName: string): boolean {
        return false;
    }
    static resolveSysId(value: string): string {
        return "";
    }
    static getSysId(name: string, value: string): string {
        return "";
    }
    static resolveNameFromLoginName(name: string): string;
    static resolveNameFromLoginName(name: any): string;
    static resolveNameFromLoginName(...args: any[]): any {
        return "";
    }
    static resolveNameFromSysID(sysID: string): string {
        return "";
    }
    static getMyGroups(user: string): Array<string> {
        return [];
    }
    static getMyExplicitGroups(u: string): Array<string> {
        return [];
    }
    static getAllGroups(): Array<string> {
        return [];
    }
    isDefault(): boolean {
        return false;
    }
    getEmail(): string {
        return "";
    }
    getFullName(): string {
        return "";
    }
    getManagerID(): string {
        return "";
    }
    getDepartmentID(): string {
        return "";
    }
    getManagerName(): string {
        return "";
    }
    exists(): boolean {
        return false;
    }
    getCompanyRecord(): GlideRecord {
        return null as any;
    }
    getDomainID(): string {
        return "";
    }
    getDomainDisplayValue(): string {
        return "";
    }
    getTZ(): string {
        return "";
    }
    getTimeZoneLabel(): string {
        return "";
    }
    getTimeZoneLabelLang(language: string): string {
        return "";
    }
    getDateTimeFormat(): string {
        return "";
    }
    getDateFormat(): string {
        return "";
    }
    getDateFormatEx(style: string): string {
        return "";
    }
    setDateFormat(df: string): void {
        
    }
    getTimeFormat(): string {
        return "";
    }
    setTimeFormat(tf: string): void {
        
    }
    getLanguage(): string {
        return "";
    }
    getRecord(): GlideMemoryRecord {
        return null as any;
    }
    isXML(): boolean {
        return false;
    }
    isTimeLimitedCredential(): boolean {
        return false;
    }
    isACRUser(): boolean {
        return false;
    }
    isOpenIDConnect(): boolean {
        return false;
    }
    getCountry(): string {
        return "";
    }
    getTitle(): string {
        return "";
    }
    getFirstName(): string {
        return "";
    }
    getLastName(): string {
        return "";
    }
    getMyExplicitGroups(): Array<string> {
        return [];
    }
    isExplicitMemberOf(group: any): boolean {
        return false;
    }
    getMyGroups(): Array<string> {
        return [];
    }
    getMyGroupsExcludeAdmin(): Array<string> {
        return [];
    }
    getManagedGroups(): Array<string> {
        return [];
    }
    getLocation(): string {
        return "";
    }
    getMobileNumber(): string {
        return "";
    }
    getUserType(): string {
        return "";
    }
    setPreferencesLoaded(b: boolean): void {
        
    }
    getInitials(): string {
        return "";
    }
    getAvatar(): string {
        return "";
    }
    getBusinessNumber(): string {
        return "";
    }
    hasAssignedRole(roleName: string): boolean {
        return false;
    }
    hasRoles(): boolean {
        return false;
    }
    getUserRoles(): GlideVector {
        return null as any;
    }
    getRoles(): GlideVector {
        return null as any;
    }
    getAllRoles(): string[] {
        return [];
    }
    isReadOnlyUser(): boolean {
        return false;
    }
    savePreferences(): void {
        
    }
    setPreference(name: string, value: string): void {
        
    }
    setDomainID(id: string): void {
        
    }
    getCompanyID(): string {
        return "";
    }
    getDisplayName(): string {
        return "";
    }
    getID(): string {
        return "";
    }
    getName(): string {
        return "";
    }
    getPreference(name: string): string {
        return "";
    }
    hasRole(o: any): boolean {
        return false;
    }
    isMemberOf(group: any): boolean {
        return false;
    }
    savePreference(name: string, value: string): void {
        
    }
}
