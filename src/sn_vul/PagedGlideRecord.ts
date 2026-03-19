import { GlideRecord, gs } from '@servicenow/glide';

export class PagedGlideRecord {
    private table: string;
    private queries: Array<[string, string, string?]>;
    private encodedQueries: string[];
    private categoryName: string;
    private sortField: string;
    private accessorField: string;
    private gr: GlideRecord | null;
    private pageSize: number;
    private currentRow: number;

    constructor(table: string) {
        this.table = table;
        this.queries = [];
        this.encodedQueries = [];
        this.categoryName = "";
        this.sortField = "";
        this.accessorField = "";
        this.gr = null;
        this.pageSize = 5000;
        this.currentRow = 0;
    }

    public setCategory(categoryName: string): void {
        this.categoryName = categoryName;
    }

    public setSortField(field: string): void {
        this.sortField = field;
    }

    public setPageSize(size: number): void {
        this.pageSize = (size <= 0 ? 1 : size);
    }

    public setAccessorField(accessorField: string): void {
        this.accessorField = accessorField;
    }

    public addQuery(field: string, arg1: string, arg2?: string): void {
        const query: [string, string, string?] = arg2 ? [field, arg1, arg2] : [field, arg1];
        this.queries.push(query);
    }

    public addEncodedQuery(encodedQuery: string): void {
        this.encodedQueries.push(encodedQuery);
    }

    public next(): string {
        if (gs.nil(this.accessorField)) {
            this.accessorField = this.sortField;
        }

        if (gs.nil(this.sortField)) {
            gs.warn("[PagedGlideRecord] Must have a sort field for paging");
            return "";
        }

        if (this.gr === null || this.currentRow === this.pageSize) {
            let sortFieldLimit = 0;
            if (this.currentRow === this.pageSize) {
                sortFieldLimit = parseInt(this.gr!.getValue(this.accessorField), 10);
            }
            this.currentRow = 0;
            this.gr = new GlideRecord(this.table);

            for (const query of this.queries) {
                if (query.length === 3) {
                    this.gr.addQuery(query[0], query[1], query[2]!);
                } else {
                    this.gr.addQuery(query[0], query[1]);
                }
            }

            for (const encodedQuery of this.encodedQueries) {
                this.gr.addEncodedQuery(encodedQuery);
            }

            if (sortFieldLimit !== 0) {
                this.gr.addQuery(this.sortField, ">", sortFieldLimit.toString());
            }

            this.gr.setLimit(this.pageSize);
            this.gr.orderBy(this.sortField);
            if (!gs.nil(this.categoryName)) {
               // this.gr.setCategory(this.categoryName);
            }
            this.gr.query();
        }

        if (this.gr.next()) {
            this.currentRow += 1;
            return this.gr.getValue(this.accessorField) + "";
        }

        return "";
    }

    public type(): string {
        return 'PagedGlideRecord';
    }
}