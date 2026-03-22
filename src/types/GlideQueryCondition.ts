import {
  SafeTableField,
  SafeTableFieldKey,
} from "./_GlideRecordHelpers/SafeTableTypes";

export class GlideQueryCondition<T extends keyof Tables | string = string> {
    constructor() {  }
    addOrCondition(or: GlideQueryCondition<T>): void;
    addOrCondition<F extends SafeTableFieldKey<T & string>, V extends SafeTableField<T & string, F & string>>(name: F, value: V): GlideQueryCondition<T>;
    addOrCondition<F extends SafeTableFieldKey<T & string>, V extends SafeTableField<T & string, F & string>>(name: F, operator: any, value: V): GlideQueryCondition<T>;
    addOrCondition(...args: any[]): any {
        
    }
    addSystemOrCondition<F extends SafeTableFieldKey<T & string>, V extends SafeTableField<T & string, F & string>>(name: F, operator: any, value: V): GlideQueryCondition<T> {
        return {} as any;
    }
    addUserOrCondition<F extends SafeTableFieldKey<T & string>, V extends SafeTableField<T & string, F & string>>(name: F, operator: any, value: V): GlideQueryCondition<T> {
        return {} as any;
    }
    addCondition(and: GlideQueryCondition<T>): void;
    addCondition<F extends SafeTableFieldKey<T & string>, V extends SafeTableField<T & string, F & string>>(name: F, value: V): GlideQueryCondition<T>;
    addCondition<F extends SafeTableFieldKey<T & string>, V extends SafeTableField<T & string, F & string>>(name: F, oper: string, value: V): GlideQueryCondition<T>;
    addCondition<F extends SafeTableFieldKey<T & string>, V extends SafeTableField<T & string, F & string>>(name: F, operator: any, value: V): GlideQueryCondition<T>;
    addCondition(...args: any[]): any {
        
    }
    addSystemCondition<F extends SafeTableFieldKey<T & string>, V extends SafeTableField<T & string, F & string>>(name: F, operator: any, value: V): GlideQueryCondition<T> {
        return {} as any;
    }
    addUserCondition<F extends SafeTableFieldKey<T & string>, V extends SafeTableField<T & string, F & string>>(name: F, operator: any, value: V): GlideQueryCondition<T> {
        return {} as any;
    }
    addQueryHint(name: string): void;
    addQueryHint(name: string, value: any): void;
    addQueryHint(...args: any[]): any {
        
    }
}
