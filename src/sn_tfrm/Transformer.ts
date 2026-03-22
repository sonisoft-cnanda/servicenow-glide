import { Context } from "../imports/Context";

export class Transformer {
    constructor(cx: Context, args: any[], ctorObj: Function, inNewExpr: boolean) {  }
    getRow(): Record<any, any> {
        return {} as any;
    }
    transform(): boolean {
        return false;
    }
}
