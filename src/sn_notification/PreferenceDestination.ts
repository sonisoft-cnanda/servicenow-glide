import { Context } from "../imports/Context";
import { Function } from "../imports/Function";
import { GlideRecord } from "../types/GlideRecord";

export class PreferenceDestination {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    getChannel(): GlideRecord {
        return null as any;
    }
    getDeliverTo(): string {
        return "";
    }
    getDestinationType(): GlideRecord {
        return null as any;
    }
    isActive(notificationObj?: any): boolean {
        return false;
    }
    isOverridden(notificationObj?: any): boolean {
        return false;
    }
    setActive(arg1?: any, arg2?: any): void {
        
    }
}
