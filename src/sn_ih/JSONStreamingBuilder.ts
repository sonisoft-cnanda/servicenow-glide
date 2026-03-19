import { JSONStreamingAPI } from '../imports/JSONStreamingAPI';
import { Context } from '../imports/Context';
import { Function } from '../imports/Function';
import { GlideDateTime } from '../imports/GlideDateTime';

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
