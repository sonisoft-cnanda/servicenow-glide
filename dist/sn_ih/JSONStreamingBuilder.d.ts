import { JSONStreamingAPI } from '../imports/JSONStreamingAPI.js';
import { Context } from '../imports/Context.js';
import { Function } from '../imports/Function.js';
import { GlideDateTime } from '../imports/GlideDateTime.js';
export declare class JSONStreamingBuilder {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean);
    build(): JSONStreamingAPI;
    expiresAt(expireAt?: GlideDateTime): JSONStreamingBuilder;
    withAttachment(): JSONStreamingBuilder;
}
//# sourceMappingURL=JSONStreamingBuilder.d.ts.map