import { GlideRecord } from './GlideRecord.js';
export declare class Messaging {
    attachIcon(messagingApplicationId?: string): void;
    processInbound(messagingInboundId?: string): void;
    send(messagingApplication?: GlideRecord, recipient?: string, messagingContent?: GlideRecord, target?: GlideRecord): void;
    updateRateLimit(context?: string, retryAfterSeconds?: number): void;
}
//# sourceMappingURL=Messaging.d.ts.map