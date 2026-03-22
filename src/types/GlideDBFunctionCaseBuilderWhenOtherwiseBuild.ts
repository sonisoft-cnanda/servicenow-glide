import { GlideDBFunctionCaseBuilderBuild } from "./GlideDBFunctionCaseBuilderBuild";
import { GlideDBFunctionCaseBuilderThen } from "./GlideDBFunctionCaseBuilderThen";

export class GlideDBFunctionCaseBuilderWhenOtherwiseBuild {
    constructor() {  }
    build(): string {
        return "";
    }
    otherwise(value: string): GlideDBFunctionCaseBuilderBuild {
        return null as any;
    }
    when(param: string): GlideDBFunctionCaseBuilderThen {
        return null as any;
    }
    whenCompare(left: string, op: string, right: string): GlideDBFunctionCaseBuilderThen {
        return null as any;
    }
    whenEqual(left: string, right: string): GlideDBFunctionCaseBuilderThen {
        return null as any;
    }
}
