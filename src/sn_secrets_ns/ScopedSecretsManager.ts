export class ScopedSecretsManager {
    constructor() {  }
    associateIdentityGroupsWithSG(secretGroupId?: string, identitySysIds?: Array<any>): string {
        return "";
    }
    autoAssignPriority(sysId?: string): boolean {
        return false;
    }
    autogenModule(scopeId?: string, moduleName?: string, secretType?: string): string {
        return "";
    }
    deleteSecret(sysID?: string): boolean {
        return false;
    }
    enqueueReloadCredentialsSystemCommandToMids(cryptoModuleSysId?: string, identityGroupAlias?: string): boolean {
        return false;
    }
    findPassword2SubmoduleForPackage(packageSysId?: string): string {
        return "";
    }
    isValidConceptualKeyCryptoModule(moduleSysId?: string, secretType?: string): boolean {
        return false;
    }
    isValidModuleForPackageSecretGroup(moduleSysId?: string, packageSysId?: string, secretType?: string): boolean {
        return false;
    }
    moveModuleKeysToEphemeralKeyTable(): boolean {
        return false;
    }
    retrieveSecret(secretId?: string): string {
        return "";
    }
    sendNewAgentRequestToMid(identityGroupAlias?: string, cryptoModuleSysId?: string): string {
        return "";
    }
    storeSecret(secretInClear?: string, secretGroupSysId?: string): string {
        return "";
    }
    updateSecret(sysId?: string, secretInClear?: string, secretGroupSysId?: string): boolean {
        return false;
    }
}
