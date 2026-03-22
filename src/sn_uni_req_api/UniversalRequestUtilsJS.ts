import { Context } from '../imports/Context'
import { Function } from '../imports/Function'
import { Scriptable } from '../imports/Scriptable'

export class UniversalRequestUtilsJS {
    constructor(cx?: Context, args?: any[], funObj?: Function, inNewExpr?: boolean) {  }
    static attachPrimaryTicket(cx?: Context, thisObj?: Scriptable, args?: any[], funObj?: Function): boolean {
        return false;
    }
    static closeAssociatedTasks(cx?: Context, thisObj?: Scriptable, args?: any[], funObj?: Function): boolean {
        return false;
    }
    static createUniversalRequest(cx?: Context, thisObj?: Scriptable, args?: any[], funObj?: Function): string {
        return "";
    }
    static routeToDepartment(cx?: Context, thisObj?: Scriptable, args?: any[], funObj?: Function): boolean {
        return false;
    }
    static routeToUniversalRequest(cx?: Context, thisObj?: Scriptable, args?: any[], funObj?: Function): boolean {
        return false;
    }
    static transferPrimaryTicket(cx?: Context, thisObj?: Scriptable, args?: any[], funObj?: Function): boolean {
        return false;
    }
}
