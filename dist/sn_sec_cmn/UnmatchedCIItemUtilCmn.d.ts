import { ConfigurationItemBaseUtilCmn } from './ConfigurationItemBaseUtilCmn.js';
export declare class UnmatchedCIItemUtilCmn extends ConfigurationItemBaseUtilCmn {
    private CI_CLASS_NAME;
    private UNMATCHED_CI_CLASS_NAME;
    private INCOMPLETE_IP_CLASS;
    private incompleteIPNetworkPartition;
    private ipAddressNetworkPartition;
    private ipAddressOwnedByCI;
    constructor();
    checkFieldValidity(): void;
    createNetworkAdapterCI(ciInfo: any): any;
    createIpAddressCI(ciInfo: any, payload: any): any;
    createIncompleteIPCI(ciInfo: any, payload: any): any;
    hasOnlyIp(ciInfo: any): boolean;
    createPayload(ciInfo: any, integration: string, payload: any): any;
    private _createNWAAndRelationsPayload;
    private _createIPAndRelationsPayload;
    createCIUsingGlide(payload: any, integration: string, domainID: string, detailResponse: any): string | null;
    type(): string;
}
//# sourceMappingURL=UnmatchedCIItemUtilCmn.d.ts.map