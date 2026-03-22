import { Context } from '../imports/Context'
import { Function } from '../imports/Function'

export class RESTResponseV2 {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    getAllHeaders(): Array<any> {
        return [];
    }
    getBody(): string {
        return "";
    }
    getCookies(): any {
        return null as any;
    }
    getErrorCode(): number {
        return 0;
    }
    getErrorMessage(): string {
        return "";
    }
    getHeader(name?: string): string {
        return "";
    }
    getHeaders(): Record<any, any> {
        return {} as any;
    }
    getQueryString(): string {
        return "";
    }
    getResponseAttachmentSysid(): string {
        return "";
    }
    getStatusCode(): number {
        return 0;
    }
    haveError(): boolean {
        return false;
    }
    waitForResponse(timeoutSecs?: number): void {
        
    }
}
