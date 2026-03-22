import { Context } from "../imports/Context";
import { Function } from "../imports/Function";
import { VersionInfo } from "./VersionInfo";

export class ServiceInfo {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    getApiName(): string {
        return "";
    }
    getDescription(): string {
        return "";
    }
    getDocLink(): string {
        return "";
    }
    getRoute(): string {
        return "";
    }
    getServiceName(): string {
        return "";
    }
    getSysId(): string {
        return "";
    }
    getVersions(): VersionInfo[] {
        return [];
    }
    isScripted(): boolean {
        return false;
    }
}
