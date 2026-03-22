import { Context } from "../imports/Context";

export class GlideEnvironmentMigrationPreflight {
    constructor(cx: Context, args: any[], ctorObj: Function, inNewExpr: boolean) {  }
    validate(object: any): Array<Map<string, string>> {
        return [];
    }
}
