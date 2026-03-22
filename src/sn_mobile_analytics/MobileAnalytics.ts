import { Context } from '../imports/Context'
import { Function } from '../imports/Function'

export class MobileAnalytics {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    static createSettingsForNativeClient(nativeClientSysId?: string, nativeClientType?: string): void {
        
    }
    static createSettingsForNewNativeClients(): void {
        
    }
    static isEnabled(): boolean {
        return false;
    }
    static settingsExistForNativeClient(nativeClientSysId?: string): boolean {
        return false;
    }
}
