import { GlideElementDescriptor } from '../imports/GlideElementDescriptor';
import { SysStyleResult } from '../imports/SysStyleResult';
import { AGlideObject } from '../imports/AGlideObject';
import { GlideRecord } from '../imports/GlideRecord';
import { MappingLookupSourceDescriptor } from '../imports/MappingLookupSourceDescriptor';

export class GlideElement {
    constructor() {}
    canCreate(): boolean {
        return false;
    }
    canRead(): boolean {
        return false;
    }
    canWrite(): boolean {
        return false;
    }
    changes(): boolean {
        return false;
    }
    changesFrom(o?: any): boolean {
        return false;
    }
    changesFromNotEmpty(): boolean {
        return false;
    }
    changesTo(o?: any): boolean {
        return false;
    }
    changesToNotEmpty(): boolean {
        return false;
    }
    debug(msg?: any): void {
        
    }
    elementSupportsMapping(): boolean {
        return false;
    }
    explainLock(): string {
        return "";
    }
    getAttribute(attribute?: string): string {
        return "";
    }
    getBaseTableName(): string {
        return "";
    }
    getBooleanAttribute(attribute?: string): boolean {
        return false;
    }
    getChoiceValue(): string {
        return "";
    }
    getChoiceValueLang(language?: string): string {
        return "";
    }
    getChoices(dependent?: string): Array<any> {
        return new Array();
    }
    getContextID(): string {
        return "";
    }
    getContextName(): string {
        return "";
    }
    getDebugCount(): number {
        return 0;
    }
    getDecryptedValue(): string {
        return "";
    }
    getDependent(): string {
        return "";
    }
    getDependentTable(): string {
        return "";
    }
    getDisplayValue(maxCharacters?: number): string {
        return "";
    }
    getDisplayValueExt(maxCharacters?: number, nullsub?: string): string {
        return "";
    }
    getDisplayValueLang(language?: string): string {
        return "";
    }
    getED(): GlideElementDescriptor {
        return new GlideElementDescriptor();
    }
    getElementValue(name?: string): string {
        return "";
    }
    getError(): string {
        return "";
    }
    getEscapedValue(): string {
        return "";
    }
    getFieldStyle(): string {
        return "";
    }
    getFullStyle(): SysStyleResult {
        return new SysStyleResult();
    }
    getGlideObject(): AGlideObject {
        return new AGlideObject();
    }
    getGlideRecord(): GlideRecord {
        return new GlideRecord("");
    }
    getHTMLValue(maxChars?: number): string {
        return "";
    }
    getHTMLValueExt(maxCharacters?: number, nullsub?: string): string {
        return "";
    }
    getHint(): string {
        return "";
    }
    getInitialValue(): string {
        return "";
    }
    getLabel(): string {
        return "";
    }
    getLabelLang(language?: string): string {
        return "";
    }
    getMappingConfig(): MappingLookupSourceDescriptor {
        return new MappingLookupSourceDescriptor();
    }
    getModifiedBy(): string {
        return "";
    }
    getName(): string {
        return "";
    }
    getReferenceKey(): string {
        return "";
    }
    getRefRecord(): GlideRecord {
        return new GlideRecord("");
    }
    getStyle(): string {
        return "";
    }
    getTableName(): string {
        return "";
    }
    getTextAreaDisplayValue(): string {
        return "";
    }
    getValue(): string {
        return "";
    }
    getValueMapping(): string {
        return "";
    }
    getXHTMLValue(): string {
        return "";
    }
    getXMLValue(): string {
        return "";
    }
    hasAttribute(attribute?: string): boolean {
        return false;
    }
    hasMapping(): boolean {
        return false;
    }
    hasRightsTo(operation?: string): boolean {
        return false;
    }
    hasValue(): boolean {
        return false;
    }
    isArray(): boolean {
        return false;
    }
    isDynamicCreate(): boolean {
        return false;
    }
    isNil(): boolean {
        return false;
    }
    isObject(): boolean {
        return false;
    }
    nil(): boolean {
        return false;
    }
    setDisplayValue(value?: any): void {
        
    }
    setError(error?: string): void {
        
    }
    setInitialValue(value?: string): void {
        
    }
    setJournalEntry(value?: any, userName?: string): void {
        
    }
    setValue(value?: any): void {
        
    }
    setValueMapping(mapping?: string): void {
        
    }
    size(): number {
        return 0;
    }
    toString(): string {
        return "";
    }
}
