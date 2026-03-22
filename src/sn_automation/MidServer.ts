import { Context } from "../imports/Context";
import { Function } from "../imports/Function";
import { Scriptable } from "../imports/Scriptable";

export class MidServer {
    capabilities: Scriptable = null as any;
    applications: Scriptable = null as any;
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    getName(): Scriptable {
        return null as any;
    }
    name(name?: string): void {
        
    }
    sysId(sysId?: string): void {
        
    }
}
