import { Context } from '../imports/Context'
import { NativeObject } from '../imports/NativeObject'
import { Function } from '../imports/Function'
import { ScriptableObject } from '../imports/ScriptableObject'

export class CatItem {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    availableForUserCriteria(action?: string, criteriaIDs?: Array<any>): void {
        
    }
    canView(isMobile?: boolean, userId?: string): boolean {
        return false;
    }
    canViewInDomain(): boolean {
        return false;
    }
    canViewOnSearch(isMobile?: boolean): boolean {
        return false;
    }
    create(standardUpdate?: boolean): string {
        return "";
    }
    static deleteCatalogItemAndReferences(id?: string): boolean {
        return false;
    }
    deleteRecord(standardUpdate?: boolean): void {
        
    }
    getAvailability(): string {
        return "";
    }
    getCatalogs(): string {
        return "";
    }
    getCategories(catalogSysId?: string): Array<any> {
        return [];
    }
    getCategoryTree(categoryId?: string): Record<any, any> {
        return {} as any;
    }
    getCompleteItemPrice(): string {
        return "";
    }
    getDataLookUps(): Array<any> {
        return [];
    }
    getFirstAccessibleCategoryForSearch(catalogId?: string): string {
        return "";
    }
    getIcon(): string {
        return "";
    }
    getInvalidDelegatedUsers(requestForUsers?: Array<any>): Array<any> {
        return [];
    }
    getItemForVA(): Record<any, any> {
        return {} as any;
    }
    getItemSummary(isPortal?: boolean, options?: string): Record<any, any> {
        return {} as any;
    }
    getMRVSIds(): Array<any> {
        return [];
    }
    getMobilePicture(): string {
        return "";
    }
    getPicture(): string {
        return "";
    }
    getRecordClass(): string {
        return "";
    }
    getSequencingProcess(): string {
        return "";
    }
    getTemplateUsed(): string {
        return "";
    }
    getUIPolicies(unfiltered?: boolean): Array<any> {
        return [];
    }
    getVariableKeys(mode?: number): Array<any> {
        return [];
    }
    getVariableSet(): Array<any> {
        return [];
    }
    getVariables(layout?: boolean, isFlat?: boolean, includeContainers?: boolean, map?: NativeObject): Array<any> {
        return [];
    }
    getVariablesDynamicValueConfig(): Array<any> {
        return [];
    }
    getVariablesLayout(includeBreakVariables?: boolean, options?: NativeObject): Array<any> {
        return [];
    }
    hasRequestedForVariable(isGuideItem?: boolean): boolean {
        return false;
    }
    hasTemplateManagerRole(): boolean {
        return false;
    }
    isActive(): boolean {
        return false;
    }
    isAssociatedWithCatalog(catalogId?: string): boolean {
        return false;
    }
    isDelegationAllowed(requestedForUser?: string): boolean {
        return false;
    }
    isOwner(userId?: string): boolean {
        return false;
    }
    isVisibleServicePortal(): boolean {
        return false;
    }
    notAvailableForUserCriteria(action?: string, criteriaIDs?: Array<any>): void {
        
    }
    read(columns?: Record<any, any>, standardUpdate?: boolean): Record<any, any> {
        return {} as any;
    }
    setAttributes(attributes?: Record<any, any>): void {
        
    }
    setCatalogs(catalogs?: string): void {
        
    }
    setCategories(categories?: string): void {
        
    }
    setImage(dbImageSysId?: string, type?: string): void {
        
    }
    setTableName(tableName?: string): void {
        
    }
    submitProducer(o?: ScriptableObject): Record<any, any> {
        return {} as any;
    }
    update(columnValues?: Record<any, any>, standardUpdate?: boolean): void {
        
    }
}
