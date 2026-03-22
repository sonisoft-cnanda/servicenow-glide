import { Context } from "../imports/Context";
import { Function } from "../imports/Function";
import { GlideScriptableInputStream } from "../types/GlideScriptableInputStream";

export class RESTAPIRequestBody {
    dataStream: GlideScriptableInputStream = null as any;
    dataString: string = "";
    data: any = null as any;
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    hasNext(): boolean {
        return false;
    }
    nextEntry(): any {
        return null as any;
    }
}
