import { XMLStreamingAPI } from '../imports/XMLStreamingAPI.js';
import { Context } from '../imports/Context.js';
import { Function } from '../imports/Function.js';
import { GlideDateTime } from '../imports/GlideDateTime.js';
export declare class XMLStreamingBuilder {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean);
    build(): XMLStreamingAPI;
    expiresAt(expireAt?: GlideDateTime): XMLStreamingBuilder;
    withAttachment(): XMLStreamingBuilder;
}
//# sourceMappingURL=XMLStreamingBuilder.d.ts.map