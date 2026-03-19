import { GlideRecord, gs } from '@servicenow/glide';

export class ConfigurationItemBaseUtilCmn {
    private DEFAULT_IRE_SOURCE: string;
    private SEPARATOR: string;
    private useIRE: boolean;
    private UNMATCHED_CI_CLASS_NAME: string;

    constructor() {
        this.DEFAULT_IRE_SOURCE = 'VR-Unknown';
        this.SEPARATOR = '|';
        this.useIRE = gs.getProperty('sn_sec_cmn.ci_creation_through_IRE', 'true') === 'true';
        this.UNMATCHED_CI_CLASS_NAME = 'sn_sec_cmn_unmatched_ci';
    }

    public createCIThroughIRE(
        sourceID: string,
        source: string,
        payload: any,
        integration: any,
        domainID: string,
        integrationRun: string,
        detailResponse: any
    ): string | null {
        return null;
    }

    public createItemPayload(ciInfo: any, className: string): any {
        return null;
    }

    public getSysObjectSourceInfo(ciInfo: any, value: string): any {
        return null;
    }

    public getSettings(): any {
        return null;
    }

    public getOptions(): any {
        return null;
    }

    public createCIUsingGlide(payload: any, integration: any, domainID: string, detailResponse: any): string | null {
        return null;
    }

    public createPayload(ciInfo: any): void {}

    public hasSysId(output: any): boolean {
        return false;
    }

    public hasError(output: any): boolean {
        return false;
    }

    public isEnchancedIREApiAvailable(): boolean {
        return false;
    }

    private _getInternalId(value: string, nativeKey: string): string {
        return '';
    }

    private _setValues(values: any, integration: any, payload: any, targetTable: string): void {}

    public getMappingEntries(integration: string, targetTable: string): any {
        return null;
    }

    private _cacheMappingEntries(integration: string, targetTable: string): any {
        return null;
    }

    public type(): string {
        return 'ConfigurationItemBaseUtilCmn';
    }
}