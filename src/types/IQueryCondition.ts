export interface IQueryCondition {
    addCondition(name?: string, oper?: string, value?: any): IQueryCondition ;
    addOrCondition(name?: string, oper?: string, value?: any): IQueryCondition;
}
