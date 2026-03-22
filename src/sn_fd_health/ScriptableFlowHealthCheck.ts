import { Context } from '../imports/Context'
import { Function } from '../imports/Function'

export class ScriptableFlowHealthCheck {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    static getVersion(): string {
        return "";
    }
    static validateActionInstanceSnapshots(flowSysId?: string): Record<any, any> {
        return {} as any;
    }
}
