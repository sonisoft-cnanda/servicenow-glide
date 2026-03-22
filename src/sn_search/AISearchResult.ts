import { Context } from "../imports/Context";
import { Function } from "../imports/Function";
import { SearchField } from "./SearchField";

export class AISearchResult {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    addField(name?: string, label?: string, value?: string, displayValue?: string): void {
        
    }
    getAisDocId(): string {
        return "";
    }
    getDocumentType(): string {
        return "";
    }
    getFeatureVector(): Record<any, any> {
        return {} as any;
    }
    getField(fieldName?: string): SearchField {
        return null as any;
    }
    getFields(): Array<any> {
        return [];
    }
    getFileExtension(): string {
        return "";
    }
    getParentSysId(): string {
        return "";
    }
    getParentTitle(): string {
        return "";
    }
    getPassages(): Array<any> {
        return [];
    }
    getPrimaryLanguage(): string {
        return "";
    }
    getRecordClassName(): string {
        return "";
    }
    getScore(): number {
        return 0;
    }
    getSemanticEmbedding(): string {
        return "";
    }
    getSemanticSimilarity(): number {
        return 0;
    }
    getSysId(): string {
        return "";
    }
    getTable(): string {
        return "";
    }
    getTableLabelPlural(): string {
        return "";
    }
    getTableLabelSingular(): string {
        return "";
    }
    getText(): string {
        return "";
    }
    getTitle(): string {
        return "";
    }
    getUrl(): string {
        return "";
    }
    setAisDocId(id?: string): void {
        
    }
    setFeatureVector(featureVector?: Record<any, any>): void {
        
    }
    setFileExtension(fileExtension?: string): void {
        
    }
    setParentSysId(sysId?: string): void {
        
    }
    setParentTitle(title?: string): void {
        
    }
    setRecordClassName(recordClassName?: string): void {
        
    }
    setScore(score?: number): void {
        
    }
    setSysId(sysId?: string): void {
        
    }
    setTable(table?: string): void {
        
    }
    setTableLabelPlural(tableLabelPlural?: string): void {
        
    }
    setTableLabelSingular(tableLabelSingular?: string): void {
        
    }
    setText(text?: string): void {
        
    }
    setTitle(title?: string): void {
        
    }
    setUrl(url?: string): void {
        
    }
}
