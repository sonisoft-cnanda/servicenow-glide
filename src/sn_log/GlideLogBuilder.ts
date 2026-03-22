import { Context } from "../imports/Context";

export class GlideLogBuilder {
    constructor(cx: Context, args: any[], ctorObj: Function, inNewExpr: boolean) {  }
    log(message: string, arg1?: any, arg2?: any, arg3?: any, arg4?: any, arg5?: any): void {
        
    }
    withBroadcast(broadcast: boolean): GlideLogBuilder {
        return null as any;
    }
    withContext(key: string, value: string): GlideLogBuilder {
        return null as any;
    }
    withException(t: any): GlideLogBuilder {
        return null as any;
    }
    withLoggerName(name: string): GlideLogBuilder {
        return null as any;
    }
    withPrintableContext(keys: Array<string>): GlideLogBuilder {
        return null as any;
    }
}
