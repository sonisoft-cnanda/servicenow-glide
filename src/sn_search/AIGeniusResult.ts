import { Context } from "../imports/Context";
import { Function } from "../imports/Function";
import { SearchField } from "./SearchField";

export class AIGeniusResult {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    addField(name?: string, label?: string, value?: string, displayValue?: string): void {
        
    }
    getField(fieldName?: string): SearchField {
        return null as any;
    }
    getFields(): Array<any> {
        return [];
    }
    getModelId(): string {
        return "";
    }
    isSearchBased(): boolean {
        return false;
    }
    setModelId(sysId?: string): void {
        
    }
}
