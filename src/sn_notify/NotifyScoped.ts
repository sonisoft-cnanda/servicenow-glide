import { Context } from '../imports/Context';
import { Scriptable } from '../imports/Scriptable';
import { Function } from '../imports/Function';
import { GlideRecord } from '../imports/GlideRecord';

export class NotifyScoped {
    constructor(cx?: Context, args?: any[], funObj?: Function, inNewExpr?: boolean) {}
    call(cx?: Context, scope?: Scriptable, args?: any[], funObj?: Function): void {
        
    }
    conferenceCall(context?: Context, scope?: Scriptable, args?: any[], funObj?: Function): GlideRecord {
        return new GlideRecord("");
    }
    dequeueCall(context?: Context, scope?: Scriptable, args?: any[], funObj?: Function): void {
        
    }
    forwardCall(context?: Context, scope?: Scriptable, args?: any[], funObj?: Function): void {
        
    }
    getAvailableClients(context?: Context, scope?: Scriptable, args?: any[], funObj?: Function): GlideRecord {
        return new GlideRecord("");
    }
    getParentCallID(context?: Context, scope?: Scriptable, args?: any[], funObj?: Function): string {
        return "";
    }
    getPhoneNumbers(cx?: Context, scope?: Scriptable, args?: any[], funObj?: Function): Array<any> {
        return new Array();
    }
    getShortCodes(cx?: Context, scope?: Scriptable, args?: any[], funObj?: Function): Array<any> {
        return new Array();
    }
    getTokenTTL(owner?: string): string {
        return "";
    }
    getTokens(context?: Context, scope?: Scriptable, args?: any[], funObj?: Function): string {
        return "";
    }
    hasCapability(cx?: Context, scope?: Scriptable, args?: any[], funObj?: Function): boolean {
        return false;
    }
    kick(context?: Context, scope?: Scriptable, args?: any[], funObj?: Function): void {
        
    }
    modifyCall(context?: Context, scope?: Scriptable, args?: any[], funObj?: Function): void {
        
    }
    mute(context?: Context, scope?: Scriptable, args?: any[], funObj?: Function): void {
        
    }
    queueCall(context?: Context, scope?: Scriptable, args?: any[], funObj?: Function): void {
        
    }
    sendBulkSMS(cx?: Context, scope?: Scriptable, args?: any[], funObj?: Function): string {
        return "";
    }
    sendSMS(cx?: Context, scope?: Scriptable, args?: any[], funObj?: Function): string {
        return "";
    }
    unmute(context?: Context, scope?: Scriptable, args?: any[], funObj?: Function): void {
        
    }
}
