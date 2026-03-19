import { GlideRecord, gs } from '@servicenow/glide';
import { ImportHostCmn } from '../sn_sec_cmn';

// @ts-ignore
export class ImportHost extends ImportHostCmn {
    constructor(unmatchedCIIREUtil?: any) {
        super(unmatchedCIIREUtil);
    }

    private _lookupSourceCI(source: string, sourceID: string): string | null {
        return null;
    }

    private _checkSourceDataUpdated(incomingPayload: any, discItemSrcData: string, hostInfoGR: GlideRecord, integrationRun: string): boolean {
        return false;
    }

    public isArray(value: any): boolean {
        return false;
    }

    private _isHostTagsImportEnabled(): boolean {
        return false;
    }

    public type(): string {
        return 'ImportHost';
    }
}