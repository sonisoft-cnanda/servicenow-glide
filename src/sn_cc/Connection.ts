import { Context } from "../imports/Context";
import { Function } from "../imports/Function";
import { StandardCredential } from "./StandardCredential";

export class Connection {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    getAttribute(name?: string): string {
        return "";
    }
    getConnectionRetries(): number {
        return 0;
    }
    getConnectionTimeout(): number {
        return 0;
    }
    getCredential(): StandardCredential {
        return null as any;
    }
    getCredentialAttribute(name?: string): string {
        return "";
    }
    getDataMap(): Record<any, any> {
        return {} as any;
    }
    getExtendedAttributes(): Record<any, any> {
        return {} as any;
    }
    getHost(): string {
        return "";
    }
    getName(): string {
        return "";
    }
    getPort(): number {
        return 0;
    }
    getProtocol(): string {
        return "";
    }
}
