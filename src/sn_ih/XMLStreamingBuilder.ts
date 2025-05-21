import { XMLStreamingAPI } from '../imports/XMLStreamingAPI';
import { Context } from '../imports/Context';
import { Function } from '../imports/Function';
import { GlideDateTime } from '../imports/GlideDateTime';

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
