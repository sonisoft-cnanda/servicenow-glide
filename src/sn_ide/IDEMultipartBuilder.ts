import { Context } from "../imports/Context";
import { Function } from "../imports/Function";

export class IDEMultipartBuilder {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    addBinaryBody(name?: string, inputStream?: any): void {
        
    }
    addTextBody(name?: string, text?: string): void {
        
    }
    build(): void {
        
    }
    getBytes(): number[] {
        return [];
    }
    getContentEncoding(): string {
        return "";
    }
    getContentType(): string {
        return "";
    }
    getEntity(): any {
        return null as any;
    }
    getInputStream(): any {
        return null as any;
    }
}
