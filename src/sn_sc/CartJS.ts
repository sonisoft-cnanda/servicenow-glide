import { Context } from "../imports/Context";
import { Function } from "../imports/Function";
import { ScriptableObject } from "../imports/ScriptableObject";
import { GlideRecord } from "../types/GlideRecord";
import { Scriptable } from "../imports/Scriptable";

export class CartJS {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    activateGuide(): void {
        
    }
    addItemToCart(request?: ScriptableObject): any {
        return null as any;
    }
    addToCart(request?: ScriptableObject): any {
        return null as any;
    }
    calculateLocation(userSysId?: string): string {
        return "";
    }
    canEmptyCart(cartID?: string): boolean {
        return false;
    }
    static canViewRF(): boolean {
        return false;
    }
    checkAllItemsHaveRequestedFor(): boolean {
        return false;
    }
    static checkSequence(request?: ScriptableObject, i?: number): string {
        return "";
    }
    checkoutCart(isMobileOrPortal?: boolean): any {
        return null as any;
    }
    checkoutGuide(): any {
        return null as any;
    }
    checkoutSummary(noFrequency?: boolean): any {
        return null as any;
    }
    cleanupCart(): void {
        
    }
    static copyRPVariables(src?: GlideRecord, destination?: GlideRecord): boolean {
        return false;
    }
    empty(cartID?: string): void {
        
    }
    findConflictingDomain(): string {
        return "";
    }
    findUserCriteriaRestrictedItems(): string[] {
        return [];
    }
    generateLocation(gr?: GlideRecord): string {
        return "";
    }
    getCart(): void {
        
    }
    getCartDetails(includeItemDetails?: boolean): any {
        return null as any;
    }
    getCartID(): string {
        return "";
    }
    getCartItemDetails(cartItemId?: string): any {
        return null as any;
    }
    getCartItems(): GlideRecord {
        return null as any;
    }
    getCrumbHistory(): Array<any> {
        return [];
    }
    getCrumbs(): Array<any> {
        return [];
    }
    getDeliveryAddress(): string {
        return "";
    }
    getGlideRecord(): GlideRecord {
        return null as any;
    }
    getGuide(): string {
        return "";
    }
    getGuideActive(): string {
        return "";
    }
    getItemOptionNew(questionID?: string, cartItemID?: string): GlideRecord {
        return null as any;
    }
    getRequestedFor(): string {
        return "";
    }
    static getRequestedForAddress(userID?: string): string {
        return "";
    }
    getRequestedForDisplayName(): string {
        return "";
    }
    getRequestedForLocation(): string {
        return "";
    }
    getRequestedForLocationDisplayName(): string {
        return "";
    }
    getSpecialInstructions(): string {
        return "";
    }
    isDuplicateAnswer(questionID?: string, cartItemID?: string): boolean {
        return false;
    }
    isEmpty(): boolean {
        return false;
    }
    static isSameVersion(cartItem?: string, catItem?: string): boolean {
        return false;
    }
    static moveRPVariables(src?: GlideRecord, destination?: GlideRecord): boolean {
        return false;
    }
    newGuide(): void {
        
    }
    orderNow(request?: ScriptableObject): any {
        return null as any;
    }
    processLocationChange(current?: GlideRecord): void {
        
    }
    processUserChange(userGR?: GlideRecord): void {
        
    }
    remove(id?: string): void {
        
    }
    setDeliveryAddress(deliveryAddress?: string): void {
        
    }
    setEngagementChannel(engagementChannel?: string): void {
        
    }
    setGuide(guide?: string): void {
        
    }
    setGuideActive(guideActive?: string): void {
        
    }
    setParentParams(params?: Record<any, any>): void {
        
    }
    setReferrer(referrer?: string): void {
        
    }
    setRequestedFor(user?: string): void {
        
    }
    static setSource(cx?: Context, thisObj?: Scriptable, args?: any[], funObj?: Function): void {
        
    }
    setSpecialInstructions(specialInstructions?: string): void {
        
    }
    submitOrder(request?: ScriptableObject): any {
        return null as any;
    }
    update(): void {
        
    }
    updateCart(request?: ScriptableObject, cartItem?: string, noFrequency?: boolean): any {
        return null as any;
    }
    updateItem(o?: ScriptableObject, itemId?: string): any {
        return null as any;
    }
    validateCartItems(): string {
        return "";
    }
}
