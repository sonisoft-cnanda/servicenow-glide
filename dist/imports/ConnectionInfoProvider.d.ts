import { ConnectionInfo } from './ConnectionInfo.js';
export declare class ConnectionInfoProvider {
    constructor();
    getConnectionInfo(aliasID?: string): ConnectionInfo;
    getConnectionInfoByDomain(aliasID?: string, domainID?: string): ConnectionInfo;
    getConnectionInfoList(aliasID?: string): Array<any>;
    getConnectionInfoListByDomain(aliasID?: string, domainID?: string): Array<any>;
}
//# sourceMappingURL=ConnectionInfoProvider.d.ts.map