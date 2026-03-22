import { Context } from "../imports/Context";
import { Function } from "../imports/Function";
import { MIFSenderReceipt } from "./MIFSenderReceipt";

export class ManagerChangeSender {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    addManager(instanceName?: string, scopeId?: string): MIFSenderReceipt {
        return null as any;
    }
    rejectManagerRequest(instanceName?: string, scopeId?: string): MIFSenderReceipt {
        return null as any;
    }
    removeManager(instanceName?: string, scopeId?: string): MIFSenderReceipt {
        return null as any;
    }
    requestGlobalManagement(instanceName?: string): MIFSenderReceipt {
        return null as any;
    }
}
