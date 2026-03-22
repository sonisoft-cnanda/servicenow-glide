import { IDynamicNamespace } from "../imports/IDynamicNamespace";
import { NativeArray } from "../imports/NativeArray";

export class GlideDynamicAttributeStore {
    constructor();
    constructor(other: GlideDynamicAttributeStore);
    constructor(namespace: IDynamicNamespace);
    constructor(namespaceName: string);
    constructor(namespace: IDynamicNamespace, value: any);
    constructor(namespaceName: string, value: any);
    constructor(...args: any[]) {  }
    clear(): void {
        
    }
    getDisplayValue(): string {
        return "";
    }
    getDynamicAttribute(attributePath: string): any {
        return null as any;
    }
    getDynamicAttributeDisplayValue(attributePath: string): string {
        return "";
    }
    getDynamicAttributePrimitiveValue(attributePath: string): any {
        return null as any;
    }
    getDynamicAttributeValue(attributePath: string): string {
        return "";
    }
    getDynamicAttributes(): NativeArray {
        return null as any;
    }
    getDynamicNamespace(): IDynamicNamespace {
        return null as any;
    }
    getValue(): string {
        return "";
    }
    hasValidValue(attributePath: string): boolean {
        return false;
    }
    setDisplayValue(value: string): void {
        
    }
    setDynamicAttributeDisplayValue(attrPath: string, value: any): GlideDynamicAttributeStore {
        return null as any;
    }
    setDynamicAttributeDisplayValues(values: string): GlideDynamicAttributeStore {
        return null as any;
    }
    setDynamicAttributeValue(attrPath: string, value: any): GlideDynamicAttributeStore {
        return null as any;
    }
    setDynamicAttributeValues(values: any): GlideDynamicAttributeStore {
        return null as any;
    }
    setDynamicNamespace(namespace: IDynamicNamespace): GlideDynamicAttributeStore;
    setDynamicNamespace(namespaceName: string): GlideDynamicAttributeStore;
    setDynamicNamespace(...args: any[]): any {
        return null as any;
    }
    setValue(value: any): void {
        
    }
    toString(): string {
        return "";
    }
}
