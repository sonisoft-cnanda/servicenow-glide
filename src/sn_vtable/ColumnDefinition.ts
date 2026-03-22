import { Context } from "../imports/Context";

export class ColumnDefinition {
    constructor(cx: Context, args: any[], ctorObj: Function, inNewExpr: boolean) {  }
    getAttributes(): string {
        return "";
    }
    getDefaultValue(): string {
        return "";
    }
    getLabel(): string {
        return "";
    }
    getMaxLength(): number {
        return 0;
    }
    getName(): string {
        return "";
    }
    getReferencingTable(): string {
        return "";
    }
    getScope(): string {
        return "";
    }
    getType(): string {
        return "";
    }
    getUsePrefix(): boolean {
        return false;
    }
    static newWithLabelAndName(columnLabel: any, columnName: any): ColumnDefinition {
        return null as any;
    }
    setAttributes(attributes: any): void {
        
    }
    setDefaultValue(defaultValue: any): void {
        
    }
    setLabel(label: any): void {
        
    }
    setMaxLength(maxLength: any): void {
        
    }
    setReferencingTable(referencingTable: any): void {
        
    }
    setScope(scope: any): void {
        
    }
    setType(type: any): void {
        
    }
    setUsePrefix(usePrefix: boolean): void {
        
    }
}
