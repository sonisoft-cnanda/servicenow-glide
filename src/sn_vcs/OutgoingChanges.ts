import { GlideRecord } from "../types/GlideRecord";

export class OutgoingChanges {
    constructor() {  }
    getAction(): string {
        return "";
    }
    static getAllFilesUpdateSets(sysAppSysId?: string): Record<any, any> {
        return {} as any;
    }
    getCurrentRecord(): GlideRecord {
        return null as any;
    }
    getPayload(): string {
        return "";
    }
    getUpdateName(): string {
        return "";
    }
    getUpdateSetSysId(): string {
        return "";
    }
    next(): boolean {
        return false;
    }
    query(): boolean {
        return false;
    }
}
