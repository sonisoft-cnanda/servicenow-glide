import { Context } from "../imports/Context";
import { RemoteTableAccessPolicy } from "./RemoteTableAccessPolicy";

export class RemoteTableDefinition {
    constructor(cx: Context, args: any[], ctorObj: Function, inNewExpr: boolean) {  }
    getLabel(): string {
        return "";
    }
    getName(): string {
        return "";
    }
    getScope(): string {
        return "";
    }
    getTableAccessPolicy(): RemoteTableAccessPolicy {
        return null as any;
    }
    getUserRoles(): Array<string> {
        return [];
    }
    static newWithLabelAndScope(label: string, scope: string): RemoteTableDefinition {
        return null as any;
    }
    setLabel(label: string): void {
        
    }
    setName(name: string): void {
        
    }
    setScope(scope: string): void {
        
    }
    setTableAccessPolicy(policy: RemoteTableAccessPolicy): void {
        
    }
    setUserRoles(userRoles: any[]): void {
        
    }
}
