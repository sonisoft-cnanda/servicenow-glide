import { Context } from "../imports/Context";

export class StreamingXMLBuilder {
    constructor(cx: Context, args: any[], ctorObj: Function, inNewExpr: boolean) {  }
    close(): void {
        
    }
    disablePrettyPrint(): StreamingXMLBuilder {
        return null as any;
    }
    enablePrettyPrint(): StreamingXMLBuilder {
        return null as any;
    }
    endDocument(): StreamingXMLBuilder {
        return null as any;
    }
    endElement(): StreamingXMLBuilder {
        return null as any;
    }
    getAttachmentId(): string {
        return "";
    }
    getXMLString(): string {
        return "";
    }
    startDocument(rootElement: any, namespaceDefinitionMap: Map<string, string>): StreamingXMLBuilder {
        return null as any;
    }
    startElement(name: string, namespaceMap: Map<string, string>, attributeMap: Map<string, string>, prefix: any): StreamingXMLBuilder {
        return null as any;
    }
    writeArray(elementName: string, data: Array<string>, wrappingElement: any): StreamingXMLBuilder {
        return null as any;
    }
    writeAttribute(name: string, value: string): StreamingXMLBuilder {
        return null as any;
    }
    writeAttributes(attributeMap: Map<string, string>): StreamingXMLBuilder {
        return null as any;
    }
    writeCData(data: string): StreamingXMLBuilder {
        return null as any;
    }
    writeCDataElement(name: string, data: string, prefix: any): StreamingXMLBuilder {
        return null as any;
    }
    writeCharacters(text: string): StreamingXMLBuilder {
        return null as any;
    }
    writeComment(comment: string): StreamingXMLBuilder {
        return null as any;
    }
    writeDtd(dtd: string): StreamingXMLBuilder {
        return null as any;
    }
    writeNamespace(prefix: string, namespaceURI: string): StreamingXMLBuilder {
        return null as any;
    }
    writeNamespaces(namespaceMap: Map<string, string>): StreamingXMLBuilder {
        return null as any;
    }
    writeTextElement(name: string, text: string, prefix: any): StreamingXMLBuilder {
        return null as any;
    }
}
