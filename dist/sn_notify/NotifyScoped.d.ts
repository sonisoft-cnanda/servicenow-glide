import { Context } from '../imports/Context.js';
import { Scriptable } from '../imports/Scriptable.js';
import { Function } from '../imports/Function.js';
import { GlideRecord } from '../imports/GlideRecord.js';
export declare class NotifyScoped {
    constructor(cx?: Context, args?: any[], funObj?: Function, inNewExpr?: boolean);
    call(cx?: Context, scope?: Scriptable, args?: any[], funObj?: Function): void;
    conferenceCall(context?: Context, scope?: Scriptable, args?: any[], funObj?: Function): GlideRecord;
    dequeueCall(context?: Context, scope?: Scriptable, args?: any[], funObj?: Function): void;
    forwardCall(context?: Context, scope?: Scriptable, args?: any[], funObj?: Function): void;
    getAvailableClients(context?: Context, scope?: Scriptable, args?: any[], funObj?: Function): GlideRecord;
    getParentCallID(context?: Context, scope?: Scriptable, args?: any[], funObj?: Function): string;
    getPhoneNumbers(cx?: Context, scope?: Scriptable, args?: any[], funObj?: Function): Array<any>;
    getShortCodes(cx?: Context, scope?: Scriptable, args?: any[], funObj?: Function): Array<any>;
    getTokenTTL(owner?: string): string;
    getTokens(context?: Context, scope?: Scriptable, args?: any[], funObj?: Function): string;
    hasCapability(cx?: Context, scope?: Scriptable, args?: any[], funObj?: Function): boolean;
    kick(context?: Context, scope?: Scriptable, args?: any[], funObj?: Function): void;
    modifyCall(context?: Context, scope?: Scriptable, args?: any[], funObj?: Function): void;
    mute(context?: Context, scope?: Scriptable, args?: any[], funObj?: Function): void;
    queueCall(context?: Context, scope?: Scriptable, args?: any[], funObj?: Function): void;
    sendBulkSMS(cx?: Context, scope?: Scriptable, args?: any[], funObj?: Function): string;
    sendSMS(cx?: Context, scope?: Scriptable, args?: any[], funObj?: Function): string;
    unmute(context?: Context, scope?: Scriptable, args?: any[], funObj?: Function): void;
}
//# sourceMappingURL=NotifyScoped.d.ts.map