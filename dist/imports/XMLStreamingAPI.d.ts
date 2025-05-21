import { Context } from './Context.js';
import { Function } from './Function.js';
import { Collection } from './Collection.js';
export declare class XMLStreamingAPI {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean);
    close(): void;
    disablePrettyPrint(): XMLStreamingAPI;
    enablePrettyPrint(): XMLStreamingAPI;
    endDocument(): XMLStreamingAPI;
    endElement(): XMLStreamingAPI;
    getAttachmentId(): string;
    getXMLString(): string;
    startDocument(rootElement?: any, namespaceDefinitionMap?: Record<any, any>): XMLStreamingAPI;
    startElement(name?: string, namespaceMap?: Record<any, any>, attributeMap?: Record<any, any>, prefix?: any): XMLStreamingAPI;
    writeArray(elementName?: string, data?: Collection, wrappingElement?: any): XMLStreamingAPI;
    writeAttribute(name?: string, value?: string): XMLStreamingAPI;
    writeAttributes(attributeMap?: Record<any, any>): XMLStreamingAPI;
    writeCData(data?: string): XMLStreamingAPI;
    writeCDataElement(name?: string, data?: string, prefix?: any): XMLStreamingAPI;
    writeCharacters(text?: string): XMLStreamingAPI;
    writeComment(comment?: string): XMLStreamingAPI;
    writeDtd(dtd?: string): XMLStreamingAPI;
    writeNamespace(prefix?: string, namespaceURI?: string): XMLStreamingAPI;
    writeNamespaces(namespaceMap?: Record<any, any>): XMLStreamingAPI;
    writeTextElement(name?: string, text?: string, prefix?: any): XMLStreamingAPI;
}
//# sourceMappingURL=XMLStreamingAPI.d.ts.map