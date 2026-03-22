import { Context } from '../imports/Context'
import { Function } from '../imports/Function'

export class CatCategory {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    availableForUserCriteria(action?: string, criteriaIDs?: Array<any>): void {
        
    }
    canView(isMobile?: boolean, userId?: string): boolean {
        return false;
    }
    canViewForMobile(): boolean {
        return false;
    }
    create(standardUpdate?: boolean): string {
        return "";
    }
    deleteRecord(standardUpdate?: boolean): void {
        
    }
    getCatalog(): string {
        return "";
    }
    getChildCategoriesInHierarchy(): Array<any> {
        return [];
    }
    getDescription(): string {
        return "";
    }
    getFullDescription(): string {
        return "";
    }
    getHeaderIconSRC(): string {
        return "";
    }
    getHomepageImageSRC(): string {
        return "";
    }
    getID(): string {
        return "";
    }
    getIconSRC(): string {
        return "";
    }
    getItemIds(): Array<any> {
        return [];
    }
    getItemsCount(checkVisibilityOnPortal?: boolean): number {
        return 0;
    }
    getMobilePicture(): string {
        return "";
    }
    getParent(): string {
        return "";
    }
    getSubCategories(): Array<any> {
        return [];
    }
    getTitle(): string {
        return "";
    }
    getViewableItemsCount(checkVisibilityOnPortal?: boolean): number {
        return 0;
    }
    getViewableSubCategories(): Array<any> {
        return [];
    }
    hasVisibleItem(checkVisibilityOnPortal?: boolean, checkCanView?: boolean): boolean {
        return false;
    }
    hideDescriptionForMobile(): boolean {
        return false;
    }
    notAvailableForUserCriteria(action?: string, criteriaIDs?: Array<any>): void {
        
    }
    read(columns?: Record<any, any>, standardUpdate?: boolean): Record<any, any> {
        return {} as any;
    }
    setAttributes(attributes?: Record<any, any>): void {
        
    }
    setTableName(tableName?: string): void {
        
    }
    update(columnValues?: Record<any, any>, standardUpdate?: boolean): void {
        
    }
}
