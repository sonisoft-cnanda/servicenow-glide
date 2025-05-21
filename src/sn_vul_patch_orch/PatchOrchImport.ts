import { GlideRecord, gs } from '@servicenow/glide';

export class PatchOrchImport {
    private intInstance: string;
    private SOURCE: string;
    private DEVICE_COLLECTION: string;
    private PATCH_UPDATE_DEPLOYMENT: string;
    private PATCH_UPDATE: string;
    private DEVICE_COLLECTION_M2M: string;
    private DEVICE_UPDATE_M2M: string;
    private SOLUTION: string;
    private collectionCache: { [key: string]: string };
    private ciCache: { [key: string]: string };
    private patchCache: { [key: string]: string };
    private solutionCache: { [key: string]: string };

    constructor(instance: string, source: string) {
        this.intInstance = instance;
        this.SOURCE = source;
        this.DEVICE_COLLECTION = "sn_vul_patch_orch_collection";
        this.PATCH_UPDATE_DEPLOYMENT = "sn_vul_patch_orch_deployment";
        this.PATCH_UPDATE = "sn_vul_patch_orch_update";
        this.DEVICE_COLLECTION_M2M = "sn_vul_patch_orch_m2m_src_ci_collection";
        this.DEVICE_UPDATE_M2M = "sn_vul_patch_orch_m2m_src_ci_update";
        this.SOLUTION = "sn_vul_solution";
        this.collectionCache = {};
        this.ciCache = {};
        this.patchCache = {};
        this.solutionCache = {};
    }

    /**
     * Lookup the patch update record
     * @param patchUpdateId - unique identifier for patch
     */
    public lookupPatchUpdate(patchUpdateId: string): string | null {
        return null;
    }

    /**
     * Lookup the vulnerability solution
     * @param sourceId - bulletin or article Id
     */
    public lookupSolution(sourceId: string): string | null {
        return null;
    }

    /**
     * Lookup or create Discovered item record, this method will skip the
     * CI creation
     * @param integrationRun - current integration run
     * @param host - host object to lookup CI
     */
    public lookupOrCreateDiscoveredItem(integrationRun: string, host: any): string | null {
        return null;
    }

    /**
     * Lookup collection record
     * @param collectionId - unique id of collection
     */
    public lookupCollection(collectionId: string): string | null {
        return null;
    }

    /**
     * Create/Update collection record
     * @param collectionObj - object containing collection details
     */
    public createOrUpdateCollection(collectionObj: any): any {
        return {
            inserted: false,
            updated: false,
            unchanged: false,
            sysId: null
        };
    }

    /**
     * Create/Update deployment record
     * @param deploymentObj - object containing deployment details
     */
    public createOrUpdateDeployment(deploymentObj: any): any {
        return {
            inserted: false,
            updated: false,
            unchanged: false,
            sysId: null
        };
    }

    /**
     * Creates patch update record
     * @param patchUpdateId - unique Id of patch
     * @param patchObj - object with key as column name and value
     */
    public createPatchUpdate(patchUpdateId: string, patchObj: any): string | null {
        return null;
    }

    /**
     * Update patch update record
     * @param patchSysId - sys Id of patch
     * @param patchObj - object with key as column name and value
     */
    private _updatePatchUpdate(patchSysId: string, patchObj: any): boolean {
        return false;
    }

    /**
     * Create or Update patch update record
     * @param patchObj - object with key as column name and value
     */
    public createOrUpdatePatchUpdate(patchObj: any): any {
        return {
            inserted: false,
            updated: false,
            unchanged: false,
            sysId: null
        };
    }

    /**
     * Create/Update Device collection record
     * @param srcSysId - sys Id of discovered item
     * @param collectionSysId - sys Id of collection
     */
    public createOrLookupDeviceCollection(srcSysId: string, collectionSysId: string): boolean {
        return false;
    }

    /**
     * Create/Update Device patch update record
     * @param srcSysId - sys Id of discovered item
     * @param patchSysId - sys Id of patch
     * @param status - status of the patch
     */
    public createOrLookupDevicePatchUpdate(srcSysId: string, patchSysId: string, status: string): boolean {
        return false;
    }

    private _putInCache(cacheObj: { [key: string]: string }, key: string, value: string): void {
        cacheObj[key] = value;
    }

    private _getFromCache(cacheObj: { [key: string]: string }, key: string): string | undefined {
        return cacheObj[key];
    }

    /**
     * Returns html string for provided url
     * @param url - URL to be converted to HTML link
     */
    public getHTMLURL(url: string): string {
        return `<a href="${url.replace(/=/g, "&#61;")}" rel="nofollow" target="_blank">${url}</a>`;
    }

    private _hasUpdates(gr: GlideRecord): boolean {
        return false;
    }

    public type(): string {
        return 'PatchOrchImport';
    }
}