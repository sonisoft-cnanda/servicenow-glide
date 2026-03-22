import { NativeObject } from "../imports/NativeObject";

export class IdentitySecurityApi {
    constructor() {  }
    getAccessSimulatorChanges(requestJson: NativeObject): string {
        return "";
    }
    getDebugLog(requestJson: NativeObject): string {
        return "";
    }
    simulateAccess(requestJson: NativeObject): Map<string, any> {
        return {} as any;
    }
}
