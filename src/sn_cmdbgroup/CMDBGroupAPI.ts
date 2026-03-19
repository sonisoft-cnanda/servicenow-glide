import { Context } from '../imports/Context';
import { Function } from '../imports/Function';

export class CMDBGroupAPI {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {}
    enqueueEvent(groupSysId?: string, operation?: string): void {
        
    }
    generateEvents(): void {
        
    }
    getAllCI(groupSysId?: string, requireCompleteSet?: boolean, requireAllQueryNodesCis?: boolean): string {
        return "";
    }
    getAllCIFromQueryBuilder(groupSysId?: string, requireCompleteSet?: boolean, requireAllQueryNodesCis?: boolean): string {
        return "";
    }
    getEventQueue(): string {
        return "";
    }
    getManualCIList(groupSysId?: string, requireCompleteSet?: boolean): string {
        return "";
    }
    getSavedQueryIdList(groupSysId?: string, requireCompleteSet?: boolean): string {
        return "";
    }
    setManualCIList(groupSysId?: string, ciSysIds?: string): string {
        return "";
    }
    setSavedQueryIdList(groupSysId?: string, queryIds?: string): string {
        return "";
    }
}
