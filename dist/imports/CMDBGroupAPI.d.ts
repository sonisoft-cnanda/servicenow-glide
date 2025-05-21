import { Context } from './Context.js';
import { Function } from './Function.js';
export declare class CMDBGroupAPI {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean);
    enqueueEvent(groupSysId?: string, operation?: string): void;
    generateEvents(): void;
    getAllCI(groupSysId?: string, requireCompleteSet?: boolean, requireAllQueryNodesCis?: boolean): string;
    getAllCIFromQueryBuilder(groupSysId?: string, requireCompleteSet?: boolean, requireAllQueryNodesCis?: boolean): string;
    getEventQueue(): string;
    getManualCIList(groupSysId?: string, requireCompleteSet?: boolean): string;
    getSavedQueryIdList(groupSysId?: string, requireCompleteSet?: boolean): string;
    setManualCIList(groupSysId?: string, ciSysIds?: string): string;
    setSavedQueryIdList(groupSysId?: string, queryIds?: string): string;
}
//# sourceMappingURL=CMDBGroupAPI.d.ts.map