import { UriMatcherResponse } from "./UriMatcherResponse";

export class UriMatcher {
    constructor() {  }
    match(uri?: string, scheme?: string, hosts?: Array<any>, paths?: Array<any>, fragments?: Array<any>, disallowQueryParameters?: boolean): UriMatcherResponse {
        return null as any;
    }
}
