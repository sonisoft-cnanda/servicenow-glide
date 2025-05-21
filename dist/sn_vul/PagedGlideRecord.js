"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagedGlideRecord = void 0;
const glide_1 = require("@servicenow/glide");
class PagedGlideRecord {
    constructor(table) {
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
    setCategory(categoryName) {
        this.categoryName = categoryName;
    }
    setSortField(field) {
        this.sortField = field;
    }
    setPageSize(size) {
        this.pageSize = (size <= 0 ? 1 : size);
    }
    setAccessorField(accessorField) {
        this.accessorField = accessorField;
    }
    addQuery(field, arg1, arg2) {
        const query = arg2 ? [field, arg1, arg2] : [field, arg1];
        this.queries.push(query);
    }
    addEncodedQuery(encodedQuery) {
        this.encodedQueries.push(encodedQuery);
    }
    next() {
        if (glide_1.gs.nil(this.accessorField)) {
            this.accessorField = this.sortField;
        }
        if (glide_1.gs.nil(this.sortField)) {
            glide_1.gs.warn("[PagedGlideRecord] Must have a sort field for paging");
            return "";
        }
        if (this.gr === null || this.currentRow === this.pageSize) {
            let sortFieldLimit = 0;
            if (this.currentRow === this.pageSize) {
                sortFieldLimit = parseInt(this.gr.getValue(this.accessorField), 10);
            }
            this.currentRow = 0;
            this.gr = new glide_1.GlideRecord(this.table);
            for (const query of this.queries) {
                if (query.length === 3) {
                    this.gr.addQuery(query[0], query[1], query[2]);
                }
                else {
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
            if (!glide_1.gs.nil(this.categoryName)) {
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
    type() {
        return 'PagedGlideRecord';
    }
}
exports.PagedGlideRecord = PagedGlideRecord;
//# sourceMappingURL=PagedGlideRecord.js.map