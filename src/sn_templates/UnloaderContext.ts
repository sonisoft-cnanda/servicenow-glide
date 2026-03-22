import { PayloadScanVariable } from "./PayloadScanVariable";

export class UnloaderContext {
    constructor() {  }
    add(originalValue?: string, type?: any, name?: any): PayloadScanVariable {
        return null as any;
    }
    get(variableName?: string): PayloadScanVariable {
        return null as any;
    }
    getVariablesByType(type?: string): PayloadScanVariable[] {
        return [];
    }
}
