import { RefreshRepository } from "./RefreshRepository";
import { Repositories } from "./Repositories";
import { ImportApplication } from "./ImportApplication";
import { CreateBranchForApp } from "./CreateBranchForApp";
import { RegisterRepository } from "./RegisterRepository";
import { ExportApplication } from "./ExportApplication";
import { UpdateRepoConfig } from "./UpdateRepoConfig";
import { SwitchToBranch } from "./SwitchToBranch";

export class AppSourceControl {
    static applyIncomingChanges(): ImportApplication {
        return null as any;
    }
    static canWriteRecordInSysApp(sysAppSysIdObject?: any): boolean {
        return false;
    }
    static commitOutgoingChanges(): ExportApplication {
        return null as any;
    }
    static createBranch(): CreateBranchForApp {
        return null as any;
    }
    static exceedsChangedFilesDisplayLimit(sysAppSysIdObject?: any): boolean {
        return false;
    }
    static getDefaultBranchName(): string {
        return "";
    }
    static getRemoteDefaultBranchName(): string {
        return "";
    }
    static getRepositories(): Repositories {
        return null as any;
    }
    static getRepository(sysAppSysIdObject?: any): Repositories {
        return null as any;
    }
    static hasIncomingChanges(sysAppSysIdObject?: any): boolean {
        return false;
    }
    static hasOutgoingChanges(sysAppSysIdObject?: any): boolean {
        return false;
    }
    static hasUpdateSetCommitHistory(sysAppSysIdObject?: any): boolean {
        return false;
    }
    static isInSourceControl(sysAppSysIdObject?: any): boolean {
        return false;
    }
    static refreshRepository(): RefreshRepository {
        return null as any;
    }
    static registerRepository(): RegisterRepository {
        return null as any;
    }
    static switchToBranch(): SwitchToBranch {
        return null as any;
    }
    static updateRepoConfig(): UpdateRepoConfig {
        return null as any;
    }
    static usesDeltaLoading(sysAppSysIdObject?: any): boolean {
        return false;
    }
}
