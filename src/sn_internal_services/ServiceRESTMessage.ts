import { Context } from "../imports/Context";
import { ServiceRESTResponse } from "./ServiceRESTResponse";

export class ServiceRESTMessage {
    constructor(cx: Context, args: any[], ctorObj: Function, inNewExpr: boolean) {  }
    execute(): ServiceRESTResponse {
        return null as any;
    }
    setHttpMethod(methodName: string): void {
        
    }
    setIdentityCertificateMutualAuth(mutualAuth: boolean): void {
        
    }
    setPath(path: string): void {
        
    }
    setQueryParameter(name: string, value: string): void {
        
    }
    setRequestBody(content: string): void {
        
    }
    setRequestBodyBytes(byteArray: number[]): void {
        
    }
    setRequestEntity(entity: any): void {
        
    }
    setRequestHeader(name: string, value: string): void {
        
    }
}
