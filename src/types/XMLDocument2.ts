import { XMLNode } from '../imports/XMLNode';

export class XMLDocument2 {
    constructor() {}
    createElement(name?: string): XMLNode {
        return new XMLNode();
    }
    createElementWithTextValue(name?: string, value?: string): XMLNode {
        return new XMLNode();
    }
    getDocumentElement(): XMLNode {
        return new XMLNode();
    }
    getFirstNode(xpath?: string): XMLNode {
        return new XMLNode();
    }
    getNextNode(prev?: any): XMLNode {
        return new XMLNode();
    }
    getNode(xpath?: string): XMLNode {
        return new XMLNode();
    }
    getNodeText(xpath?: string): string {
        return "";
    }
    isValid(): boolean {
        return false;
    }
    parseXML(xmlDoc?: string): boolean {
        return false;
    }
    setCurrentElement(element?: any): void {
        
    }
    setEnableCDATAReporting(enableCDATAReporting?: boolean): void {
        
    }
    setNamespaceAware(nsAware?: boolean): void {
        
    }
    toString(): string {
        return "";
    }
}
