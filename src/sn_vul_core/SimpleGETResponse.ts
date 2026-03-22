import { Context } from '../imports/Context'
import { Function } from '../imports/Function'

export class SimpleGETResponse {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    getBody(): string {
        return "";
    }
    getStatus(): number {
        return 0;
    }
    isError(): boolean {
        return false;
    }
}
