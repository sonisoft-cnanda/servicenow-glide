import { Context } from './Context';
import { Function } from './Function';
import { SOAPResponseV2 } from './SOAPResponseV2';

export class SOAPMessageV2 {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {}
    execute(): SOAPResponseV2 {
        return new SOAPResponseV2();
    }
    executeAsync(): SOAPResponseV2 {
        return new SOAPResponseV2();
    }
    getEndpoint(): string {
        return "";
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
    setAuthenticationProfile(type?: string, profileName?: string): void {
        
    }
    setBasicAuth(userName?: string, password?: string): void {
        
    }
    setEccCorrelator(correlator?: string): void {
        
    }
    setEccParameter(parameterName?: string, value?: string): void {
        
    }
    setEndpoint(endpoint?: string): void {
        
    }
    setHttpTimeout(timeoutMs?: number): void {
        
    }
    setLogLevel(logLevel?: string): void {
        
    }
    setMIDServer(midServerName?: string): void {
        
    }
    setMutualAuth(mutualAuthProtocol?: string): void {
        
    }
    setRequestBody(requestBody?: string): void {
        
    }
    setRequestHeader(headerName?: string, headerValue?: string): void {
        
    }
    setSOAPAction(soapAction?: string): void {
        
    }
    setStringParameter(parameterName?: string, value?: string): void {
        
    }
    setStringParameterNoEscape(parameterName?: string, value?: string): void {
        
    }
    setWSSecurity(keystoreId?: string, keystoreAlias?: string, keystorePassword?: string, certficateId?: string): void {
        
    }
    setWSSecurityUsernameToken(username?: string, password?: string): void {
        
    }
    setWSSecurityX509Token(keystoreId?: string, keystoreAlias?: string, keystorePassword?: string, certficateId?: string): void {
        
    }
}
