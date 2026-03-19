import { GlideRecord, GlideDateTime, gs } from '@servicenow/glide';
import { UnmatchedCIItemUtilCmn, HostUtilCommon, CIIdentify } from './';

export class ImportHostCmn {
    private ciInsert: boolean;
    private ciUpdate: boolean;
    private ciIgnore: boolean;
    private ciCreationScriptCache: { [key: string]: any };
    private hostTagsImportEnabled: boolean;
    private unmatchedCIIREUtil: any;
    private hostUtil: any;
    private ciIdentify: any;

    constructor(unmatchedCIIREUtil: any) {
        this.ciInsert = false;
        this.ciUpdate = false;
        this.ciIgnore = false;
        this.ciCreationScriptCache = {};
        this.hostTagsImportEnabled = this._isHostTagsImportEnabled();
        this.unmatchedCIIREUtil = !gs.nil(unmatchedCIIREUtil) ? unmatchedCIIREUtil : new UnmatchedCIItemUtilCmn();
        this.hostUtil = new HostUtilCommon();
        this.ciIdentify = new CIIdentify();
    }

    public hostImport(
        sourceImplement: string,
        payload: any,
        idField: string,
        integrationRun: string,
        updateCI: boolean,
        notLookupSrc: boolean,
        lastScanDate: string,
        lastAuthScanDate: string,
        lastCompScanDate: string,
        hostInfoGR: GlideRecord,
        updateSrcData?: boolean,
        ignoreCICreation?: boolean,
        customDiscoveredItemFields?: any
    ): any {
        return null;
    }

    public evaluateScriptFromHostImportMaps(payload: any, integration: string): void {}

    public createCI(discoveredItem: any, payload: any): any {
        return null;
    }

    private _getCICreationScript(assetCategory: string, integrationAssetType: string): any {
        return null;
    }

    private _lookupSource(source: string, sourceID: string, tags: any, pendingRetry: boolean): any {
        return null;
    }

    private _checkSourceDataUpdated(incomingPayload: any, sourceData: string, hostInfoGR: GlideRecord, integrationRun: string): boolean {
        return false;
    }

    private _isHostTagsImportEnabled(): boolean {
        return false;
    }

    private _addFieldsToSrcCI(srcCI: GlideRecord, fieldMap: any, updateOtherFields: boolean): any {
        return {
            srcCI: srcCI,
            updated: false
        };
    }

    private _checkUpdate(integration: string, payload: any, updateCI: GlideRecord): void {}

    private _createSrc(
        ci: GlideRecord,
        source: string,
        sourceID: string,
        payload: any,
        integrationRun: string,
        state: string,
        lookupRule: string,
        lastScanDate: string,
        lastAuthScanDate: string,
        lastCompScanDate: string,
        ciList: any,
        integration: string,
        customDiscoveredItemFields: any,
        matchingType: string,
        additionalInformation: string
    ): string {
        return '';
    }

    private _createCI(
        source: string,
        sourceID: string,
        payload: any,
        integrationRun: string,
        notLookupSrc: boolean,
        lastScanDate: string,
        lastAuthScanDate: string,
        lastCompScanDate: string,
        customDiscoveredItemFields: any,
        assetCategory: string
    ): any {
        return null;
    }

    public getMappedValue(key: string, integration: string, payload: any): string {
        return '';
    }

    public updateFieldsforDiscoveredItem(discoveredItem: GlideRecord, ci: GlideRecord, payload: any): void {}

    public type(): string {
        return 'ImportHostCmn';
    }
}