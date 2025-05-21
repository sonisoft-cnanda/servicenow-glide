"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XMLDocument2 = void 0;
const XMLNode_1 = require("./XMLNode.js");
class XMLDocument2 {
    constructor() { }
    createElement(name) {
        return new XMLNode_1.XMLNode();
    }
    createElementWithTextValue(name, value) {
        return new XMLNode_1.XMLNode();
    }
    getDocumentElement() {
        return new XMLNode_1.XMLNode();
    }
    getFirstNode(xpath) {
        return new XMLNode_1.XMLNode();
    }
    getNextNode(prev) {
        return new XMLNode_1.XMLNode();
    }
    getNode(xpath) {
        return new XMLNode_1.XMLNode();
    }
    getNodeText(xpath) {
        return "";
    }
    isValid() {
        return false;
    }
    parseXML(xmlDoc) {
        return false;
    }
    setCurrentElement(element) {
    }
    setEnableCDATAReporting(enableCDATAReporting) {
    }
    setNamespaceAware(nsAware) {
    }
    toString() {
        return "";
    }
}
exports.XMLDocument2 = XMLDocument2;
//# sourceMappingURL=XMLDocument2.js.map