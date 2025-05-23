import { GlideQueryCondition } from '../imports/GlideQueryCondition.js';
import { IQueryCondition } from '../imports/IQueryCondition.js';
import { GlideElementDescriptor } from '../imports/GlideElementDescriptor.js';
import { GlideElement } from '../imports/GlideElement.js';
import { GlideRecord } from '../imports/GlideRecord.js';
export declare class GlideAggregate {
    constructor(tableName: string);
    _next(): boolean;
    _operation(): string;
    _query(field?: any, value?: any): void;
    addActiveQuery(): GlideQueryCondition;
    addAggregate(agg?: string, name?: string): void;
    addBizCalendarTrend(fieldName?: string, bizCalendarSysId?: string): void;
    addBizCalendarTrendBase(fieldName?: string, bizCalendarSysId?: string): void;
    addBizCalendarTrendIntersect(anotherCalendarSysId?: string, overlapMode?: string): void;
    addDomainQuery(o?: any): void;
    addEncodedQuery(query?: string, enforceFieldACLs?: any): void;
    addExtraField(field?: string): void;
    addFunction(func?: string): void;
    addHaving(arg1?: string, arg2?: string, arg3?: string, arg4?: string): void;
    addInactiveQuery(): GlideQueryCondition;
    addJoinQuery(joinTable?: string, primaryField?: any, joinTableField?: any): IQueryCondition;
    addNotNullQuery(fieldName?: string): GlideQueryCondition;
    addNullQuery(fieldName?: string): GlideQueryCondition;
    addQuery(name?: string, operator?: any, value?: any): IQueryCondition;
    addTrend(fieldName?: string, timeInterval?: string, numUnits?: number): void;
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
    get(name?: any, value?: any): boolean;
    getAggregate(agg?: string, name?: string): string;
    getAggregateEncodedQuery(): string;
    getAttribute(attribute?: string): string;
    getBooleanAttribute(attribute?: string): boolean;
    getCategory(): string;
    getClassDisplayValue(): string;
    getCount(): number;
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
    getQuery(): string;
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
    getTotal(agg?: string, name?: string): number;
    getUniqueValue(): string;
    getValue(name?: string): string;
    groupBy(name?: string): void;
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
    isBizCalendarTrendFillGap(): boolean;
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
    newGlideRecordNamed(tableName?: string): GlideRecord;
    newRecord(): void;
    next(): boolean;
    nextRecord(): boolean;
    notifyUser(): void;
    onePassQuery(): void;
    operation(): string;
    orderBy(name?: string): void;
    orderByAggregate(agg?: string, name?: string): void;
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
    setAggregateWindow(firstRowWanted?: number, lastRowWanted?: number): void;
    setBizCalendarTrendFillGap(b?: boolean): void;
    setCategory(category?: string): void;
    setDisplayValue(name?: string, value?: any): void;
    setEngineParameter(name?: string, value?: string): void;
    setForceUpdate(e?: boolean): void;
    setGroup(b?: boolean): void;
    setGroupByFollowRef(b?: boolean): void;
    setIntervalYearIncluded(b?: boolean): void;
    setLimit(limit?: number): void;
    setLocation(rowNumber?: number): void;
    setNewGuid(): string;
    setNewGuidValue(guid?: string): void;
    setNoCount(): void;
    setOrder(b?: boolean): void;
    setOrderByFollowRef(b?: boolean): void;
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
//# sourceMappingURL=GlideAggregate.d.ts.map