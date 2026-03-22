import { Context } from '../imports/Context'
import { Function } from '../imports/Function'

export class VATracerObject {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    addTraceEvent(eventName?: string, parentEventName?: string, start?: boolean): string {
        return "";
    }
    endTraceEvent(eventName?: string, parentName?: string, logEvent?: boolean): string {
        return "";
    }
    findTraceEvent(eventName?: string, parentName?: string): string {
        return "";
    }
    startTraceEvent(eventName?: string, parentName?: string): string {
        return "";
    }
}
