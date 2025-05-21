import { IQueryCondition } from '../imports/IQueryCondition';

export class GlideQueryCondition implements IQueryCondition {
    constructor() {}
    addCondition(name?: string, oper?: string, value?: any): IQueryCondition {
        return new GlideQueryCondition();;
    }
    addOrCondition(name?: string, oper?: string, value?: any): IQueryCondition {
        return new GlideQueryCondition();;
    }
}
