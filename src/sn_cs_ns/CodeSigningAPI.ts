import { GlideRecord } from "../types/GlideRecord";

export class CodeSigningAPI {
    constructor() {  }
    disableServiceNowRootOfTrust(): string {
        return "";
    }
    enableServiceNowRootOfTrust(): string {
        return "";
    }
    cleanUpOldOOBRecords(): boolean {
        return false;
    }
    createOOBUpdateSet(): string {
        return "";
    }
    createUpdateSetForCertificate(certificateRecord: GlideRecord): GlideRecord {
        return null as any;
    }
    createUpdateSetForScheduledJob(jobRecord: GlideRecord): GlideRecord {
        return null as any;
    }
    createUpdateSetForSecurityJob(jobRecord: GlideRecord): GlideRecord {
        return null as any;
    }
    createUpdateSetForTransaction(transactionRecord: GlideRecord): GlideRecord {
        return null as any;
    }
    deleteCustomerRootOfTrustCertificate(certId: string): void {
        
    }
    deleteCustomerRootOfTrustCertificateWithTransaction(transaction: string, certId: string): void {
        
    }
    disableCodeSigningProperty(): string {
        return "";
    }
    enableCertValidationProperty(): string {
        return "";
    }
    enableCodeSigningProperty(): string {
        return "";
    }
    executeTrustedInstanceTasks(): void {
        
    }
    getCertificateChain(certificateId: string): string {
        return "";
    }
    getInstanceUpgradeStatus(): boolean {
        return false;
    }
    guardRailsCheck(): void {
        
    }
    handleSignatureScanEvent(eventId: string, groupingFieldName: string, groupingFieldValue: string): void {
        
    }
    handleTrustedInstanceTaskEvent(eventId: string, groupingFieldName: string, groupingFieldValue: string): void {
        
    }
    isCustomerCodeSigningCert(certGr: GlideRecord): boolean {
        return false;
    }
    isRecordTrusted(tableName: string, recordSysId: string, purposeId: string): boolean {
        return false;
    }
    loadPluginSignaturesMetadataForActivePlugins(): void {
        
    }
    querySigningCryptoModule(purposeReference: string): string {
        return "";
    }
    readCodeSigningConfiguration(): string {
        return "";
    }
    reloadOOBRecords(): boolean {
        return false;
    }
    runSelectiveGuardRailCheck(stepIds: string): void {
        
    }
    scanAllSignaturesAndCreateReport(tableName: string, recordSysId: string): boolean {
        return false;
    }
    scanTrustinessForAllSignatures(): boolean {
        return false;
    }
    scanTrustinessForSignatures(signatureGR: GlideRecord): boolean {
        return false;
    }
    scanUpdateSetForSignatures(updateSetSysId: string, tableName: string): void {
        
    }
    signUpdateSet(updateSetName: string, updateSetSysId: string): boolean {
        return false;
    }
    signatureScanCleanup(): void {
        
    }
    triggerGuardRailsCheckJob(): void {
        
    }
    triggerTrustedInstanceTasksJob(): void {
        
    }
    trustedTaskEventsCleanup(): void {
        
    }
    validateTransactionRecord(transactionSysId: string): boolean {
        return false;
    }
    verifyAllSignatures(): string {
        return "";
    }
    static clearCodeSigningJobContextIfNeeded(): boolean {
        return false;
    }
}
