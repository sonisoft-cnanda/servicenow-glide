import { IQueryCondition } from './IQueryCondition';

export class GlideQueryCondition implements IQueryCondition {
    constructor() {}
    addCondition(name?: string, oper?: string, value?: any): IQueryCondition {
        return null;
    }
    addOrCondition(name?: string, oper?: string, value?: any): IQueryCondition {
        return null;
    }
}
