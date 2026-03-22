import { Context } from '../imports/Context'
import { Function } from '../imports/Function'

export class VAFeedbackObject {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    static recordCopyAction(messageId?: string): Record<any, any> {
        return {} as any;
    }
    static sendFeedback(inputFeedbackPayload?: Record<any, any>): Record<any, any> {
        return {} as any;
    }
}
