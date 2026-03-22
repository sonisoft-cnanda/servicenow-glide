import { Context } from '../imports/Context'
import { Function } from '../imports/Function'

export class CMDBGroupAPI {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    static enqueueEvent(groupSysId?: string, operation?: string): void {
        
    }
    static generateEvents(): void {
        
    }
    static getAllCI(groupSysId?: string, requireCompleteSet?: boolean, requireAllQueryNodesCis?: boolean): string {
        return "";
    }
    static getAllCIFromQueryBuilder(groupSysId?: string, requireCompleteSet?: boolean, requireAllQueryNodesCis?: boolean): string {
        return "";
    }
    static getEventQueue(): string {
        return "";
    }
    static getManualCIList(groupSysId?: string, requireCompleteSet?: boolean): string {
        return "";
    }
    static getSavedQueryIdList(groupSysId?: string, requireCompleteSet?: boolean): string {
        return "";
    }
    static setManualCIList(groupSysId?: string, ciSysIds?: string): string {
        return "";
    }
    static setSavedQueryIdList(groupSysId?: string, queryIds?: string): string {
        return "";
    }
}
