import { Context } from '../imports/Context'
import { Function } from '../imports/Function'
import { Scriptable } from '../imports/Scriptable'

export class UserCriteriaLoader {
    static get(cx?: Context, thisObj?: Scriptable, args?: any[], funObj?: Function): Scriptable {
        return null as any;
    }
    static getAllUserCriteria(cx?: Context, thisObj?: Scriptable, args?: any[], funObj?: Function): Array<any> {
        return [];
    }
    static getMatchingCriteria(userId?: string, criteriaIds?: Array<any>): string[] {
        return [];
    }
    static getUserCriteria(cx?: Context, thisObj?: Scriptable, args?: any[], funObj?: Function): Array<any> {
        return [];
    }
    static userMatches(userId?: string, criteriaIds?: Array<any>): boolean {
        return false;
    }
}
