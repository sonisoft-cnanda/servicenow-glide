import { Context } from "../imports/Context";
import { Function } from "../imports/Function";
import { MIFSenderReceipt } from "./MIFSenderReceipt";
import { TrustDetails } from "./TrustDetails";

export class TrustChangeSender {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    handleTrustAddition(scriptableTrustDetails?: TrustDetails): MIFSenderReceipt {
        return null as any;
    }
    handleTrustRemoval(scriptableTrustDetails?: TrustDetails): MIFSenderReceipt {
        return null as any;
    }
    handleTrustUpdate(oldDetails?: TrustDetails, newDetails?: TrustDetails): Array<any> {
        return [];
    }
}
