import { XMLNodeIterator } from '../imports/XMLNodeIterator';

export class XMLNode {
    constructor() {}
    appendChild(newChild?: any): void {
        
    }
    getAttribute(attribute?: string): string {
        return "";
    }
    getAttributes(): Record<any, any> {
        return {};
    }
    getChildNodeIterator(): XMLNodeIterator {
        return new XMLNodeIterator();
    }
    getFirstChild(): XMLNode {
        return new XMLNode();
    }
    getLastChild(): XMLNode {
        return new XMLNode();
    }
    getNodeName(): string {
        return "";
    }
    getNodeValue(): string {
        return "";
    }
    getTextContent(): string {
        return "";
    }
    hasAttribute(attribute?: string): boolean {
        return false;
    }
    isCDATANode(): boolean {
        return false;
    }
    setAttribute(attribute?: string, value?: string): void {
        
    }
    toString(): string {
        return "";
    }
}
