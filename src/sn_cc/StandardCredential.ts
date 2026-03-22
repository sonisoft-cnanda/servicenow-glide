import { Context } from '../imports/Context'
import { Function } from '../imports/Function'

export class StandardCredential {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    getAppliesTo(): string {
        return "";
    }
    getAttribute(name?: string): string {
        return "";
    }
    getAttributeByName(name?: string): string {
        return "";
    }
    getAuthKey(): string {
        return "";
    }
    getAuthProtocol(): string {
        return "";
    }
    getClassification(): string {
        return "";
    }
    getCredentialId(): string {
        return "";
    }
    getHighSecurityId(): string {
        return "";
    }
    getID(): string {
        return "";
    }
    getKey(): string {
        return "";
    }
    getMIDList(): Array<any> {
        return [];
    }
    getName(): string {
        return "";
    }
    getOrder(): string {
        return "";
    }
    getPassPhrase(): string {
        return "";
    }
    getPassword(): string {
        return "";
    }
    getPrivKey(): string {
        return "";
    }
    getPrivProtocol(): string {
        return "";
    }
    getTag(): string {
        return "";
    }
    getType(): string {
        return "";
    }
    getUsername(): string {
        return "";
    }
    hasTag(requiredTag?: string): boolean {
        return false;
    }
    isUseHighSecurity(): boolean {
        return false;
    }
}
