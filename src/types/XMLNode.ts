import { XMLNodeIterator } from "./XMLNodeIterator";

export class XMLNode {
    constructor() {  }
    appendChild(newChild?: any): void {
        
    }
    getAttribute(attribute?: string): string {
        return "";
    }
    getAttributes(): Map<string, string> {
        return {} as any;
    }
    getChildNodeIterator(): XMLNodeIterator {
        return null as any;
    }
    getFirstChild(): XMLNode {
        return null as any;
    }
    getLastChild(): XMLNode {
        return null as any;
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
