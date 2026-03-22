import { GlideURI } from "./GlideURI";

export class GlideAction {
    constructor(sysId: string) {  }
    get(name: string): string {
        return "";
    }
    getActionSysId(): string {
        return "";
    }
    getCategory(): string {
        return "";
    }
    getGlideURI(): GlideURI {
        return null as any;
    }
    getRedirectURL(): string {
        return "";
    }
    getReturnURL(): string {
        return "";
    }
    getValues(): Record<string, string> {
        return {} as any;
    }
    hasGlideURI(): boolean {
        return false;
    }
    openGlideRecord(o: any): void {
        
    }
    setNoPop(noPop: boolean): void {
        
    }
    setRedirectURL(o: any): void {
        
    }
    setReturnURL(o: any): void {
        
    }
    getURLParameter(parameter: string): string {
        return "";
    }
    setURLParameter(parameter: string, value: string): void {
        
    }
}
