import { Context } from './Context';
import { Function } from './Function';

export class RESTAPIRequest {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {}
    getHeader(headerName?: string): string {
        return "";
    }
    getRequestedQueryCategory(): string {
        return "";
    }
    getSupportedResponseContentTypes(): any {
        return null;
    }
}
