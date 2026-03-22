import { GlideRecord } from "./GlideRecord";

export class GlideAppInstallValidationHelper {
    constructor() {  }
    getMessage(): string {
        return "";
    }
    shouldInstallOrUpgrade(storeApp: GlideRecord, version: string, isReinstall: boolean): boolean {
        return false;
    }
    shouldInstallOrUpgradeCustomization(app: GlideRecord, version: string, isReinstall: boolean): boolean {
        return false;
    }
    shouldInstallOrUpgradeStoreApp(app: GlideRecord, version: string, isReinstall: boolean): boolean {
        return false;
    }
}
