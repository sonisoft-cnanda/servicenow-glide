import { Context } from '../imports/Context'
import { Function } from '../imports/Function'

export class ScriptableTextToSpokeService {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    createAPIRecord(spec_name?: string, scopeId?: string): string {
        return "";
    }
    createOperation(operationOpenAPISpec?: string, openAPISysId?: string, tag?: string, scopeId?: string): string {
        return "";
    }
    deleteOperation(operationId?: string, scopeId?: string): boolean {
        return false;
    }
}
