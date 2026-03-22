export class CloudAccountServiceScript {
    constructor() {  }
    create(id?: string, name?: string, description?: string, status?: string): string {
        return "";
    }
    createAndAssociatedDatacenter(payload?: string, cloudAccountId?: string, ldcType?: string, region?: string): boolean {
        return false;
    }
    createAndAssociatedVCenter(cloudAccountId?: string, selectedLdcObj?: string): string {
        return "";
    }
    deleteCloudAccount(cloudAccountId?: string): boolean {
        return false;
    }
    disassociateDatacenter(datacenterId?: string): boolean {
        return false;
    }
    discoverLogicalDatacenter(cloudAccountId?: string, ldcId?: string): string {
        return "";
    }
    get(id?: string): any {
        return null as any;
    }
    getADCsInfoList(cloudAccountId?: string): string {
        return "";
    }
    getAllCloudAccount(selectedStatus?: string, searchName?: string, currentPage?: number, limit?: number): string {
        return "";
    }
    getCapacityLimit(associatedDcId?: string): string {
        return "";
    }
    getCloudServiceAccountList(providerType?: string): string {
        return "";
    }
    getDatacenterCapacity(associatedDcId?: string): Array<any> {
        return [];
    }
    getDecryptedString(value?: string): string {
        return "";
    }
    getDiscoveryInfo(discoveryStatusId?: string, ldcId?: string, hostedResources?: Array<any>, containedResources?: Array<any>): string {
        return "";
    }
    getDiscoveryJobs(cloudAccountId?: string): string {
        return "";
    }
    getEncryptedString(value?: string): string {
        return "";
    }
    getLDCTypes(): string {
        return "";
    }
    getLogicalDatacenterList(serviceAccountSysId?: string, cloudAccountSysId?: string): string {
        return "";
    }
    getPassword2FieldDecryptedString(table?: string, password2Field?: string, sysId?: string): string {
        return "";
    }
    getServiceAccountSysId(ldcId?: string): string {
        return "";
    }
    isDiscoveryInProgress(ldcId?: string): boolean {
        return false;
    }
    saveDatacenter(cloudAccountId?: string, ldcList?: string): string {
        return "";
    }
    update(cloudAccountServiceDTO?: any): any {
        return null as any;
    }
    updateCapacityLimit(updatedCapacityList?: string): boolean {
        return false;
    }
}
