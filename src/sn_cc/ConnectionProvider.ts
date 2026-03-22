import { Connection } from "./Connection";

export class ConnectionProvider {
    constructor() {  }
    getConnectionInfo(aliasID?: string): Connection {
        return null as any;
    }
    getConnectionInfoByDomain(aliasID?: string, domainID?: string): Connection {
        return null as any;
    }
    getConnectionInfoList(aliasID?: string): Array<any> {
        return [];
    }
    getConnectionInfoListByDomain(aliasID?: string, domainID?: string): Array<any> {
        return [];
    }
}
