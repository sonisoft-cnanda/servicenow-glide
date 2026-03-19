import { Context } from './Context';
import { Function } from './Function';
import { RESTResponseV2 } from './RESTResponseV2';

export class RESTMessageV2 {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {}
    disableForcedVariableSubstitution(): void {
        
    }
    execute(): RESTResponseV2 {
        return new RESTResponseV2();
    }
    executeAsync(): RESTResponseV2 {
        return new RESTResponseV2();
    }
    getEccTopic(): string {
        return "";
    }
    getEndpoint(): string {
        return "";
    }
    getParameters(): Record<any, any> {
        return {};
    }
    getRequestBody(): string {
        return "";
    }
    getRequestHeader(headerName?: string): string {
        return "";
    }
    getRequestHeaders(): Record<any, any> {
        return {};
    }
    getVariables(): Array<string> {
        return new Array<string>();
    }
    saveResponseBodyAsAttachment(tableName?: string, recordSysId?: string, filename?: string, encryptContext?: string): void {
        
    }
    setAuthenticationProfile(type?: string, profileId?: string): void {
        
    }
    setBasicAuth(userName?: string, userPass?: string): void {
        
    }
    setEccCorrelator(correlator?: string): void {
        
    }
    setEccParameter(name?: string, value?: string): void {
        
    }
    setEccTopic(topic?: string): void {
        
    }
    setEndpoint(endpoint?: string): void {
        
    }
    setFollowRedirect(followRedirect?: boolean): void {
        
    }
    setHttpMethod(methodName?: string): void {
        
    }
    setHttpTimeout(timeoutMs?: number): void {
        
    }
    setLogLevel(logLevel?: string): void {
        
    }
    setMIDServer(midServer?: string): void {
        
    }
    setMutualAuth(protocolName?: string): void {
        
    }
    setQueryParameter(name?: string, value?: string): void {
        
    }
    setRequestBody(content?: string): void {
        
    }
    setRequestBodyFromAttachment(attachmentSysId?: string): void {
        
    }
    setRequestHeader(name?: string, value?: string): void {
        
    }
    setRequestorProfile(requestorContext?: string, requestorId?: string): void {
        
    }
    setStringParameter(name?: string, value?: string): void {
        
    }
    setStringParameterNoEscape(name?: string, value?: string): void {
        
    }
}
