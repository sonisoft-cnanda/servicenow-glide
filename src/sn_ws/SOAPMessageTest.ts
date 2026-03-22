import { Context } from "../imports/Context";
import { Function } from "../imports/Function";
import { GlideRecord } from "../types/GlideRecord";

export class SOAPMessageTest {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    getVariables(soapMessageName?: string, soapMessageFunctionName?: string, scopeID?: string): Array<string> {
        return [];
    }
    test(soapMsgFunctionRecord?: GlideRecord, requestEnvelop?: string): GlideRecord {
        return null as any;
    }
}
