import { Context } from "../imports/Context";
import { NativeArray } from "../imports/NativeArray";
import { Function } from "../imports/Function";

export class TrustManager {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    getInstanceNamesManagedByMeForApp(applicationId?: string): NativeArray {
        return null as any;
    }
    getInstanceNamesTrustedByMeByOperation(operationName?: string, operationType?: string, scopeName?: string): NativeArray {
        return null as any;
    }
    getInstanceNamesTrustedByMeByVTableName(vtableName?: string): NativeArray {
        return null as any;
    }
    getInstanceNamesTrustingMeByOperation(operationName?: string, operationType?: string, scopeName?: string): NativeArray {
        return null as any;
    }
    getInstanceNamesTrustingMeByVTableName(vtableName?: string): NativeArray {
        return null as any;
    }
    isInstanceTrustedByMeByOperation(operationName?: string, operationType?: string, instanceName?: string, scopeName?: string): boolean {
        return false;
    }
    isInstanceTrustedByMeByVTableName(vtableName?: string, instanceName?: string): boolean {
        return false;
    }
    isInstanceTrustingMeByOperation(operationName?: string, operationType?: string, instanceName?: string, scopeName?: string): boolean {
        return false;
    }
    isInstanceTrustingMeByVTableName(vtableName?: string, instanceName?: string): boolean {
        return false;
    }
}
