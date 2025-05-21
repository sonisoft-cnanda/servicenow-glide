export declare class PatchOrchImport {
    private intInstance;
    private SOURCE;
    private DEVICE_COLLECTION;
    private PATCH_UPDATE_DEPLOYMENT;
    private PATCH_UPDATE;
    private DEVICE_COLLECTION_M2M;
    private DEVICE_UPDATE_M2M;
    private SOLUTION;
    private collectionCache;
    private ciCache;
    private patchCache;
    private solutionCache;
    constructor(instance: string, source: string);
    /**
     * Lookup the patch update record
     * @param patchUpdateId - unique identifier for patch
     */
    lookupPatchUpdate(patchUpdateId: string): string | null;
    /**
     * Lookup the vulnerability solution
     * @param sourceId - bulletin or article Id
     */
    lookupSolution(sourceId: string): string | null;
    /**
     * Lookup or create Discovered item record, this method will skip the
     * CI creation
     * @param integrationRun - current integration run
     * @param host - host object to lookup CI
     */
    lookupOrCreateDiscoveredItem(integrationRun: string, host: any): string | null;
    /**
     * Lookup collection record
     * @param collectionId - unique id of collection
     */
    lookupCollection(collectionId: string): string | null;
    /**
     * Create/Update collection record
     * @param collectionObj - object containing collection details
     */
    createOrUpdateCollection(collectionObj: any): any;
    /**
     * Create/Update deployment record
     * @param deploymentObj - object containing deployment details
     */
    createOrUpdateDeployment(deploymentObj: any): any;
    /**
     * Creates patch update record
     * @param patchUpdateId - unique Id of patch
     * @param patchObj - object with key as column name and value
     */
    createPatchUpdate(patchUpdateId: string, patchObj: any): string | null;
    /**
     * Update patch update record
     * @param patchSysId - sys Id of patch
     * @param patchObj - object with key as column name and value
     */
    private _updatePatchUpdate;
    /**
     * Create or Update patch update record
     * @param patchObj - object with key as column name and value
     */
    createOrUpdatePatchUpdate(patchObj: any): any;
    /**
     * Create/Update Device collection record
     * @param srcSysId - sys Id of discovered item
     * @param collectionSysId - sys Id of collection
     */
    createOrLookupDeviceCollection(srcSysId: string, collectionSysId: string): boolean;
    /**
     * Create/Update Device patch update record
     * @param srcSysId - sys Id of discovered item
     * @param patchSysId - sys Id of patch
     * @param status - status of the patch
     */
    createOrLookupDevicePatchUpdate(srcSysId: string, patchSysId: string, status: string): boolean;
    private _putInCache;
    private _getFromCache;
    /**
     * Returns html string for provided url
     * @param url - URL to be converted to HTML link
     */
    getHTMLURL(url: string): string;
    private _hasUpdates;
    type(): string;
}
//# sourceMappingURL=PatchOrchImport.d.ts.map