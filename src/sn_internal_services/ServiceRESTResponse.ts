import { Context } from "../imports/Context";
import { GlideScriptableInputStream } from "../types/GlideScriptableInputStream";

export class ServiceRESTResponse {
    constructor(cx: Context, args: any[], ctorObj: Function, inNewExpr: boolean) {  }
    getBody(): string {
        return "";
    }
    getBodyStream(): GlideScriptableInputStream {
        return null as any;
    }
    getErrorCode(): number {
        return 0;
    }
    getErrorMessage(): string {
        return "";
    }
    getErrorResponseBody(): string {
        return "";
    }
    getHeader(name: string): string {
        return "";
    }
    getStatusCode(): number {
        return 0;
    }
}
