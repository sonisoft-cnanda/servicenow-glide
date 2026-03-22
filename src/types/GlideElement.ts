import { AGlideObject } from "../imports/AGlideObject";
import { NativeArray } from "../imports/NativeArray";
import { SysStyleResult } from "../imports/SysStyleResult";
import { GlideappQuestion } from "./GlideappQuestion";
import { GlideChoiceList } from "./GlideChoiceList";
import { GlideElementDescriptor } from "./GlideElementDescriptor";
import { GlideRecord } from "./GlideRecord";
import { MappingLookupSourceDescriptor } from "./MappingLookupSourceDescriptor";
import {
  SafeTableField,
  SafeTableFieldKey,
} from "./_GlideRecordHelpers/SafeTableTypes";

export class GlideElement<T extends keyof Tables | string = string> {
    constructor() {  }
    getChoices(dependent?: string): NativeArray {
        return null as any;
    }
    setDisplayValue(value: any): void {
        
    }
    setValue<N extends SafeTableFieldKey<T & string>, V extends SafeTableField<T & string, N & string>>(value: V): void {
        
    }
    getRefRecord<RT extends keyof Tables | string>(): GlideRecord<RT> {
        return {} as any;
    }
    getDisplayValue(maxCharacters?: number): string {
        return "";
    }
    getDisplayValueLang(language: string): string {
        return "";
    }
    getHTMLValue(maxChars?: number): string {
        return "";
    }
    toString(): string {
        return "";
    }
    getED(): GlideElementDescriptor {
        return null as any;
    }
    getDecryptedValue(): string {
        return "";
    }
    getGlideObject(): AGlideObject {
        return null as any;
    }
    getElements(withMRVS: boolean): NativeArray {
        return null as any;
    }
    getQuestion(): GlideappQuestion {
        return null as any;
    }
    getReferenceTable(): string {
        return "";
    }
    changesTo(o: any): boolean {
        return false;
    }
    changesFrom(o: any): boolean {
        return false;
    }
    hasValidValue(): boolean {
        return false;
    }
    getDynamicAttributesInSchema(): NativeArray {
        return null as any;
    }
    getDynamicAttributesInStore(): NativeArray {
        return null as any;
    }
    getDynamicAttribute(attributePath: string): any {
        return null as any;
    }
    getDynamicAttributeValue(attributePath: string): any {
        return null as any;
    }
    getDynamicAttributeDisplayValue(attributePath: string): any {
        return null as any;
    }
    getDynamicAttributePrimitiveValue(attributePath: string): any {
        return null as any;
    }
    getDynamicNamespace(): any {
        return null as any;
    }
    setDynamicAttributeValue(attributePath: string, value: any): GlideElement {
        return null as any;
    }
    setDynamicAttributeDisplayValue(attributePath: string, value: any): GlideElement {
        return null as any;
    }
    setDynamicAttributeDisplayValues(values: any): GlideElement {
        return null as any;
    }
    setDynamicAttributeValues(values: any): GlideElement {
        return null as any;
    }
    isInSchema(): boolean {
        return false;
    }
    isTransient(): boolean {
        return false;
    }
    hasDefinition(): boolean {
        return false;
    }
    getCurrencyCode(): string {
        return "";
    }
    getNumericCurrencyCode(): string {
        return "";
    }
    getCurrencyDisplayValue(): string {
        return "";
    }
    getCurrencyString(): string {
        return "";
    }
    getCurrencyValue(): string {
        return "";
    }
    getReferenceCurrencyCode(): string {
        return "";
    }
    getReferenceDisplayValue(): string {
        return "";
    }
    getReferenceValue(): string {
        return "";
    }
    getSessionCurrencyCode(): string {
        return "";
    }
    getSessionDisplayValue(): string {
        return "";
    }
    getSessionValue(): string {
        return "";
    }
    setDateNumericValue(value: any): void {
        
    }
    dateNumericValue(dateString: string): number {
        return 0;
    }
    getJournalEntry(lines: number): string {
        return "";
    }
    getCLEDecryptedDBValue(): string {
        return "";
    }
    setPhoneNumber(value: any, strict: boolean): boolean {
        return false;
    }
    getGlobalDisplayValue(): string {
        return "";
    }
    getProviderType(): string {
        return "";
    }
    getStages(): GlideChoiceList {
        return null as any;
    }
    getVariablesValue(): string {
        return "";
    }
    isMultiRow(): boolean {
        return false;
    }
    getLabel(): string {
        return "";
    }
    canCreate(): boolean {
        return false;
    }
    canRead(): boolean {
        return false;
    }
    canWrite(): boolean {
        return false;
    }
    getRow(index: number): GlideElement {
        return null as any;
    }
    addRow(): GlideElement {
        return null as any;
    }
    getCells(columnName: string): NativeArray {
        return null as any;
    }
    getQuestionIds(): NativeArray {
        return null as any;
    }
    getRowCount(): number {
        return 0;
    }
    getRows(): NativeArray {
        return null as any;
    }
    deleteRow(index: number): void {
        
    }
    getCell(name: string): GlideElement {
        return null as any;
    }
    getCellDisplayValue<T>(): T {
        return null as any;
    }
    getVariableName(): string {
        return "";
    }
    getCellValue<T>(): T {
        return null as any;
    }
    setCellValue<T>(value: T): void {
        
    }
    isValidCell(): boolean {
        return false;
    }
    isArray(): boolean {
        return false;
    }
    isObject(): boolean {
        return false;
    }
    size(): number {
        return 0;
    }
    isNil(): boolean {
        return false;
    }
    explainLock(): string {
        return "";
    }
    isDynamicCreate(): boolean {
        return false;
    }
    nil(): boolean {
        return false;
    }
    changes(): boolean {
        return false;
    }
    changesFromNotEmpty(): boolean {
        return false;
    }
    changesToNotEmpty(): boolean {
        return false;
    }
    debug(msg: any): void {
        
    }
    elementSupportsMapping(): boolean {
        return false;
    }
    getAttribute(attribute: string): string {
        return "";
    }
    getBaseTableName(): string {
        return "";
    }
    getBooleanAttribute(attribute: string): boolean {
        return false;
    }
    getChoiceValue(): string {
        return "";
    }
    getChoiceValueLang(language: string): string {
        return "";
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
    getDependent(): string {
        return "";
    }
    getDependentTable(): string {
        return "";
    }
    getDisplayValueExt(maxCharacters: number, nullsub: string): string {
        return "";
    }
    getElementValue(name: string): string {
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
        return null as any;
    }
    getGlideRecord(): GlideRecord<T> {
        return {} as any;
    }
    getHTMLValueExt(maxCharacters: number, nullsub: string): string {
        return "";
    }
    getHint(): string {
        return "";
    }
    getInitialValue(): string {
        return "";
    }
    getLabelLang(language: string): string {
        return "";
    }
    getMappingConfig(): MappingLookupSourceDescriptor {
        return null as any;
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
    hasAttribute(attribute: string): boolean {
        return false;
    }
    hasMapping(): boolean {
        return false;
    }
    hasRightsTo(operation: string): boolean {
        return false;
    }
    hasValue(): boolean {
        return false;
    }
    setError(error: string): void {
        
    }
    setInitialValue(value: string): void {
        
    }
    setJournalEntry(value: any, userName: string): void {
        
    }
    setValueMapping(mapping: string): void {
        
    }
}
