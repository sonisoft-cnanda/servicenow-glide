import { Context } from "../imports/Context";

export class TransformerDefinition {
    recordPath: string = "";
    basePath: string = "";
    name: string = "";
    id: string = "";
    constructor(cx: Context, args: any[], ctorObj: Function, inNewExpr: boolean) {  }
    validate(): boolean {
        return false;
    }
}
