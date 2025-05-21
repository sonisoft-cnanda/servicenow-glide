export declare class PagedGlideRecord {
    private table;
    private queries;
    private encodedQueries;
    private categoryName;
    private sortField;
    private accessorField;
    private gr;
    private pageSize;
    private currentRow;
    constructor(table: string);
    setCategory(categoryName: string): void;
    setSortField(field: string): void;
    setPageSize(size: number): void;
    setAccessorField(accessorField: string): void;
    addQuery(field: string, arg1: string, arg2?: string): void;
    addEncodedQuery(encodedQuery: string): void;
    next(): string;
    type(): string;
}
//# sourceMappingURL=PagedGlideRecord.d.ts.map