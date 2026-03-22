import { Updates } from "./Updates";

export class Stashes {
    constructor() {  }
    deleteRecord(): boolean {
        return false;
    }
    getDescription(): string {
        return "";
    }
    getDestinationCommit(): string {
        return "";
    }
    getName(): string {
        return "";
    }
    getSourceCommit(): string {
        return "";
    }
    getSysCreatedOn(): string {
        return "";
    }
    getSysId(): string {
        return "";
    }
    getSysRepoConfigSysId(): string {
        return "";
    }
    getUpdate(updateSysId?: string): Updates {
        return null as any;
    }
    getUpdateByName(updateName?: string): Updates {
        return null as any;
    }
    getUpdates(): Updates {
        return null as any;
    }
    next(): boolean {
        return false;
    }
    query(): boolean {
        return false;
    }
    startGenerateStashPreview(): string {
        return "";
    }
}
