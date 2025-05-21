import { Context } from './Context.js';
import { Function } from './Function.js';
import { GlideRecord } from './GlideRecord.js';
export declare class PreferenceDestination {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean);
    getChannel(): GlideRecord;
    getDeliverTo(): string;
    getDestinationType(): GlideRecord;
    isActive(notificationObj?: any): boolean;
    isOverridden(notificationObj?: any): boolean;
    setActive(arg1?: any, arg2?: any): void;
}
//# sourceMappingURL=PreferenceDestination.d.ts.map