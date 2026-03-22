import { Context } from "../imports/Context";
import { Function } from "../imports/Function";
import { StreamingJSONBuilder } from "./StreamingJSONBuilder";
import { GlideDateTime } from "../types/GlideDateTime";

export class JSONStreamingBuilder {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    build(): StreamingJSONBuilder {
        return null as any;
    }
    expiresAt(expireAt?: GlideDateTime): JSONStreamingBuilder {
        return null as any;
    }
    withAttachment(): JSONStreamingBuilder {
        return null as any;
    }
}
