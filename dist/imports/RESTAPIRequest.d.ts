import { Context } from './Context.js';
import { Function } from './Function.js';
export declare class RESTAPIRequest {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean);
    getHeader(headerName?: string): string;
    getRequestedQueryCategory(): string;
    getSupportedResponseContentTypes(): any;
}
//# sourceMappingURL=RESTAPIRequest.d.ts.map