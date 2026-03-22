import { Context } from '../imports/Context'
import { Function } from '../imports/Function'

export class MIFUtils {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    checkTableScopes(tableNameA?: string, tableNameB?: string): boolean {
        return false;
    }
    getCurrentCustomerName(): string {
        return "";
    }
    getCurrentInstanceId(): string {
        return "";
    }
    getCurrentInstanceName(): string {
        return "";
    }
    isMIFV2EligibleToRun(): boolean {
        return false;
    }
}
