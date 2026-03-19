import { Context } from './Context';
import { Function } from './Function';
import { GlideRecord } from './GlideRecord';

export class PreferenceDestination {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {}
    getChannel(): GlideRecord {
        return new GlideRecord("");
    }
    getDeliverTo(): string {
        return "";
    }
    getDestinationType(): GlideRecord {
        return new GlideRecord("");
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
