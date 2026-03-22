import { AdditionalInputDataScriptable } from "./AdditionalInputDataScriptable";

export class AdditionalDataScriptable {
    constructor() {  }
    getAdditionalDataForInput(inputName?: string): AdditionalInputDataScriptable {
        return null as any;
    }
    getAdditionalInputDataMap(): Record<any, any> {
        return {} as any;
    }
}
