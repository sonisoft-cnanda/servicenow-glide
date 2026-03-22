import { DocumentVirtualRecord } from "./DocumentVirtualRecord";

export class DeploymentRiskAPI {
    static getTableSize(tableName?: string): number {
        return 0;
    }
    static hasCodeChanges(incoming?: DocumentVirtualRecord, currentPayloadString?: string): boolean {
        return false;
    }
    static scanRemoteSourceUpdateSets(updateSets?: string, ruleSets?: string, remoteSourceId?: string): string {
        return "";
    }
    static scanRemoteUpdateSet(updateSetId?: string, ruleSetId?: string): string {
        return "";
    }
    static scanRemoteUpdateSets(updateSetIds?: Set<string>, ruleSetIds?: Set<string>): string {
        return "";
    }
    static scanUpdateSet(updateSetId?: string, ruleSetId?: string): string {
        return "";
    }
    static scanUpdateSets(updateSetIds?: Set<string>, ruleSetIds?: Set<string>): string {
        return "";
    }
}
