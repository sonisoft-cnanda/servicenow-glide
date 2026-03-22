import { ConversationResponse } from "./ConversationResponse";
import { ConversationCallback } from "./ConversationCallback";

export class ConversationOrchestrator {
    constructor() {  }
    process(userUtterance?: string, callbackScriptable?: ConversationCallback, context?: Record<any, any>): ConversationResponse {
        return null as any;
    }
}
