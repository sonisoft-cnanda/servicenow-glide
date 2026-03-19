import { Context } from '../imports/Context';
import { Function } from '../imports/Function';
import { RESTAPIResponseStream } from '../imports/RESTAPIResponseStream';
import { ScriptableObject } from '../imports/ScriptableObject';
import { ScriptableServiceError } from '../imports/ScriptableServiceError';

export class RESTAPIResponse {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {}
    getStreamWriter(): RESTAPIResponseStream {
        return new RESTAPIResponseStream();
    }
    setBody(body?: ScriptableObject): void {
        
    }
    setContentType(contentType?: string): void {
        
    }
    setError(error?: ScriptableServiceError): void {
        
    }
    setHeader(name?: string, value?: string): void {
        
    }
    setHeaders(headers?: Record<any, any>): void {
        
    }
    setLocation(locationValue?: string): void {
        
    }
    setStatus(code?: number): void {
        
    }
}
