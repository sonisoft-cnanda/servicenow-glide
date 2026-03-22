import { Context } from "../imports/Context";
import { KmfModuleAccessPolicyBuilder } from "./KmfModuleAccessPolicyBuilder";
import { KmfModuleBuilder } from "./KmfModuleBuilder";

export class KmfSecureModuleAPI {
    constructor(cx: Context, args: any[], ctorObj: Function, inNewExpr: boolean) {  }
    static createAccessPolicyBuilder(): KmfModuleAccessPolicyBuilder {
        return null as any;
    }
    static createModuleBuilder(): KmfModuleBuilder {
        return null as any;
    }
}
