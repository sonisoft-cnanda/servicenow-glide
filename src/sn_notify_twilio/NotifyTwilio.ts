import { Context } from '../imports/Context'
import { Function } from '../imports/Function'

export class NotifyTwilio {
    constructor(cx?: Context, args?: any[], funObj?: Function, inNewExpr?: boolean) {  }
    disconnectTwilio(): boolean {
        return false;
    }
    getPhoneNumbers(): Array<any> {
        return [];
    }
    validateCredentials(accountSID?: string, accountToken?: string, displayErrorMessages?: boolean): boolean {
        return false;
    }
}
