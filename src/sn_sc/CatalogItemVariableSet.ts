import { Context } from '../imports/Context'
import { NativeObject } from '../imports/NativeObject'
import { Function } from '../imports/Function'

export class CatalogItemVariableSet {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    create(standardUpdate?: boolean): string {
        return "";
    }
    deleteRecord(standardUpdate?: boolean): void {
        
    }
    getFlatQuestions(args?: NativeObject): Array<any> {
        return [];
    }
    getLayout(includeBreakQuestion?: boolean): Array<any> {
        return [];
    }
    read(columns?: Record<any, any>, standardUpdate?: boolean): Record<any, any> {
        return {} as any;
    }
    setAttributes(attributes?: Record<any, any>): void {
        
    }
    setTableName(tableName?: string): void {
        
    }
    update(columnValues?: Record<any, any>, standardUpdate?: boolean): void {
        
    }
}
