import { GlideRecord, gs } from '@servicenow/glide';

export class HostUtilCommon {
    private _ireSources: string[];

    constructor() {
        this._ireSources = [];
        if (this._ireSources.length === 0) {
            this._cacheIRESources();
        }
    }

    public getDiscoveredItemState(ci: GlideRecord): string {
        return '';
    }

    public initializeHostAttributeRecord(host: any, hostAttribTable: string): GlideRecord | null {
        return null;
    }

    private _cacheIRESources(): void {}

    private _addIRESourceToCache(name: string): void {
        this._ireSources.push(name);
    }

    public type(): string {
        return 'HostUtilCommon';
    }
}