import { Query } from './Query.js';
export declare class GlideQueryString {
    constructor(tableName?: string, query?: string);
    deserialize(): Query;
    getTerms(): Array<any>;
    init(tableName?: string, query?: string): void;
    removeGroupBy(): string;
    serialize(q?: Query): string;
    setOmitInactive(b?: boolean): void;
    toXML(root?: Element): void;
}
//# sourceMappingURL=GlideQueryString.d.ts.map