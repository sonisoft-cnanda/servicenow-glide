import { Context } from "../imports/Context";
import { Function } from "../imports/Function";
import { GlideRecord } from "../types/GlideRecord";
import { Scriptable } from "../imports/Scriptable";

export class NotifyScoped {
    constructor(cx?: Context, args?: any[], funObj?: Function, inNewExpr?: boolean) {  }
    static call(cx?: Context, scope?: Scriptable, args?: any[], funObj?: Function): void {
        
    }
    static conferenceCall(context?: Context, scope?: Scriptable, args?: any[], funObj?: Function): GlideRecord {
        return null as any;
    }
    static dequeueCall(context?: Context, scope?: Scriptable, args?: any[], funObj?: Function): void {
        
    }
    static forwardCall(context?: Context, scope?: Scriptable, args?: any[], funObj?: Function): void {
        
    }
    static getAvailableClients(context?: Context, scope?: Scriptable, args?: any[], funObj?: Function): GlideRecord {
        return null as any;
    }
    static getParentCallID(context?: Context, scope?: Scriptable, args?: any[], funObj?: Function): string {
        return "";
    }
    static getPhoneNumbers(cx?: Context, scope?: Scriptable, args?: any[], funObj?: Function): Array<any> {
        return [];
    }
    static getShortCodes(cx?: Context, scope?: Scriptable, args?: any[], funObj?: Function): Array<any> {
        return [];
    }
    static getTokenTTL(owner?: string): string {
        return "";
    }
    static getTokens(context?: Context, scope?: Scriptable, args?: any[], funObj?: Function): string {
        return "";
    }
    static hasCapability(cx?: Context, scope?: Scriptable, args?: any[], funObj?: Function): boolean {
        return false;
    }
    static kick(context?: Context, scope?: Scriptable, args?: any[], funObj?: Function): void {
        
    }
    static modifyCall(context?: Context, scope?: Scriptable, args?: any[], funObj?: Function): void {
        
    }
    static mute(context?: Context, scope?: Scriptable, args?: any[], funObj?: Function): void {
        
    }
    static queueCall(context?: Context, scope?: Scriptable, args?: any[], funObj?: Function): void {
        
    }
    static sendBulkSMS(cx?: Context, scope?: Scriptable, args?: any[], funObj?: Function): string {
        return "";
    }
    static sendSMS(cx?: Context, scope?: Scriptable, args?: any[], funObj?: Function): string {
        return "";
    }
    static unmute(context?: Context, scope?: Scriptable, args?: any[], funObj?: Function): void {
        
    }
}
