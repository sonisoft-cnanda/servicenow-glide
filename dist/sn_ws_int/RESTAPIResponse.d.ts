import { Context } from '../imports/Context.js';
import { Function } from '../imports/Function.js';
import { RESTAPIResponseStream } from '../imports/RESTAPIResponseStream.js';
import { ScriptableObject } from '../imports/ScriptableObject.js';
import { ScriptableServiceError } from '../imports/ScriptableServiceError.js';
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