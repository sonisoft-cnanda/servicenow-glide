import { StringSet } from './StringSet';

export class IdentificationEngineScriptableApi {
    compactIREMutexTable(): void {
        
    }
    compareIREStaticToDynamic(source?: string, json?: string, options?: Record<any, any>): string {
        return "";
    }
    createOrUpdateCI(source?: string, json?: string): string {
        return "";
    }
    createOrUpdateCIEnhanced(source?: string, json?: string, options?: Record<any, any>): string {
        return "";
    }
    getIdentifierEntryInfo(sysId?: string): string {
        return "";
    }
    getLookupRuleTablesForClass(className?: string): StringSet {
        return new StringSet();
    }
    identifyCI(json?: string): string {
        return "";
    }
    identifyCIEnhanced(source?: string, json?: string, options?: Record<any, any>): string {
        return "";
    }
    runIdentificationAudit(gr?: any): void {
        
    }
    runIdentificationContext(contextId?: string, ieLevelString?: string, serviceCacheLevelString?: string): string {
        return "";
    }
    validateExcludedFields(fields?: string, isIndependent?: boolean): Array<string> {
        return new Array<string>();
    }
}
