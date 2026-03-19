import { Query } from '../imports/Query';

export class GlideQueryString {
    constructor(tableName?: string, query?: string) {}
    deserialize(): Query {
        return new Query();
    }
    getTerms(): Array<any> {
        return new Array();
    }
    init(tableName?: string, query?: string): void {
        
    }
    removeGroupBy(): string {
        return "";
    }
    serialize(q?: Query): string {
        return "";
    }
    setOmitInactive(b?: boolean): void {
        
    }
    toXML(root?: Element): void {
        
    }
}
