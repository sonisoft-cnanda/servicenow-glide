import { GlideRecord } from "../types/GlideRecord";

export class Updates {
    constructor() {  }
    getAction(): string {
        return "";
    }
    getCurrentPayload(): string {
        return "";
    }
    getCurrentRecord(): GlideRecord {
        return null as any;
    }
    getPayload(): string {
        return "";
    }
    getSysId(): string {
        return "";
    }
    getUpdateName(): string {
        return "";
    }
    isCollision(): boolean {
        return false;
    }
    isSkip(): boolean {
        return false;
    }
    next(): boolean {
        return false;
    }
    query(): boolean {
        return false;
    }
    referencesMissingTable(): boolean {
        return false;
    }
    setPayload(payload?: string): boolean {
        return false;
    }
    setSkip(skip?: boolean): boolean {
        return false;
    }
}
