import { Context } from "../imports/Context";

export class GlideLogConfigBuilder {
    constructor(cx: Context, args: any[], ctorObj: Function, inNewExpr: boolean) {  }
    register(): void {
        
    }
    validate(): Array<string> {
        return [];
    }
    withExpiration(ttlInMin: number): GlideLogConfigBuilder {
        return null as any;
    }
    withFilters(filters: Map<string, string>): GlideLogConfigBuilder {
        return null as any;
    }
    withLayout(layout: string): GlideLogConfigBuilder {
        return null as any;
    }
}
