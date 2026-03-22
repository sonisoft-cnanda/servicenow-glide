export class CommitDetails {
    constructor() {  }
    getFileName(): string {
        return "";
    }
    next(): boolean {
        return false;
    }
    query(): boolean {
        return false;
    }
    setCommitId(commitId?: string): CommitDetails {
        return null as any;
    }
}
