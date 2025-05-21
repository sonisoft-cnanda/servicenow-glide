import { Context } from '../imports/Context';
import { Function } from '../imports/Function';
import { GlideScriptableInputStream } from '../imports/GlideScriptableInputStream';
export declare class RESTAPIRequestBody {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean);
    hasNext(): boolean;
    nextEntry(): any;
    dataStream: GlideScriptableInputStream;
    dataString: string;
    data: any;
}
