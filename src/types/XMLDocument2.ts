import { Context } from "../imports/Context";
import { XMLNode } from "./XMLNode";

export class XMLDocument2 {
    constructor(cx: Context, args: any[], ctorObj: Function, inNewExpr: boolean) {  }
    createElement(name: string): XMLNode {
        return null as any;
    }
    createElementWithTextValue(name: string, value: string): XMLNode {
        return null as any;
    }
    getDocumentElement(): XMLNode {
        return null as any;
    }
    getFirstNode(xpath: string): XMLNode {
        return null as any;
    }
    getNextNode(prev: any): XMLNode {
        return null as any;
    }
    getNode(xpath: string): XMLNode {
        return null as any;
    }
    getNodeText(xpath: string): string {
        return "";
    }
    isValid(): boolean {
        return false;
    }
    parseXML(xmlDoc: string): boolean {
        return false;
    }
    setCurrentElement(element: XMLNode): void {
        
    }
    setEnableCDATAReporting(enableCDATAReporting: boolean): void {
        
    }
    setNamespaceAware(nsAware: boolean): void {
        
    }
    toString(): string {
        return "";
    }
}
