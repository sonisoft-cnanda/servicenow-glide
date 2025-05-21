export declare class ConfigurationItemBaseUtilCmn {
    private DEFAULT_IRE_SOURCE;
    private SEPARATOR;
    private useIRE;
    private UNMATCHED_CI_CLASS_NAME;
    constructor();
    createCIThroughIRE(sourceID: string, source: string, payload: any, integration: any, domainID: string, integrationRun: string, detailResponse: any): string | null;
    createItemPayload(ciInfo: any, className: string): any;
    getSysObjectSourceInfo(ciInfo: any, value: string): any;
    getSettings(): any;
    getOptions(): any;
    createCIUsingGlide(payload: any, integration: any, domainID: string, detailResponse: any): string | null;
    createPayload(ciInfo: any): void;
    hasSysId(output: any): boolean;
    hasError(output: any): boolean;
    isEnchancedIREApiAvailable(): boolean;
    private _getInternalId;
    private _setValues;
    getMappingEntries(integration: string, targetTable: string): any;
    private _cacheMappingEntries;
    type(): string;
}
//# sourceMappingURL=ConfigurationItemBaseUtilCmn.d.ts.map