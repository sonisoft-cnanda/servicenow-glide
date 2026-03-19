import { GlideQueryCondition } from './GlideQueryCondition';
import { IQueryCondition } from './IQueryCondition';
import { GlideElementDescriptor } from './GlideElementDescriptor';
import { GlideElement } from './GlideElement';
import { GlideRecord } from './GlideRecord';

export class GlideRecordSecure {
    constructor(tableName: string) {}
    _next(): boolean {
        return false;
    }
    _operation(): string {
        return "";
    }
    _query(field?: any, value?: any): void {
        
    }
    addActiveQuery(): GlideQueryCondition {
        return new GlideQueryCondition();
    }
    addDomainQuery(o?: any): void {
        
    }
    addEncodedQuery(query?: string, enforceFieldACLs?: any): void {
        
    }
    addExtraField(field?: string): void {
        
    }
    addFunction(func?: string): void {
        
    }
    addInactiveQuery(): GlideQueryCondition {
        return new GlideQueryCondition();
    }
    addJoinQuery(joinTable?: string, primaryField?: any, joinTableField?: any): IQueryCondition {
        return new GlideQueryCondition();;
    }
    addNotNullQuery(fieldName?: string): GlideQueryCondition {
        return new GlideQueryCondition();
    }
    addNullQuery(fieldName?: string): GlideQueryCondition {
        return new GlideQueryCondition();
    }
    addQuery(name?: string, operator?: any, value?: any): IQueryCondition {
        return new GlideQueryCondition();;
    }
    addValue(field?: string, value?: number): void {
        
    }
    appendOrQuery(condition?: any, name?: string, operator?: any, value?: any): void {
        
    }
    applyEncodedQuery(queryString?: string): void {
        
    }
    applyRowSecurity(): void {
        
    }
    applyTemplate(template?: string): void {
        
    }
    attachGlideListener(className?: string, insert?: boolean, update?: boolean, del?: boolean, fields?: string, foreign?: any, foreign2?: any, details?: string): void {
        
    }
    autoSysFields(b?: boolean): void {
        
    }
    canCreate(): boolean {
        return false;
    }
    canDelete(): boolean {
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
    chooseWindow(f?: number, l?: number, forceCount?: boolean): void {
        
    }
    close(): void {
        
    }
    createElement(): boolean {
        return false;
    }
    createIndex(): boolean {
        return false;
    }
    deleteMultiple(): void {
        
    }
    deleteRecord(): boolean {
        return false;
    }
    disableSysIdInOptimization(): void {
        
    }
    dropIndex(): boolean {
        return false;
    }
    enableSessionLanguageJoin(): void {
        
    }
    evaluateAsDefault(fieldName?: string): string {
        return "";
    }
    find(columnName?: string, value?: string): boolean {
        return false;
    }
    findForeignKey(collection?: string): string {
        return "";
    }
    get(name?: any, value?: any): boolean {
        return false;
    }
    getAttribute(attribute?: string): string {
        return "";
    }
    getBooleanAttribute(attribute?: string): boolean {
        return false;
    }
    getCategory(): string {
        return "";
    }
    getClassDisplayValue(): string {
        return "";
    }
    getDisplayName(): string {
        return "";
    }
    getDisplayValue(name?: string): string {
        return "";
    }
    getED(): GlideElementDescriptor {
        return new GlideElementDescriptor();
    }
    getElement(columnName?: string): GlideElement {
        return new GlideElement();
    }
    getElements(): Array<any> {
        return new Array();
    }
    getEncodedQuery(): string {
        return "";
    }
    getEngineParameter(name?: string): string {
        return "";
    }
    getEscapedDisplayValue(): string {
        return "";
    }
    getFields(): Array<any> {
        return new Array();
    }
    getLabel(): string {
        return "";
    }
    getLastErrorMessage(): string {
        return "";
    }
    getLink(noStack?: boolean): string {
        return "";
    }
    getLocation(): number {
        return 0;
    }
    getPlural(): string {
        return "";
    }
    getRecordClassName(): string {
        return "";
    }
    getRelatedLists(): Record<any, any> {
        return {};
    }
    getRelatedRecords(foreignKey?: string, collectionID?: string): void {
        
    }
    getRelatedTables(): Record<any, any> {
        return {};
    }
    getRowCount(): number {
        return 0;
    }
    getRowNumber(): number {
        return 0;
    }
    getSetRowCount(): number {
        return 0;
    }
    getTableName(): string {
        return "";
    }
    getTableScope(): string {
        return "";
    }
    getTableScopeId(): string {
        return "";
    }
    getTableScopeName(): string {
        return "";
    }
    getUniqueValue(): string {
        return "";
    }
    getValue(name?: string): string {
        return "";
    }
    hasAttachments(): boolean {
        return false;
    }
    hasNext(): boolean {
        return false;
    }
    hasRightsTo(operation?: string): boolean {
        return false;
    }
    incrementViewCount(): void {
        
    }
    initialize(): void {
        
    }
    insert(): string {
        return "";
    }
    insertLazy(): string {
        return "";
    }
    insertOrUpdate(keyField?: string): string {
        return "";
    }
    insertWithReferences(): string {
        return "";
    }
    instanceOf(className?: string): boolean {
        return false;
    }
    isActionAborted(): boolean {
        return false;
    }
    isEncodedQueryValid(query?: string): boolean {
        return false;
    }
    isForeignTable(): boolean {
        return false;
    }
    isInGlobalScope(): boolean {
        return false;
    }
    isInSelectedScope(): boolean {
        return false;
    }
    isInStoreScope(): boolean {
        return false;
    }
    isMetadata(): boolean {
        return false;
    }
    isNewRecord(): boolean {
        return false;
    }
    isReadonly(): boolean {
        return false;
    }
    isValid(): boolean {
        return false;
    }
    isValidEncodedQuery(query?: string): boolean {
        return false;
    }
    isValidField(columnName?: string): boolean {
        return false;
    }
    isValidMetadataRecord(): boolean {
        return false;
    }
    isValidRecord(): boolean {
        return false;
    }
    isView(): boolean {
        return false;
    }
    isWorkflow(): boolean {
        return false;
    }
    largeResultExpected(): void {
        
    }
    makeReadonly(): void {
        
    }
    moreEncodedQuery(query?: string): void {
        
    }
    newGlideRecordNamed(tableName?: string): GlideRecord {
        return new GlideRecord("");
    }
    newRecord(): void {
        
    }
    next(): boolean {
        return false;
    }
    nextRecord(): boolean {
        return false;
    }
    notifyUser(): void {
        
    }
    onePassQuery(): void {
        
    }
    operation(): string {
        return "";
    }
    orderBy(name?: string): void {
        
    }
    orderByDesc(name?: string): void {
        
    }
    popCurrent(): void {
        
    }
    putCurrent(): void {
        
    }
    putOptimizers(o?: any): void {
        
    }
    query(field?: any, value?: any): void {
        
    }
    queryNoDomain(): void {
        
    }
    restoreLocation(): void {
        
    }
    saveLocation(): void {
        
    }
    scheduleScript(name?: string): void {
        
    }
    setAbortAction(b?: boolean): void {
        
    }
    setCategory(category?: string): void {
        
    }
    setDisplayValue(name?: string, value?: any): void {
        
    }
    setEngineParameter(name?: string, value?: string): void {
        
    }
    setForceUpdate(e?: boolean): void {
        
    }
    setLimit(limit?: number): void {
        
    }
    setLocation(rowNumber?: number): void {
        
    }
    setNewGuid(): string {
        return "";
    }
    setNewGuidValue(guid?: string): void {
        
    }
    setNoCount(): void {
        
    }
    setQueryReferences(queryReferences?: boolean): void {
        
    }
    setSystem(isSystem?: boolean): void {
        
    }
    setUseEngines(e?: boolean): void {
        
    }
    setValue(name?: string, value?: any): void {
        
    }
    setWorkflow(e?: boolean): void {
        
    }
    targetExtension(tableName?: string): void {
        
    }
    update(reason?: any): string {
        return "";
    }
    updateElement(): boolean {
        return false;
    }
    updateLazy(): boolean {
        return false;
    }
    updateMultiple(): void {
        
    }
    updateNoDomain(reason?: any): string {
        return "";
    }
    updateWithReferences(reason?: any): string {
        return "";
    }
}
