import { Context } from "../imports/Context";
import { Function } from "../imports/Function";
import { ResourceInfo } from "./ResourceInfo";

export class VersionInfo {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    getDescription(): string {
        return "";
    }
    getDocLink(): string {
        return "";
    }
    getResources(): ResourceInfo[] {
        return [];
    }
    getVersion(): string {
        return "";
    }
}
