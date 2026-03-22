import { NativeObject } from "../imports/NativeObject";
import { GlideRecord } from "../types/GlideRecord";

export class ProcessSyncQueueAPIHelper {
    constructor() {  }
    createAttachmentKey(attachmentMetadata?: NativeObject, remoteSystem?: GlideRecord): NativeObject {
        return null as any;
    }
    getAttachmentId(attachmentKey?: string, remoteSystemExtId?: string): string {
        return "";
    }
    triggerMoveAttachmentsAction(correlationId?: string): string {
        return "";
    }
    triggerPushAttachmentSubflow(attachmentIds?: Array<any>, correlationId?: string, remoteSystemExtId?: string): string {
        return "";
    }
    updateInboundQueue(sourceItemId?: string, remoteObjectId?: string, remoteSystemId?: string, processEvent?: string, operation?: string, payload?: string, scope?: string): void {
        
    }
}
