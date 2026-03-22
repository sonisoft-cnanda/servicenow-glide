import { Context } from "../imports/Context";
import { Function } from "../imports/Function";

type CryptoModuleState = {};
export class KmfModuleBuilder {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    create(): string {
        return "";
    }
    delete(): boolean {
        return false;
    }
    update(): boolean {
        return false;
    }
    withCryptoSpecTemplateId(cryptoSpecTemplateId?: string): KmfModuleBuilder {
        return null as any;
    }
    withDefaultModuleAccessPolicyValue(defaultModuleAccessPolicyValue?: string): KmfModuleBuilder {
        return null as any;
    }
    withDomainId(domainId?: string): KmfModuleBuilder {
        return null as any;
    }
    withExistingId(existingModuleId?: string): KmfModuleBuilder {
        return null as any;
    }
    withLifeCycleState(state?: CryptoModuleState): KmfModuleBuilder {
        return null as any;
    }
    withPackageId(packageId?: string): KmfModuleBuilder {
        return null as any;
    }
    withParentCryptoModuleId(parentCryptoModuleId?: string): KmfModuleBuilder {
        return null as any;
    }
    withScopeId(scopeId?: string): KmfModuleBuilder {
        return null as any;
    }
    withShortName(shortName?: string): KmfModuleBuilder {
        return null as any;
    }
}
