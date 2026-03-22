import { GlideDateTime } from "../types/GlideDateTime";

export class HermesMessageInfo {
    constructor() {  }
    getHeaders(): string {
        return "";
    }
    getKey(): string {
        return "";
    }
    getOffset(): Record<any, any> {
        return {} as any;
    }
    getPartition(): number {
        return 0;
    }
    getPayload(): string {
        return "";
    }
    getTimestamp(): GlideDateTime {
        return null as any;
    }
    isKeyError(): boolean {
        return false;
    }
    isPayloadError(): boolean {
        return false;
    }
}
