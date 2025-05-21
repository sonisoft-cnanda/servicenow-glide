import { JSONStreamingAPI } from './JSONStreamingAPI';
import { Context } from './Context';
import { Function } from './Function';
import { GlideDateTime } from './GlideDateTime';

export class JSONStreamingBuilder {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {}
    build(): JSONStreamingAPI {
        return new JSONStreamingAPI();
    }
    expiresAt(expireAt?: GlideDateTime): JSONStreamingBuilder {
        return new JSONStreamingBuilder();
    }
    withAttachment(): JSONStreamingBuilder {
        return new JSONStreamingBuilder();
    }
}
