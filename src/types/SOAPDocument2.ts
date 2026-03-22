import { XMLNode } from "./XMLNode";

export class SOAPDocument2 {
    constructor(bodyElementName?: string, xmlns?: string) {  }
    createBodyElement(name?: string, value?: string, attrName?: string, attrValue?: string): XMLNode {
        return null as any;
    }
    createElement(parent?: XMLNode, name?: string, value?: string): XMLNode {
        return null as any;
    }
    createHeaderElement(name?: string, value?: string, attrName?: string, attrValue?: string): XMLNode {
        return null as any;
    }
    getBody(): XMLNode {
        return null as any;
    }
    getBodyText(): string {
        return "";
    }
    setAttribute(el?: XMLNode, name?: string, value?: string): void {
        
    }
    toString(): string {
        return "";
    }
}
