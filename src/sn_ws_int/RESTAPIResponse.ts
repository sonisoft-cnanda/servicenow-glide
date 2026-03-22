import { Context } from "../imports/Context";
import { Function } from "../imports/Function";
import { ScriptableObject } from "../imports/ScriptableObject";
import { ServiceError } from "../sn_ws_err/ServiceError";
import { RESTAPIResponseStream } from "./RESTAPIResponseStream";

export class RESTAPIResponse {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    getStreamWriter(): RESTAPIResponseStream {
        return null as any;
    }
    setBody(body?: ScriptableObject): void {
        
    }
    setContentType(contentType?: string): void {
        
    }
    setError(error?: ServiceError): void {
        
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
