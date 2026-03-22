import { Context } from "../imports/Context";

export class SimpleResponse {
    constructor(cx: Context, args: any[], ctorObj: Function, inNewExpr: boolean) {  }
    getErrorMessage(): string {
        return "";
    }
    isSuccessful(): boolean {
        return false;
    }
}
