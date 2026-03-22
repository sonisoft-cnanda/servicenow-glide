import { Context } from "../imports/Context";
import { NativeObject } from "../imports/NativeObject";
import { Function } from "../imports/Function";
import { MIFBatchObjectDefinition } from "./MIFBatchObjectDefinition";

export class MIFDataManager {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    batchInsert(tableName?: string, dto?: MIFBatchObjectDefinition): number {
        return 0;
    }
    tableToJSON(tableName?: string, dataSizeLimit?: number, encodedFilterCondition?: string): NativeObject {
        return null as any;
    }
}
