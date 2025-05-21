import { Context } from '../imports/Context';
import { Function } from '../imports/Function';
import { RESTAPIRequestBody } from '../imports/RESTAPIRequestBody';
export declare class RESTAPIRequest {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean);
    getHeader(headerName?: string): string;
    getRequestedQueryCategory(): string;
    getSupportedResponseContentTypes(): any;
    body: RESTAPIRequestBody;
    queryParams: any;
    pathParams: any;
    headers: any;
    queryString: string;
    url: string;
    uri: string;
}
