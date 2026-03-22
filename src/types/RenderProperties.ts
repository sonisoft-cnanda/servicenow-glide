import { GlideSysListControl } from "./GlideSysListControl";

export class RenderProperties {
    getParameterValue(name: string): string {
        return "";
    }
    isRelatedList(): boolean {
        return false;
    }
    isManyToMany(): boolean {
        return false;
    }
    getEncodedQuery(): string {
        return "";
    }
    getReferringURL(): string {
        return "";
    }
    isInteractive(): boolean {
        return false;
    }
    getViewName(): string {
        return "";
    }
    getListControl(): GlideSysListControl {
        return null as any;
    }
    getWindowProperties(): any {
        return null as any;
    }
    isInDevStudio(): boolean {
        return false;
    }
}
