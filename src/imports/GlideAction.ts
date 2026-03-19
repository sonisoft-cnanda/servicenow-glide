import { GlideURI } from './GlideURI';

export class GlideAction {
    constructor(sysId?: string) {}
    get(name?: string): string {
        return "";
    }
    getActionSysId(): string {
        return "";
    }
    getCategory(): string {
        return "";
    }
    getGlideURI(): GlideURI {
        return new GlideURI();
    }
    getRedirectURL(): string {
        return "";
    }
    getReturnURL(): string {
        return "";
    }
    getValues(): Record<any, any> {
        return {};
    }
    hasGlideURI(): boolean {
        return false;
    }
    openGlideRecord(o?: any): void {
        
    }
    setNoPop(noPop?: boolean): void {
        
    }
    setRedirectURL(o?: any): void {
        
    }
    setReturnURL(o?: any): void {
        
    }
}
