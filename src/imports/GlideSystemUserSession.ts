import { UpgradeDebuggerResult } from './UpgradeDebuggerResult';
import { GlideUser } from './GlideUser';

export class GlideSystemUserSession {
    addErrorMessage(error?: any, messageKey?: string): void {
        
    }
    addErrorMessageNoSanitization(error?: any, messageKey?: string): void {
        
    }
    addInfoMessage(message?: any, messageKey?: string): void {
        
    }
    addInfoMessageNoSanitization(message?: any, messageKey?: string): void {
        
    }
    addMessage(bucket?: string, message?: any, messageKey?: string): void {
        
    }
    addUpgradeDebuggerArtifact(tableName?: string, sysId?: string): void {
        
    }
    createUser(common_name?: string): string {
        return "";
    }
    flushAccessMessages(): void {
        
    }
    flushMessages(): void {
        
    }
    getAccessMessages(): Array<any> {
        return new Array();
    }
    getCurrentApplicationId(): string {
        return "";
    }
    getCurrentApplicationName(): string {
        return "";
    }
    getCurrentApplicationScope(): string {
        return "";
    }
    getDateFormat(): string {
        return "";
    }
    getDateTimeFormat(): string {
        return "";
    }
    getErrorMessages(): Array<any> {
        return new Array();
    }
    getImpersonatingUserDisplayName(): string {
        return "";
    }
    getImpersonatingUserID(): string {
        return "";
    }
    getImpersonatingUserName(): string {
        return "";
    }
    getInfoMessages(): Array<any> {
        return new Array();
    }
    getMessages(type?: string): Array<any> {
        return new Array();
    }
    getNavMessage(): any {
        return null;
    }
    getSessionToken(): string {
        return "";
    }
    getSysTimeZone(): string {
        return "";
    }
    getTimeFormat(): string {
        return "";
    }
    getTrivialMessages(): Array<any> {
        return new Array();
    }
    getUpgradeDebuggerResult(): UpgradeDebuggerResult {
        return new UpgradeDebuggerResult();
    }
    getUrlOnStack(): string {
        return "";
    }
    getUser(): GlideUser {
        return new GlideUser();
    }
    getUserDisplayName(): string {
        return "";
    }
    getUserID(): string {
        return "";
    }
    getUserName(): string {
        return "";
    }
    getUserNameByUserID(userID?: string): string {
        return "";
    }
    hasMessages(buckets?: any): boolean {
        return false;
    }
    hasRoleInGroup(role?: any, group?: any): boolean {
        return false;
    }
    isCurrentApplicationCrossScopeProtected(): boolean {
        return false;
    }
    isCurrentApplicationCustom(): boolean {
        return false;
    }
    isCurrentApplicationInGlobalScope(): boolean {
        return false;
    }
    isInteractive(): boolean {
        return false;
    }
    isLoggedIn(): boolean {
        return false;
    }
    isScopeAdminForAnyApp(): boolean {
        return false;
    }
    isUpgradeDebuggerEnabled(): boolean {
        return false;
    }
    setCurrentApplicationId(appId?: string): string {
        return "";
    }
    setRedirect(o?: any): void {
        
    }
    setReturn(o?: any): void {
        
    }
    setTrackMetadataDeletes(onOrOff?: boolean): boolean {
        return false;
    }
    statsThisSession(onOff?: boolean): void {
        
    }
    statsThisSessionThreshold(threshold?: number): void {
        
    }
    suppressTextIndex(suppress?: boolean): boolean {
        return false;
    }
    suppressUpdateSynch(suppress?: boolean): boolean {
        return false;
    }
    updateUserRoles(userSysId?: string): void {
        
    }
    user(): string {
        return "";
    }
    userID(): string {
        return "";
    }
    user_id(): string {
        return "";
    }
}
