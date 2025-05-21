"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XMLStreamingBuilder = void 0;
const XMLStreamingAPI_1 = require("./XMLStreamingAPI.js");
class XMLStreamingBuilder {
    constructor(cx, args, ctorObj, inNewExpr) { }
    build() {
        return new XMLStreamingAPI_1.XMLStreamingAPI();
    }
    expiresAt(expireAt) {
        return new XMLStreamingBuilder();
    }
    withAttachment() {
        return new XMLStreamingBuilder();
    }
}
exports.XMLStreamingBuilder = XMLStreamingBuilder;
//# sourceMappingURL=XMLStreamingBuilder.js.map