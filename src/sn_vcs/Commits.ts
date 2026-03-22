import { GlideDateTime } from "../types/GlideDateTime";
import { CommitDetails } from "./CommitDetails";

export class Commits {
    constructor() {  }
    getAuthorEmail(): string {
        return "";
    }
    getAuthorName(): string {
        return "";
    }
    getComments(): string {
        return "";
    }
    getCommitDetails(): CommitDetails {
        return null as any;
    }
    getCommitId(): string {
        return "";
    }
    getCommitterEmail(): string {
        return "";
    }
    getCommitterName(): string {
        return "";
    }
    getCurrentVersionPayload(metadataSysId?: string): string {
        return "";
    }
    getDateAuthored(): GlideDateTime {
        return null as any;
    }
    getDateCommitted(): GlideDateTime {
        return null as any;
    }
    getFileContent(sysMetadataSysId?: string): string {
        return "";
    }
    getLastErrorMessage(): string {
        return "";
    }
    isValid(): boolean {
        return false;
    }
    next(): boolean {
        return false;
    }
}
