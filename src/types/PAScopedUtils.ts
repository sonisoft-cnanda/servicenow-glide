import { Context } from '../imports/Context'
import { Function } from '../imports/Function'
import { Scriptable } from '../imports/Scriptable'

export class PAScopedUtils {
    static isEncodedQueryValid(cx?: Context, thisObj?: Scriptable, args?: any[], funObj?: Function): boolean {
        return false;
    }
    static isPremium(cx?: Context, thisObj?: Scriptable, args?: any[], funObj?: Function): boolean {
        return false;
    }
}
