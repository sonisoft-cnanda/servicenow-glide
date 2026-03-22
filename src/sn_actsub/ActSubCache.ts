import { Context } from '../imports/Context'
import { Function } from '../imports/Function'

export class ActSubCache {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    getActivityGroups(key?: string): Record<any, any> {
        return {} as any;
    }
    getActivitySourceMappings(key?: string): Record<any, any> {
        return {} as any;
    }
    getActivityTypes(key?: string): Record<any, any> {
        return {} as any;
    }
    putActivityGroups(key?: string, value?: Record<any, any>): void {
        
    }
    putActivitySourceMappings(key?: string, value?: Record<any, any>): void {
        
    }
    putActivityTypes(key?: string, value?: Record<any, any>): void {
        
    }
}
