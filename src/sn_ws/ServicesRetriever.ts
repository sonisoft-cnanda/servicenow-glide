import { Context } from "../imports/Context";
import { ServiceInfo } from "./ServiceInfo";
import { Function } from "../imports/Function";

export class ServicesRetriever {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    getServices(namespace?: string, includeInternalAPIs?: boolean): ServiceInfo[] {
        return [];
    }
}
