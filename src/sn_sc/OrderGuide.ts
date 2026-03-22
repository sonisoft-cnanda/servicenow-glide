import { Context } from '../imports/Context'
import { Function } from '../imports/Function'

export class OrderGuide {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    getID(): string {
        return "";
    }
    init(request?: Record<any, any>): Record<any, any> {
        return {} as any;
    }
    isIncludeItems(): boolean {
        return false;
    }
    isSequencedGuide(): boolean {
        return false;
    }
    isTwoStep(): boolean {
        return false;
    }
    isUseCustomCart(): boolean {
        return false;
    }
    navigateFromMap(itemDetails?: Record<any, any>): void {
        
    }
}
