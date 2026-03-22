export class ProcessorPolicyUtil {
    constructor() {  }
    getSupportedProcessors(): string[] {
        return [];
    }
    isAuthProfileSupported(processorSysId?: string): boolean {
        return false;
    }
}
