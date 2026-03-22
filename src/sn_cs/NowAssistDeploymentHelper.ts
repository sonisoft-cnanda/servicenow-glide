import { Context } from '../imports/Context'
import { Function } from '../imports/Function'

export class NowAssistDeploymentHelper {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    static getModelTypeForPortal(urlSuffix?: string): string {
        return "";
    }
    static isNowAssistInVAEnabled(): boolean {
        return false;
    }
}
