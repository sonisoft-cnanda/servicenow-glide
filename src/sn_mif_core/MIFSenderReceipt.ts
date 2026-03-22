import { Context } from '../imports/Context'
import { Function } from '../imports/Function'

export class MIFSenderReceipt {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    getFullMessageType(): string {
        return "";
    }
    getInfo(): string {
        return "";
    }
    getInstanceName(): string {
        return "";
    }
    getStatus(): string {
        return "";
    }
    toMap(): Record<any, any> {
        return {} as any;
    }
}
