import { Context } from './Context';
import { Function } from './Function';
import { Collection } from './Collection';

export class XMLStreamingAPI {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {}
    close(): void {
        
    }
    disablePrettyPrint(): XMLStreamingAPI {
        return new XMLStreamingAPI();
    }
    enablePrettyPrint(): XMLStreamingAPI {
        return new XMLStreamingAPI();
    }
    endDocument(): XMLStreamingAPI {
        return new XMLStreamingAPI();
    }
    endElement(): XMLStreamingAPI {
        return new XMLStreamingAPI();
    }
    getAttachmentId(): string {
        return "";
    }
    getXMLString(): string {
        return "";
    }
    startDocument(rootElement?: any, namespaceDefinitionMap?: Record<any, any>): XMLStreamingAPI {
        return new XMLStreamingAPI();
    }
    startElement(name?: string, namespaceMap?: Record<any, any>, attributeMap?: Record<any, any>, prefix?: any): XMLStreamingAPI {
        return new XMLStreamingAPI();
    }
    writeArray(elementName?: string, data?: Collection, wrappingElement?: any): XMLStreamingAPI {
        return new XMLStreamingAPI();
    }
    writeAttribute(name?: string, value?: string): XMLStreamingAPI {
        return new XMLStreamingAPI();
    }
    writeAttributes(attributeMap?: Record<any, any>): XMLStreamingAPI {
        return new XMLStreamingAPI();
    }
    writeCData(data?: string): XMLStreamingAPI {
        return new XMLStreamingAPI();
    }
    writeCDataElement(name?: string, data?: string, prefix?: any): XMLStreamingAPI {
        return new XMLStreamingAPI();
    }
    writeCharacters(text?: string): XMLStreamingAPI {
        return new XMLStreamingAPI();
    }
    writeComment(comment?: string): XMLStreamingAPI {
        return new XMLStreamingAPI();
    }
    writeDtd(dtd?: string): XMLStreamingAPI {
        return new XMLStreamingAPI();
    }
    writeNamespace(prefix?: string, namespaceURI?: string): XMLStreamingAPI {
        return new XMLStreamingAPI();
    }
    writeNamespaces(namespaceMap?: Record<any, any>): XMLStreamingAPI {
        return new XMLStreamingAPI();
    }
    writeTextElement(name?: string, text?: string, prefix?: any): XMLStreamingAPI {
        return new XMLStreamingAPI();
    }
}
