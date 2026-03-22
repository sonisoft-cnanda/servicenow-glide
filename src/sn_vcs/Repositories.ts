import { NativeArray } from "../imports/NativeArray";
import { Commits } from "./Commits";
import { RepositoryWorkers } from "./RepositoryWorkers";
import { Branches } from "./Branches";
import { Stashes } from "./Stashes";
import { Tags } from "./Tags";

export class Repositories {
    constructor() {  }
    addQueryOnlyApplications(): Repositories {
        return null as any;
    }
    deleteRecord(): boolean {
        return false;
    }
    getBranch(branchName?: string): Branches {
        return null as any;
    }
    getBranches(): Branches {
        return null as any;
    }
    getCommit(commitId?: string): Commits {
        return null as any;
    }
    getCommits(): Commits {
        return null as any;
    }
    getCommitsForFile(metadataSysid?: string): Commits {
        return null as any;
    }
    getCredential(): string {
        return "";
    }
    getCurrentBranch(): string {
        return "";
    }
    getCurrentCommit(): string {
        return "";
    }
    getCurrentStashPreview(): Stashes {
        return null as any;
    }
    getDefaultCommitEmail(): string {
        return "";
    }
    getLastCommitForFile(metadataSysid?: string): Commits {
        return null as any;
    }
    getMidServer(): string {
        return "";
    }
    getOutgoingChanges(): NativeArray {
        return null as any;
    }
    getRepositoryURL(): string {
        return "";
    }
    getShortDescription(): string {
        return "";
    }
    getStash(stashSysId?: string): Stashes {
        return null as any;
    }
    getStashes(): Stashes {
        return null as any;
    }
    getSysAppSysId(): string {
        return "";
    }
    getSysId(): string {
        return "";
    }
    getTag(tagName?: string): Tags {
        return null as any;
    }
    getTags(): Tags {
        return null as any;
    }
    getUseDefaultEmailForAllCommits(): boolean {
        return false;
    }
    hasIncomingChanges(): boolean {
        return false;
    }
    hasOutgoingChanges(): boolean {
        return false;
    }
    next(): boolean {
        return false;
    }
    query(): boolean {
        return false;
    }
    removeLinkToApplication(): boolean {
        return false;
    }
    workers(): RepositoryWorkers {
        return null as any;
    }
}
