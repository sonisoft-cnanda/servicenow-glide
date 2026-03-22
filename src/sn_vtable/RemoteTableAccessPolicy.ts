import { Context } from "../imports/Context";

export class RemoteTableAccessPolicy {
    constructor(cx: Context, args: any[], ctorObj: Function, inNewExpr: boolean) {  }
    static defaultPolicy(): RemoteTableAccessPolicy {
        return null as any;
    }
    getActions(): boolean {
        return false;
    }
    getAlter(): boolean {
        return false;
    }
    getClientScripts(): boolean {
        return false;
    }
    getCreate(): boolean {
        return false;
    }
    getDelete(): boolean {
        return false;
    }
    getRead(): boolean {
        return false;
    }
    getUpdate(): boolean {
        return false;
    }
    getWebServices(): boolean {
        return false;
    }
    setActions(actions: boolean): void {
        
    }
    setAlter(alter: boolean): void {
        
    }
    setClientScripts(clientScripts: boolean): void {
        
    }
    setCreate(create: boolean): void {
        
    }
    setDelete(remove: boolean): void {
        
    }
    setRead(read: boolean): void {
        
    }
    setUpdate(update: boolean): void {
        
    }
    setWebServices(wsAccess: boolean): void {
        
    }
}
