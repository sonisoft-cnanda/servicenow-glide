import { Context } from './Context';
import { Function } from './Function';
import { RESTAPIResponseStream } from './RESTAPIResponseStream';
import { ScriptableObject } from './ScriptableObject';
import { ScriptableServiceError } from './ScriptableServiceError';

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
