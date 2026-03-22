import { NativeArray } from '../imports/NativeArray'
import { Scriptable } from '../imports/Scriptable'

export class AutomationAPI {
    constructor() {  }
    encrypt(value?: any): Scriptable {
        return null as any;
    }
    getNodeLogger(loggerName?: any): Scriptable {
        return null as any;
    }
    isEncrypted(value?: any): Scriptable {
        return null as any;
    }
    select(application?: Scriptable, targets?: NativeArray, capabilities?: NativeArray, context?: Scriptable): Scriptable {
        return null as any;
    }
    selectAnyDegradedOrBetterMidServer(app?: any, target?: NativeArray, capabilities?: NativeArray): Scriptable {
        return null as any;
    }
    selectAnyDegradedOrBetterMidServerFromCluster(app?: any, target?: NativeArray, capabilities?: NativeArray, clusterSysid?: string): Scriptable {
        return null as any;
    }
    selectAnyDegradedOrBetterMidServerFromClusterEx(app?: any, clusterSysid?: string): Scriptable {
        return null as any;
    }
    selectAnyMidServer(app?: any, target?: NativeArray, capabilities?: NativeArray): Scriptable {
        return null as any;
    }
    selectMid(application?: Scriptable, targets?: NativeArray, capabilities?: NativeArray, context?: Scriptable): Scriptable {
        return null as any;
    }
    selectUpMidServers(app?: any, target?: NativeArray, capabilities?: NativeArray): Scriptable {
        return null as any;
    }
}
