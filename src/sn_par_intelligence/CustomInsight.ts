import { Context } from '../imports/Context'
import { Function } from '../imports/Function'

export class CustomInsight {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    create(customType?: string, uuid?: string, data?: string): string {
        return "";
    }
    getInsights(customType?: string, uuid?: string, fromDate?: number, toDate?: number): string {
        return "";
    }
    updateData(insightSysID?: string, data?: string): number {
        return 0;
    }
}
