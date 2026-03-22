import { NativeObject } from '../imports/NativeObject'

export class CatalogConversationHelper {
    constructor() {  }
    evaluateQualifier(itemMap?: NativeObject): Record<any, any> {
        return {} as any;
    }
    executeVariableChangeHandlers(itemJson?: NativeObject, variableId?: string, executeDataLookup?: boolean, executeDynamicValue?: boolean): Record<any, any> {
        return {} as any;
    }
    static get(config?: NativeObject): CatalogConversationHelper {
        return null as any;
    }
    getChangedFields(): Array<any> {
        return [];
    }
    getConversationalRenderType(catItemId?: string, checkOverride?: boolean): string {
        return "";
    }
    getItem(catItemId?: string): Record<any, any> {
        return {} as any;
    }
    getNonConversationalReasons(catItemId?: string): string {
        return "";
    }
    getOnChangeStatus(): string {
        return "";
    }
    getOnLoadStatus(): string {
        return "";
    }
    getSubmitStatus(): string {
        return "";
    }
    hasNowAssistConversationalSupport(itemId?: string): boolean {
        return false;
    }
    hasVASupport(itemId?: string): boolean {
        return false;
    }
    runChangePolicies(itemMap?: NativeObject): Record<any, any> {
        return {} as any;
    }
    runDataLookups(itemJson?: NativeObject, variableId?: string): Record<any, any> {
        return {} as any;
    }
    setValue(itemJson?: NativeObject, field?: string, value?: any, displayValue?: any): Record<any, any> {
        return {} as any;
    }
    submit(itemJson?: NativeObject): Record<any, any> {
        return {} as any;
    }
    updateCatalogItemsConversationalRenderType(): void {
        
    }
}
