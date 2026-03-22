import { Commits } from "./Commits";

export class Branches {
    constructor() {  }
    getCommit(commitId?: string): Commits {
        return null as any;
    }
    getCommits(): Commits {
        return null as any;
    }
    getCommitsForFile(metadataSysid?: string): Commits {
        return null as any;
    }
    getHeadCommit(): string {
        return "";
    }
    getName(): string {
        return "";
    }
    getSysRepoConfigSysId(): string {
        return "";
    }
    isCurrent(): boolean {
        return false;
    }
    next(): boolean {
        return false;
    }
    query(): boolean {
        return false;
    }
}
