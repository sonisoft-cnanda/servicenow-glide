import { Context } from '../imports/Context'
import { Function } from '../imports/Function'

export class OfflineSchedule {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    static isEnabled(): boolean {
        return false;
    }
    static scheduleOfflinePayloadGeneration(): void {
        
    }
}
