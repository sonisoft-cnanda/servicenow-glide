export class GlideLicenseAPI {
    constructor() {  }
    canUserApproveOnTable(userId: string, tableName: string): boolean {
        return false;
    }
    canUsersApproveOnTable(userIds: string[], tableName: string): Map<string, boolean> {
        return {} as any;
    }
    disableEntitlementLogging(): GlideLicenseAPI {
        return null as any;
    }
    enableEntitlementLogging(): GlideLicenseAPI {
        return null as any;
    }
    getApplicationsForFeature(artifactId: string, artifactValue: string): string[] {
        return [];
    }
    getLicensesForFeature(artifactId: string, artifactValue: string): string[] {
        return [];
    }
    getTableNamesForFeature(artifactId: string, artifactValue: string): string[] {
        return [];
    }
    hasFeatureForTable(actionId: string, actionValue: string, tableName: string): boolean {
        return false;
    }
    hasLicenseForFeature(artifactId: string, artifactValue: string): boolean {
        return false;
    }
    isUserLicensedForActionOnTable(userId: string, actionId: string, actionValue: string, tableName: string): boolean {
        return false;
    }
    updateTableLicensingConfig(scopeName: string): void {
        
    }
}
