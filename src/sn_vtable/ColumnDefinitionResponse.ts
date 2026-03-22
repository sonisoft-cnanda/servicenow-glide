import { Context } from "../imports/Context";
import { ColumnDefinition } from "./ColumnDefinition";

export class ColumnDefinitionResponse {
    constructor(cx: Context, args: any[], ctorObj: Function, inNewExpr: boolean) {  }
    getColumnDefinition(): ColumnDefinition {
        return null as any;
    }
    getErrorMessage(): string {
        return "";
    }
    isSuccessful(): boolean {
        return false;
    }
}
