import { XMLStreamingAPI } from './XMLStreamingAPI';
import { Context } from './Context';
import { Function } from './Function';
import { GlideDateTime } from './GlideDateTime';

export class XMLStreamingBuilder {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {}
    build(): XMLStreamingAPI {
        return new XMLStreamingAPI();
    }
    expiresAt(expireAt?: GlideDateTime): XMLStreamingBuilder {
        return new XMLStreamingBuilder();
    }
    withAttachment(): XMLStreamingBuilder {
        return new XMLStreamingBuilder();
    }
}
