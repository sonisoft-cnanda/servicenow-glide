"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeMgmt = void 0;
class ChangeMgmt {
    constructor() {
        this.DEFAULT_ACTIVE_QUERY = "active=true";
        this.CR_STATE_SYNC_PROPERTY = 'sn_vul.cr_state_synch';
        this.PREVIOUS_CR_STATE = {
            CANCELLED: -1,
            OPEN: 0,
            RESOLVED: 1
        };
        this.VI_M2M_MAPPING = {
            sn_vul_vulnerable_item: "sn_vul_m2m_vul_group_item",
            sn_vul_app_vulnerable_item: "sn_vul_app_m2m_vul_group_item",
            sn_vul_container_image_vulnerable_item: "sn_vul_container_m2m_vul_group_item"
        };
        this.VI_VG_TABLE_MAPPING = {
            sn_vul_vulnerable_item: "sn_vul_vulnerability",
            sn_vul_app_vulnerable_item: "sn_vul_app_vulnerability",
            sn_vul_container_image_vulnerable_item: "sn_vul_container_vulnerability"
        };
        this.STATE_SYNC_STATUS_CODE = {
            PROCESSED_AND_VG_STATE_UPDATED: 1,
            PROCESSED_BUT_NO_UPDATE: 2,
            NOT_PROCESSED_STATE_SYNC_IS_OFF: -1,
            NOT_PROCESSED_PREVIOUS_CR_STATE_UNKNOWN: -3,
            NOT_PROCESSED_NO_RECORD_FOUND_FOR_VG: -4,
            UNEXPECTED_ERROR_ON_UPDATE: -10
        };
        this.VG_CR_STATUS = {
            NEW: "new",
            IN_PROGRESS: "in_progress",
            ERROR: "error",
            FINISHED: "finished"
        };
    }
    getVIInGroup(vulGroupId, table) {
        return 0;
    }
    canSplitTask(vulGroupId, vulnGroup) {
        return false;
    }
    canAppSplitTask(vulGroupId) {
        return false;
    }
    _appendTableName(query, table) {
        return "";
    }
    isPatchPluginActive() {
        return true;
    }
    _ensureValidQuery(query, ensureActive, table) {
    }
    _setCIOnCR(crId, ciId) {
    }
    getVulnerableItemsPerGroup(vulGroupId, query, table) {
        return 0;
    }
    getStandardChangeCategories() {
        return [];
    }
    getStandardChangeTemplates(categoryId) {
        return [];
    }
    getUncategorizedChangeTemplates() {
        return [];
    }
    getChangeDescriptionForVG(vgNumber) {
        return "";
    }
    actionCreateChange(actionCreate) {
        return null;
    }
    actionCreateChangeAsync(actionCreate) { }
    actionAssociateChangeAsync(actionAssociate) {
        return false;
    }
    createNewChangeRequest(actionCreate, parentId) {
        return "";
    }
    linkChangeRequestAndCIs(changeSysId, vulnGroupSysId, query) { }
    linkChangeRequestAndVIs(taskId, vulGroupId, query, maxNumber) {
        return 0;
    }
    linkChangeRequestAndVG(taskId, vulGroupId, addAssociateNote) {
        return "";
    }
    isTaskInvalid(sysId) {
        return false;
    }
    getCrListForPossibleAssociation(vgSysId) {
        return "";
    }
    getEarliestRemediationDate(vgGroupId, query) {
        return null;
    }
    getHighestRiskRating(vgGroupId, query) {
        return null;
    }
    getVulnerabilitiesCount(vgGroupId, query) {
        return 0;
    }
    getCIsCount(vgGroupId, query) {
        return 0;
    }
    getGroupState(vgGroupId) {
        return 0;
    }
    getAggregateValues(vulGroupId, query) {
        return null;
    }
    getSplitValues(vulGroupId, query, table) {
        return null;
    }
    isStateSyncEnabled() {
        return false;
    }
    processCrStateChangeAndSyncVgState(vulGroupId) {
        return null;
    }
    getPreferredSolution(vg_sys_id) {
        return "";
    }
    getPreferredSolutionCount(vg_sys_id) {
        return null;
    }
    createImplementationPlan(count, psids) {
        return "";
    }
    appendPatchInformation(prop) {
        return "";
    }
    appendPatchInformationClassic(prop) {
        return "";
    }
    getComputersFromList(computer_list) {
        return "";
    }
    canSchedulePatchVG(vulGrpId) {
        return null;
    }
    getVGTable(table) {
        return "";
    }
    getm2mTable(table) {
        return "";
    }
}
exports.ChangeMgmt = ChangeMgmt;
//# sourceMappingURL=ChangeMgmt.js.map