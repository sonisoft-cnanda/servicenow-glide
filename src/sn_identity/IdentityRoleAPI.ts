import { NativeObject } from "../imports/NativeObject";

export class IdentityRoleAPI {
    constructor() {  }
    getRoles(requestJson: NativeObject): string {
        return "";
    }
    reComputeInheritedRoleForUser(userSysID: string): boolean {
        return false;
    }
}
