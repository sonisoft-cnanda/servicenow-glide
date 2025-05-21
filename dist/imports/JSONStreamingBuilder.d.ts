import { JSONStreamingAPI } from './JSONStreamingAPI.js';
import { Context } from './Context.js';
import { Function } from './Function.js';
import { GlideDateTime } from './GlideDateTime.js';
export declare class JSONStreamingBuilder {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean);
    build(): JSONStreamingAPI;
    expiresAt(expireAt?: GlideDateTime): JSONStreamingBuilder;
    withAttachment(): JSONStreamingBuilder;
}
//# sourceMappingURL=JSONStreamingBuilder.d.ts.map