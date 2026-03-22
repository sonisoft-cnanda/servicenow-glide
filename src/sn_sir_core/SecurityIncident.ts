import { GlideRecord } from "../types/GlideRecord";

export class SecurityIncident {
    constructor() {  }
    abortNonSecurityUpdate(current?: GlideRecord): void {
        
    }
    canAccessSecureIncidents(): boolean {
        return false;
    }
    canAccessSecureRecord(record?: GlideRecord): boolean {
        return false;
    }
    canAccessSecureRecords(): boolean {
        return false;
    }
    canReadSecureRecords(): boolean {
        return false;
    }
    canWriteSecureRecords(): boolean {
        return false;
    }
    getRealUserID(): string {
        return "";
    }
    getRealUserName(): string {
        return "";
    }
    initializeSecurityTaskTransaction(record?: GlideRecord): void {
        
    }
    isSecurityRestrictedRecord(record?: GlideRecord): boolean {
        return false;
    }
    pirToPDF(sysId?: string): boolean {
        return false;
    }
    terminateSecurityTaskTransactions(): void {
        
    }
    updateFromAlert(alert?: GlideRecord, keyFieldsChanged?: boolean): boolean {
        return false;
    }
}
