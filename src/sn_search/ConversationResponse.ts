import { Context } from "../imports/Context";
import { Function } from "../imports/Function";
import { Agentic } from "./Agentic";
import { InputMatch } from "./InputMatch";
import { SearchResponse } from "./SearchResponse";
import { SmallTalk } from "./SmallTalk";

export class ConversationResponse {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    getAgentic(): Agentic {
        return null as any;
    }
    getContext(): Record<any, any> {
        return {} as any;
    }
    getInputMatch(): InputMatch {
        return null as any;
    }
    getMessage(): string {
        return "";
    }
    getResponseType(): string {
        return "";
    }
    getSearchResponse(): SearchResponse {
        return null as any;
    }
    getSmallTalk(): SmallTalk {
        return null as any;
    }
    isAwaitingResponse(): boolean {
        return false;
    }
    isSuccess(): boolean {
        return false;
    }
}
