"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XMLNode = void 0;
const XMLNodeIterator_1 = require("../imports/XMLNodeIterator.js");
class XMLNode {
    constructor() { }
    appendChild(newChild) {
    }
    getAttribute(attribute) {
        return "";
    }
    getAttributes() {
        return {};
    }
    getChildNodeIterator() {
        return new XMLNodeIterator_1.XMLNodeIterator();
    }
    getFirstChild() {
        return new XMLNode();
    }
    getLastChild() {
        return new XMLNode();
    }
    getNodeName() {
        return "";
    }
    getNodeValue() {
        return "";
    }
    getTextContent() {
        return "";
    }
    hasAttribute(attribute) {
        return false;
    }
    isCDATANode() {
        return false;
    }
    setAttribute(attribute, value) {
    }
    toString() {
        return "";
    }
}
exports.XMLNode = XMLNode;
//# sourceMappingURL=XMLNode.js.map