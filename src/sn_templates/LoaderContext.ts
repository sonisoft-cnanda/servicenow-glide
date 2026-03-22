import { PayloadScanVariable } from "./PayloadScanVariable";

export class LoaderContext {
    constructor() {  }
    get(variableName?: string): PayloadScanVariable {
        return null as any;
    }
    getValue(variableName?: string): string {
        return "";
    }
    getVariablesByType(type?: string): PayloadScanVariable[] {
        return [];
    }
}
