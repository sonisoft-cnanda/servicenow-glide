export class DomainCleanup {
    constructor() {  }
    deleteProcessSeparatedTableJobs(tableNames: Array<string>, domains: Array<string>, batchId: string): void {
        
    }
    manageDomainDataCleanupProcess(): void {
        
    }
    populateInactiveDomainData(inactiveDomainsMap: Record<string, string>, domainTable: string): boolean {
        return false;
    }
    schedulePopulateInactiveDomainJob(): string {
        return "";
    }
    transferToStaging(stagingRetentionDays: number): boolean {
        return false;
    }
}
