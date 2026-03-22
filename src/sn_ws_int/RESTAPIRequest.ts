import { Context } from "../imports/Context";
import { Function } from "../imports/Function";
import { RESTAPIRequestBody } from "./RESTAPIRequestBody";

export class RESTAPIRequest {
    body: RESTAPIRequestBody = null as any;
    queryParams: any = null as any;
    pathParams: any = null as any;
    headers: any = null as any;
    queryString: string = "";
    url: string = "";
    uri: string = "";
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    getHeader(headerName?: string): string {
        return "";
    }
    getRequestedQueryCategory(): string {
        return "";
    }
    getSupportedResponseContentTypes(): any {
        return null as any;
    }
}
