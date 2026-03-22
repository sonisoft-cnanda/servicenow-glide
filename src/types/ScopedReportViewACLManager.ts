import { Context } from "../imports/Context";

export class ScopedReportViewACLManager {
    constructor(cx: Context, args: any[], funObj: Function, inNewExpr: boolean) {  }
    activateAllOOBReportViewACLs(sysIdsString: string): string {
        return "";
    }
    activateReportViewACLs(sysIdsString: string): void {
        
    }
    addRoleToGroup(roleSysId: string, groupSysId: string): string {
        return "";
    }
    addUsersToGroup(userSysIds: string, groupId: string): string {
        return "";
    }
    deactivateAllOOBReportViewACLs(sysIdsString: string): string {
        return "";
    }
    isUserAllowedToGrantRole(userSysId: string, roleSysId: string): boolean {
        return false;
    }
}
