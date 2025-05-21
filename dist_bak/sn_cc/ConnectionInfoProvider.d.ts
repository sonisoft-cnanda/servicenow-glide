import { ConnectionInfo } from '../imports/ConnectionInfo';
export declare class ConnectionInfoProvider {
    getConnectionInfo(aliasID?: string): ConnectionInfo;
    getConnectionInfoByDomain(aliasID?: string, domainID?: string): ConnectionInfo;
    getConnectionInfoList(aliasID?: string): Array<any>;
    getConnectionInfoListByDomain(aliasID?: string, domainID?: string): Array<any>;
    constructor();
}
