import { Context } from '../imports/Context'
import { Function } from '../imports/Function'

export class LinkValue {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    getAction(): string {
        return "";
    }
    getReceivedCallback(): boolean {
        return false;
    }
    setAction(action?: string): void {
        
    }
    setReceivedCallback(value?: boolean): void {
        
    }
}
