import { GlobalAppResponse } from "./GlobalAppResponse";
import { GlobalAppMoveResponse } from "./GlobalAppMoveResponse";

export class GlobalApp {
    static canMigrateUpdateRecord(appId?: string): boolean {
        return false;
    }
    static getAppMetadata(applicationId?: string): GlobalAppResponse {
        return null as any;
    }
    static getNameMetadata(metaName?: string, applicationId?: string): GlobalAppResponse {
        return null as any;
    }
    static getTableMetadata(tableName?: string, applicationId?: string): GlobalAppResponse {
        return null as any;
    }
    static getUpdateSetMetadata(updateSetId?: string, applicationId?: string): GlobalAppResponse {
        return null as any;
    }
    static moveMetadata(sysIds?: string, appId?: string): GlobalAppMoveResponse {
        return null as any;
    }
}
