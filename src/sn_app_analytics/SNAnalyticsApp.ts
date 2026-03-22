import { Context } from '../imports/Context'
import { Function } from '../imports/Function'

export class SNAnalyticsApp {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    getApp(): Record<any, any> {
        return {} as any;
    }
    getAppName(): string {
        return "";
    }
    getAppSysId(): string {
        return "";
    }
    getChannelType(): string {
        return "";
    }
    getTableName(): string {
        return "";
    }
    isEnabled(): boolean {
        return false;
    }
    isUnauthenticatedUserTrackingEnabled(): boolean {
        return false;
    }
}
