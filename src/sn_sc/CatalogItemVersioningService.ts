import { NativeObject } from "../imports/NativeObject";

export class CatalogItemVersioningService {
    static canEditItem(item?: any): boolean {
        return false;
    }
    static cancelCheckout(itemID?: string): boolean {
        return false;
    }
    static cancelReview(itemId?: string): void {
        
    }
    static checkout(itemID?: string): string {
        return "";
    }
    static publish(itemID?: string, active?: string, updateSetId?: string): any {
        return null as any;
    }
    static publishItem(itemID?: string, active?: string, updateSetId?: string, additionalParameters?: NativeObject): any {
        return null as any;
    }
    static revertToDraftState(itemId?: string): void {
        
    }
    static startReview(itemId?: string, active?: string, updateSetId?: string, additionalParameters?: NativeObject): void {
        
    }
    static triggerPublishProcess(itemId?: string, active?: string, props?: NativeObject): void {
        
    }
}
