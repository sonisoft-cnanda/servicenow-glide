import { GlideRecord, gs } from '@servicenow/glide';
import { ConfigurationItemBaseUtilCmn } from './ConfigurationItemBaseUtilCmn';

export class UnmatchedCIItemUtilCmn extends ConfigurationItemBaseUtilCmn {
    private CI_CLASS_NAME: string;
    private UNMATCHED_CI_CLASS_NAME: string;
    private INCOMPLETE_IP_CLASS: string;
    private incompleteIPNetworkPartition: boolean;
    private ipAddressNetworkPartition: boolean;
    private ipAddressOwnedByCI: boolean;

    constructor() {
        super();
        this.CI_CLASS_NAME = "cmdb_ci_unclassed_hardware";
        this.UNMATCHED_CI_CLASS_NAME = "sn_sec_cmn_unmatched_ci";
        this.INCOMPLETE_IP_CLASS = "cmdb_ci_incomplete_ip";
        this.checkFieldValidity();
    }

    public checkFieldValidity(): void {}

    public createNetworkAdapterCI(ciInfo: any): any {
        return null;
    }

    public createIpAddressCI(ciInfo: any, payload: any): any {
        return null;
    }

    public createIncompleteIPCI(ciInfo: any, payload: any): any {
        return null;
    }

    public hasOnlyIp(ciInfo: any): boolean {
        return false;
    }

    //@ts-ignore
    public createPayload(ciInfo: any, integration: string, payload: any): any {
        return null;
    }

    private _createNWAAndRelationsPayload(ciInfo: any, item: any, relations: any[], networkAdaptors: any[]): void {}

    private _createIPAndRelationsPayload(ciInfo: any, item: any, items: any[], relations: any[], referenceItems: any[], payload: any): void {}

    public createCIUsingGlide(payload: any, integration: string, domainID: string, detailResponse: any): string | null {
        return null;
    }

    public type(): string {
        return 'UnmatchedCIItemUtilCmn';
    }
}