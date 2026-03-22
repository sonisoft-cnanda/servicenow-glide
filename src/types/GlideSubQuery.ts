import { GlideQueryCondition } from "./GlideQueryCondition";

export class GlideSubQuery {
    constructor();
    constructor(table: string, name: string, returnField: string);
    constructor(...args: any[]) {  }
    addCondition(name: string, operator: string, value: any): GlideQueryCondition {
        return null as any;
    }
    addOrCondition(name: string, operator: string, value: any): GlideQueryCondition {
        return null as any;
    }
    addQueryHint(name: string): void;
    addQueryHint(name: string, value: any): void;
    addQueryHint(...args: any[]): any {
        
    }
}
