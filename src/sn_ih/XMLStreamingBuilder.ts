import { Context } from "../imports/Context";
import { Function } from "../imports/Function";
import { StreamingXMLBuilder } from "./StreamingXMLBuilder";
import { GlideDateTime } from "../types/GlideDateTime";

export class XMLStreamingBuilder {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    build(): StreamingXMLBuilder {
        return null as any;
    }
    expiresAt(expireAt?: GlideDateTime): XMLStreamingBuilder {
        return null as any;
    }
    withAttachment(): XMLStreamingBuilder {
        return null as any;
    }
}
