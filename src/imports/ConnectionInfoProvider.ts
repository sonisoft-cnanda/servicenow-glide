import { ConnectionInfo } from './ConnectionInfo';

export class ConnectionInfoProvider {
    constructor() {}
    getConnectionInfo(aliasID?: string): ConnectionInfo {
        return new ConnectionInfo();
    }
    getConnectionInfoByDomain(aliasID?: string, domainID?: string): ConnectionInfo {
        return new ConnectionInfo();
    }
    getConnectionInfoList(aliasID?: string): Array<any> {
        return new Array();
    }
    getConnectionInfoListByDomain(aliasID?: string, domainID?: string): Array<any> {
        return new Array();
    }
}
