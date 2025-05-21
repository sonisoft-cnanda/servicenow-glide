import { XMLNodeIterator } from '../imports/XMLNodeIterator.js';
export declare class XMLNode {
    constructor();
    appendChild(newChild?: any): void;
    getAttribute(attribute?: string): string;
    getAttributes(): Record<any, any>;
    getChildNodeIterator(): XMLNodeIterator;
    getFirstChild(): XMLNode;
    getLastChild(): XMLNode;
    getNodeName(): string;
    getNodeValue(): string;
    getTextContent(): string;
    hasAttribute(attribute?: string): boolean;
    isCDATANode(): boolean;
    setAttribute(attribute?: string, value?: string): void;
    toString(): string;
}
//# sourceMappingURL=XMLNode.d.ts.map