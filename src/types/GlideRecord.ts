import { GlideQueryCondition } from '../imports/GlideQueryCondition';
import { IQueryCondition } from '../imports/IQueryCondition';
import { GlideElementDescriptor } from '../imports/GlideElementDescriptor';
import { GlideElement } from '../imports/GlideElement';

export class GlideRecord {
    constructor(tableName: string) {}

    addActiveQuery(): GlideQueryCondition {
        return new GlideQueryCondition();
    }

    addEncodedQuery(query: string, enforceFieldACLs?: boolean): void {}

    addFunction(func: object): void {}

    addJoinQuery(joinTable: string, primaryField?: string, joinTableField?: string): GlideQueryCondition {
        return new GlideQueryCondition();
    }

    addNotNullQuery(fieldName: string): GlideQueryCondition {
        return new GlideQueryCondition();
    }

    addNullQuery(fieldName: string): GlideQueryCondition {
        return new GlideQueryCondition();
    }

    addQuery(name: string, operator: string, value: any): GlideQueryCondition;
    addQuery(name: string, value: any): GlideQueryCondition;
    addQuery(...args: any[]): GlideQueryCondition {
        return new GlideQueryCondition();
    }

    addValue(field: string, value: number): void {}

    applyEncodedQuery(queryString: string): void {}

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

    chooseWindow(firstRow: number, lastRow: number, forceCount?: boolean): void {}

    deleteMultiple(): void {}

    deleteRecord(): boolean {
        return false;
    }

    disableSysIdInOptimization(): void {}

    get(name: string, value?: any): boolean {
        return false;
    }

    getAttribute(fieldName: string): string {
        return "";
    }

    getClassDisplayValue(): string {
        return "";
    }

    getDisplayValue(fieldName?: string): string {
        return "";
    }

    getED(): GlideElementDescriptor {
        return new GlideElementDescriptor();
    }

    getElement(fieldName: string): GlideElement {
        return new GlideElement();
    }

    getElements(): GlideElement[] {
        return [];
    }

    getEncodedQuery(): string {
        return "";
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

    getRecordClassName(): string {
        return "";
    }

    getRowCount(): number {
        return 0;
    }

    getTableName(): string {
        return "";
    }

    getUniqueValue(): string {
        return "";
    }

    getValue(fieldName: string): string {
        return "";
    }

    hasNext(): boolean {
        return false;
    }

    initialize(): void {}

    insert(): string {
        return "";
    }

    isActionAborted(): boolean {
        return false;
    }

    isEncodedQueryValid(query: string): boolean {
        return false;
    }

    isNewRecord(): boolean {
        return false;
    }

    isValid(): boolean {
        return false;
    }

    isValidRecord(): boolean {
        return false;
    }

    isValidField(fieldName: string): boolean {
        return false;
    }

    next(): boolean {
        return false;
    }

    orderBy(fieldName: string): void {}

    orderByDesc(fieldName: string): void {}

    operation() : string{
        return null;
    }

    query(): void {}

    setLimit(limit: number): void {}

    setValue(fieldName: string, value: any): void {}

    update(): string {
        return "";
    }

    updateMultiple(): void {}
}

