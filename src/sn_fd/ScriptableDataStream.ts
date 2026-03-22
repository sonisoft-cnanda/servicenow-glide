import { Context } from '../imports/Context'
import { Function } from '../imports/Function'

export class ScriptableDataStream {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    close(): void {
        
    }
    getItemInPageIndex(): number {
        return 0;
    }
    getItemIndex(): number {
        return 0;
    }
    getPageIndex(): number {
        return 0;
    }
    hasNext(): boolean {
        return false;
    }
    next(): any {
        return null as any;
    }
}
