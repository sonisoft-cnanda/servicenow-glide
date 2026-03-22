import { Repositories } from "./Repositories";
import { CreateBranch } from "./CreateBranch";
import { TestConnection } from "./TestConnection";

export class SourceControl {
    static createBranch(): CreateBranch {
        return null as any;
    }
    static deleteLocalRepositoryOnCurrentNode(deletedSysRepoConfigSysId?: string): boolean {
        return false;
    }
    static getDeepestRunningChild(trackerSysId?: string): string {
        return "";
    }
    static getRepositories(): Repositories {
        return null as any;
    }
    static getRepository(sysRepoConfigSysIdObject?: any): Repositories {
        return null as any;
    }
    static testConnection(): TestConnection {
        return null as any;
    }
}
