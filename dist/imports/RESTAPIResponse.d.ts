import { Context } from './Context.js';
import { Function } from './Function.js';
import { RESTAPIResponseStream } from './RESTAPIResponseStream.js';
import { ScriptableObject } from './ScriptableObject.js';
import { ScriptableServiceError } from './ScriptableServiceError.js';
export declare class RESTAPIResponse {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean);
    getStreamWriter(): RESTAPIResponseStream;
    setBody(body?: ScriptableObject): void;
    setContentType(contentType?: string): void;
    setError(error?: ScriptableServiceError): void;
    setHeader(name?: string, value?: string): void;
    setHeaders(headers?: Record<any, any>): void;
    setLocation(locationValue?: string): void;
    setStatus(code?: number): void;
}
//# sourceMappingURL=RESTAPIResponse.d.ts.map