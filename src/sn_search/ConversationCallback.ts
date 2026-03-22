import { Context } from '../imports/Context'
import { Function } from '../imports/Function'

export class ConversationCallback {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    getCallbackId(): string {
        return "";
    }
    getCallbackName(): string {
        return "";
    }
    getCallbackType(): string {
        return "";
    }
}
