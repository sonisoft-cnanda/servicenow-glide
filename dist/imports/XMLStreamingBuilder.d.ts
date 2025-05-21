import { XMLStreamingAPI } from './XMLStreamingAPI.js';
import { Context } from './Context.js';
import { Function } from './Function.js';
import { GlideDateTime } from './GlideDateTime.js';
export declare class XMLStreamingBuilder {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean);
    build(): XMLStreamingAPI;
    expiresAt(expireAt?: GlideDateTime): XMLStreamingBuilder;
    withAttachment(): XMLStreamingBuilder;
}
//# sourceMappingURL=XMLStreamingBuilder.d.ts.map