import { SncProbe } from "../types/SncProbe";

export class CAPIOrchestratorServiceScript {
    constructor() {  }
    executeApi(provider?: string, version?: string, credentialLookup?: string, interfaceName?: string, methodName?: string, endpointURL?: string, inputParameters?: string, invokedBy?: string, serviceAccountLookup?: string, locationName?: string): string {
        return "";
    }
    getMethodParameters(interfaceName?: string, methodName?: string): string {
        return "";
    }
    getResult(contextKey?: string): any {
        return null as any;
    }
    handleResult(output?: SncProbe): void {
        
    }
    resolveMid(appName?: string, providerName?: string, locationName?: string): string {
        return "";
    }
}
