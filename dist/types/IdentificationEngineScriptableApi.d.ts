import { StringSet } from '../imports/StringSet.js';
export declare class IdentificationEngineScriptableApi {
    compactIREMutexTable(): void;
    compareIREStaticToDynamic(source?: string, json?: string, options?: Record<any, any>): string;
    createOrUpdateCI(source?: string, json?: string): string;
    createOrUpdateCIEnhanced(source?: string, json?: string, options?: Record<any, any>): string;
    getIdentifierEntryInfo(sysId?: string): string;
    getLookupRuleTablesForClass(className?: string): StringSet;
    identifyCI(json?: string): string;
    identifyCIEnhanced(source?: string, json?: string, options?: Record<any, any>): string;
    runIdentificationAudit(gr?: any): void;
    runIdentificationContext(contextId?: string, ieLevelString?: string, serviceCacheLevelString?: string): string;
    validateExcludedFields(fields?: string, isIndependent?: boolean): Array<string>;
}
//# sourceMappingURL=IdentificationEngineScriptableApi.d.ts.map