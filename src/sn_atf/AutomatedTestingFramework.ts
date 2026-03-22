import { GlideRecord } from "../types/GlideRecord";

export class AutomatedTestingFramework {
    static cancelTestRun(progressId?: string): string {
        return "";
    }
    static collectSessionStatsMetrics(testStepSysId?: string, testResultSysId?: string): void {
        
    }
    static doesRerunSuiteHaveUITests(testSuiteSysId?: string, previousSuiteResultSysId?: string): boolean {
        return false;
    }
    static doesSuiteHaveUITests(testSuiteSysId?: string): boolean {
        return false;
    }
    static doesTestHaveUISteps(testSysId?: string): boolean {
        return false;
    }
    static getLastUsedTableNameInTestBasedOnStep(stepGR?: GlideRecord): string {
        return "";
    }
    static getMaxWaitTimeoutSeconds(): number {
        return 0;
    }
    static getScreenshotsMode(): string {
        return "";
    }
    static getScreenshotsQuality(): number {
        return 0;
    }
    static getTestRunnerFindTestIntervalSeconds(): number {
        return 0;
    }
    static getTestRunnerHeartbeatIntervalSeconds(): number {
        return 0;
    }
    static isComponentTrimEnabled(): boolean {
        return false;
    }
    static isDebugEnabled(): boolean {
        return false;
    }
    static isExternalUserInATFContext(): boolean {
        return false;
    }
    static isInATFContext(): boolean {
        return false;
    }
    static isRunnerEnabled(): boolean {
        return false;
    }
    static isTestSuiteActive(testSuiteSysId?: string): boolean {
        return false;
    }
    static isValidATFUser(): boolean {
        return false;
    }
    static killTestRun(transactionId?: string, isClusterMessage?: boolean): string {
        return "";
    }
    static latestTestResultForMetadata(updateName?: string): GlideRecord {
        return null as any;
    }
    static linkForTracedMetadataForMetadata(metadataSysId?: string): string {
        return "";
    }
    static linkForTracedMetadataForMetadataGroupedBy(metadataSysId?: string, groupedBy?: string): string {
        return "";
    }
    static linkForTracedMetadataForTestSuite(testSuiteSysId?: string): string {
        return "";
    }
    static linkForTracedMetadataForTestSuiteGroupedBy(testSuiteSysId?: string, groupedBy?: string): string {
        return "";
    }
    static linkForTracedMetadataForTestSuiteResults(testSuiteSysId?: string): string {
        return "";
    }
    static linkForTracedMetadataForTestSuiteResultsGroupedBy(testSuiteSysId?: string, groupedBy?: string): string {
        return "";
    }
    static linkForTracedMetadataForUpdateName(updateName?: string): string {
        return "";
    }
    static linkForTracedMetadataForUpdateNameGroupedBy(updateName?: string, groupedBy?: string): string {
        return "";
    }
    static linkForTracedMetadataWithStatusTests(updateName?: string, testStatus?: string): string {
        return "";
    }
    static linkForTracedMetadataWithStatusTestsGroupedBy(updateName?: string, testStatus?: string, groupedBy?: string): string {
        return "";
    }
    static tracedMetadataForMetadata(metadataSysId?: string): GlideRecord {
        return null as any;
    }
    static tracedMetadataForMetadataType(metadataType?: string): GlideRecord {
        return null as any;
    }
    static tracedMetadataForTestResult(testResultSysId?: string): GlideRecord {
        return null as any;
    }
    static tracedMetadataForUpdateSet(updateSetSysId?: string): GlideRecord {
        return null as any;
    }
    static uploadAttachments(stepID?: string, table?: string, recordID?: string): string {
        return "";
    }
    static waitOneSecond(): boolean {
        return false;
    }
}
