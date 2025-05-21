import { GlideRecord } from '@servicenow/glide';
export declare class ImportHostCmn {
    private ciInsert;
    private ciUpdate;
    private ciIgnore;
    private ciCreationScriptCache;
    private hostTagsImportEnabled;
    private unmatchedCIIREUtil;
    private hostUtil;
    private ciIdentify;
    constructor(unmatchedCIIREUtil: any);
    hostImport(sourceImplement: string, payload: any, idField: string, integrationRun: string, updateCI: boolean, notLookupSrc: boolean, lastScanDate: string, lastAuthScanDate: string, lastCompScanDate: string, hostInfoGR: GlideRecord, updateSrcData?: boolean, ignoreCICreation?: boolean, customDiscoveredItemFields?: any): any;
    evaluateScriptFromHostImportMaps(payload: any, integration: string): void;
    createCI(discoveredItem: any, payload: any): any;
    private _getCICreationScript;
    private _lookupSource;
    private _checkSourceDataUpdated;
    private _isHostTagsImportEnabled;
    private _addFieldsToSrcCI;
    private _checkUpdate;
    private _createSrc;
    private _createCI;
    getMappedValue(key: string, integration: string, payload: any): string;
    updateFieldsforDiscoveredItem(discoveredItem: GlideRecord, ci: GlideRecord, payload: any): void;
    type(): string;
}
//# sourceMappingURL=ImportHostCmn.d.ts.map