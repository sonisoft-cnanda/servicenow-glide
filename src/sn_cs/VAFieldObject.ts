import { Context } from '../imports/Context'
import { Function } from '../imports/Function'

export class VAFieldObject {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    acceptModifiedValue(): void {
        
    }
    getAdditionalText(): string {
        return "";
    }
    getCandidateModifiedValue(): string {
        return "";
    }
    getDefaultDisplayValue(): any {
        return null as any;
    }
    getDefaultValue(): any {
        return null as any;
    }
    getDisplayValue(): any {
        return null as any;
    }
    getFiles(): any {
        return null as any;
    }
    getOptions(): any {
        return null as any;
    }
    getTranslatedUtterance(): any {
        return null as any;
    }
    getValue(): any {
        return null as any;
    }
    isModified(): boolean {
        return false;
    }
    isModifyAcceptable(): boolean {
        return false;
    }
    isPredictionSource(): boolean {
        return false;
    }
    isRequired(): boolean {
        return false;
    }
    isValueSet(): boolean {
        return false;
    }
    prepareModifiedValue(value?: any): void {
        
    }
    reset(newValue?: any): void {
        
    }
    restorePreviousValue(): void {
        
    }
    setModified(modified?: string): void {
        
    }
    setPredictionSource(predictionSource?: string): void {
        
    }
    setRequired(mandatory?: string): void {
        
    }
    setTimeZone(timeZone?: string): void {
        
    }
    setValue(value?: any, displayValue?: any): void {
        
    }
    toString(): string {
        return "";
    }
    unbindEntity(): void {
        
    }
}
