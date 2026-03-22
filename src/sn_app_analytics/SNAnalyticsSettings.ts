import { Context } from '../imports/Context'
import { Function } from '../imports/Function'

export class SNAnalyticsSettings {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    getApiAuth(): string {
        return "";
    }
    getApiKey(): string {
        return "";
    }
    getAppName(): string {
        return "";
    }
    getAppType(): string {
        return "";
    }
    getChannelType(): string {
        return "";
    }
    getEndpointURL(): string {
        return "";
    }
    getInstanceID(): string {
        return "";
    }
    getSettings(): Record<any, any> {
        return {} as any;
    }
    isEnabled(): boolean {
        return false;
    }
    isUnauthenticatedUserTrackingEnabled(): boolean {
        return false;
    }
}
