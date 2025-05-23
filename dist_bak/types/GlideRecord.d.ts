import { IQueryCondition } from '../imports/IQueryCondition';
import { GlideQueryCondition } from '../imports/GlideQueryCondition';
import { GlideElementDescriptor } from '../imports/GlideElementDescriptor';
import { GlideElement } from '../imports/GlideElement';
export declare class GlideRecord {
    _next(): boolean;
    _operation(): string;
    _query(field?: any, value?: any): void;
    addActiveQuery(): GlideQueryCondition;
    addDomainQuery(o?: any): void;
    addEncodedQuery(query?: string, enforceFieldACLs?: any): void;
    addExtraField(field?: string): void;
    addFunction(func?: string): void;
    addInactiveQuery(): GlideQueryCondition;
    addJoinQuery(joinTable?: string, primaryField?: any, joinTableField?: any): IQueryCondition;
    addNotNullQuery(fieldName?: string): GlideQueryCondition;
    addNullQuery(fieldName?: string): GlideQueryCondition;
    addQuery(name?: string, operator?: any, value?: any): IQueryCondition;
    addValue(field?: string, value?: number): void;
    appendOrQuery(condition?: any, name?: string, operator?: any, value?: any): void;
    applyEncodedQuery(queryString?: string): void;
    applyRowSecurity(): void;
    applyTemplate(template?: string): void;
    attachGlideListener(className?: string, insert?: boolean, update?: boolean, del?: boolean, fields?: string, foreign?: any, foreign2?: any, details?: string): void;
    autoSysFields(b?: boolean): void;
    canCreate(): boolean;
    canDelete(): boolean;
    canRead(): boolean;
    canWrite(): boolean;
    changes(): boolean;
    chooseWindow(f?: number, l?: number, forceCount?: boolean): void;
    close(): void;
    constructor(tableName: string);
    createElement(): boolean;
    createIndex(): boolean;
    deleteMultiple(): void;
    deleteRecord(): boolean;
    disableSysIdInOptimization(): void;
    dropIndex(): boolean;
    enableSessionLanguageJoin(): void;
    evaluateAsDefault(fieldName?: string): string;
    find(columnName?: string, value?: string): boolean;
    findForeignKey(collection?: string): string;
    get(id: string): void;
    get(name?: any, value?: any): boolean;
    getAttribute(attribute?: string): string;
    getBooleanAttribute(attribute?: string): boolean;
    getCategory(): string;
    getClassDisplayValue(): string;
    getDisplayName(): string;
    getDisplayValue(name?: string): string;
    getED(): GlideElementDescriptor;
    getElement(columnName?: string): GlideElement;
    getElements(): Array<any>;
    getEncodedQuery(): string;
    getEngineParameter(name?: string): string;
    getEscapedDisplayValue(): string;
    getFields(): Array<any>;
    getLabel(): string;
    getLastErrorMessage(): string;
    getLink(noStack?: boolean): string;
    getLocation(): number;
    getPlural(): string;
    getRecordClassName(): string;
    getRelatedLists(): Record<any, any>;
    getRelatedRecords(foreignKey?: string, collectionID?: string): void;
    getRelatedTables(): Record<any, any>;
    getRowCount(): number;
    getRowNumber(): number;
    getSetRowCount(): number;
    getTableName(): string;
    getTableScope(): string;
    getTableScopeId(): string;
    getTableScopeName(): string;
    getUniqueValue(): string;
    getValue(name?: string): string;
    hasAttachments(): boolean;
    hasNext(): boolean;
    hasRightsTo(operation?: string): boolean;
    incrementViewCount(): void;
    initialize(): void;
    insert(): string;
    insertLazy(): string;
    insertOrUpdate(keyField?: string): string;
    insertWithReferences(): string;
    instanceOf(className?: string): boolean;
    isActionAborted(): boolean;
    isEncodedQueryValid(query?: string): boolean;
    isForeignTable(): boolean;
    isInGlobalScope(): boolean;
    isInSelectedScope(): boolean;
    isInStoreScope(): boolean;
    isMetadata(): boolean;
    isNewRecord(): boolean;
    isReadonly(): boolean;
    isValid(): boolean;
    isValidEncodedQuery(query?: string): boolean;
    isValidField(columnName?: string): boolean;
    isValidMetadataRecord(): boolean;
    isValidRecord(): boolean;
    isView(): boolean;
    isWorkflow(): boolean;
    largeResultExpected(): void;
    makeReadonly(): void;
    moreEncodedQuery(query?: string): void;
    static newGlideRecordNamed(tableName?: string): GlideRecord;
    newRecord(): void;
    next(): boolean;
    nextRecord(): boolean;
    notifyUser(): void;
    onePassQuery(): void;
    operation(): string;
    orderBy(name?: string): void;
    orderByDesc(name?: string): void;
    popCurrent(): void;
    putCurrent(): void;
    putOptimizers(o?: any): void;
    query(field?: any, value?: any): void;
    queryNoDomain(): void;
    restoreLocation(): void;
    saveLocation(): void;
    scheduleScript(name?: string): void;
    setAbortAction(b?: boolean): void;
    setCategory(category?: string): void;
    setDisplayValue(name?: string, value?: any): void;
    setEngineParameter(name?: string, value?: string): void;
    setForceUpdate(e?: boolean): void;
    setLimit(limit?: number): void;
    setLocation(rowNumber?: number): void;
    setNewGuid(): string;
    setNewGuidValue(guid?: string): void;
    setNoCount(): void;
    setQueryReferences(queryReferences?: boolean): void;
    setSystem(isSystem?: boolean): void;
    setUseEngines(e?: boolean): void;
    setValue(name?: string, value?: any): void;
    setWorkflow(e?: boolean): void;
    targetExtension(tableName?: string): void;
    update(reason?: any): string;
    updateElement(): boolean;
    updateLazy(): boolean;
    updateMultiple(): void;
    updateNoDomain(reason?: any): string;
    updateWithReferences(reason?: any): string;
}
