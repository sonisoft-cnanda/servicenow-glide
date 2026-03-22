import { Context } from "../imports/Context";
import { Function } from "../imports/Function";
import { GlideRecord } from "../types/GlideRecord";

export class Catalog {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    canView(mobile?: boolean, userId?: string): boolean {
        return false;
    }
    static getAvailableCatalog(): Catalog {
        return null as any;
    }
    getBackgroundColor(): string {
        return "";
    }
    static getCatalogCount(): number {
        return 0;
    }
    getCatalogItemIds(): Array<any> {
        return [];
    }
    getCategories(): Array<any> {
        return [];
    }
    getCategoryIds(): Array<any> {
        return [];
    }
    static getDefaultCatalog(): Catalog {
        return null as any;
    }
    getDefaultView(): string {
        return "";
    }
    getDescription(): string {
        return "";
    }
    getDesktopImageSRC(): string {
        return "";
    }
    getEditLink(): string {
        return "";
    }
    getGr(): GlideRecord {
        return null as any;
    }
    getHeaderIconSRC(): string {
        return "";
    }
    getHomepageCategories(): Array<any> {
        return [];
    }
    getID(): string {
        return "";
    }
    getMobilePicture(): string {
        return "";
    }
    getTitle(): string {
        return "";
    }
    hasCategories(): boolean {
        return false;
    }
    hasItems(): boolean {
        return false;
    }
    isWishlistEnabled(): boolean {
        return false;
    }
}
