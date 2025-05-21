"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatchOrchImport = void 0;
class PatchOrchImport {
    constructor(instance, source) {
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
    lookupPatchUpdate(patchUpdateId) {
        return null;
    }
    /**
     * Lookup the vulnerability solution
     * @param sourceId - bulletin or article Id
     */
    lookupSolution(sourceId) {
        return null;
    }
    /**
     * Lookup or create Discovered item record, this method will skip the
     * CI creation
     * @param integrationRun - current integration run
     * @param host - host object to lookup CI
     */
    lookupOrCreateDiscoveredItem(integrationRun, host) {
        return null;
    }
    /**
     * Lookup collection record
     * @param collectionId - unique id of collection
     */
    lookupCollection(collectionId) {
        return null;
    }
    /**
     * Create/Update collection record
     * @param collectionObj - object containing collection details
     */
    createOrUpdateCollection(collectionObj) {
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
    createOrUpdateDeployment(deploymentObj) {
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
    createPatchUpdate(patchUpdateId, patchObj) {
        return null;
    }
    /**
     * Update patch update record
     * @param patchSysId - sys Id of patch
     * @param patchObj - object with key as column name and value
     */
    _updatePatchUpdate(patchSysId, patchObj) {
        return false;
    }
    /**
     * Create or Update patch update record
     * @param patchObj - object with key as column name and value
     */
    createOrUpdatePatchUpdate(patchObj) {
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
    createOrLookupDeviceCollection(srcSysId, collectionSysId) {
        return false;
    }
    /**
     * Create/Update Device patch update record
     * @param srcSysId - sys Id of discovered item
     * @param patchSysId - sys Id of patch
     * @param status - status of the patch
     */
    createOrLookupDevicePatchUpdate(srcSysId, patchSysId, status) {
        return false;
    }
    _putInCache(cacheObj, key, value) {
        cacheObj[key] = value;
    }
    _getFromCache(cacheObj, key) {
        return cacheObj[key];
    }
    /**
     * Returns html string for provided url
     * @param url - URL to be converted to HTML link
     */
    getHTMLURL(url) {
        return `<a href="${url.replace(/=/g, "&#61;")}" rel="nofollow" target="_blank">${url}</a>`;
    }
    _hasUpdates(gr) {
        return false;
    }
    type() {
        return 'PatchOrchImport';
    }
}
exports.PatchOrchImport = PatchOrchImport;
//# sourceMappingURL=PatchOrchImport.js.map