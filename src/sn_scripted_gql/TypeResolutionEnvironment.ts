import { Context } from "../imports/Context";
import { Function } from "../imports/Function";

export class TypeResolutionEnvironment {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    getArguments(): any {
        return null as any;
    }
    getObject(): any {
        return null as any;
    }
    getTypeName(): string {
        return "";
    }
    getSource(): any {
        return null as any;
    }
}
